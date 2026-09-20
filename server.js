// Basic Express Server for RouibiPOS Backend (Multitenant)
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const { checkLicense, enforceLimit, requirePro } = require('./middleware/license');
const tenantRoutes   = require('./routes/tenants');
const registerRoutes = require('./routes/register');
const paymentRoutes  = require('./routes/payment');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ===== MIDDLEWARE =====

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    let token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token && req.query.token) {
        token = req.query.token;
    }

    if (!token) return res.sendStatus(401); // if there isn't any token

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

function authorize(roles = []) {
    // roles param can be a single role string (e.g. 'admin') or an array of roles (e.g. ['admin', 'manager'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        if (!roles.length || roles.includes(req.user.role)) {
            next();
        } else {
            return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        }
    };
}


// ===== ADMIN & REGISTRATION ROUTES =====
app.use('/api/admin/tenants', tenantRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/payment', authenticateToken, paymentRoutes);

// Root
app.get('/', (req, res) => {
    res.send('<h1>RouibiPOS Backend Server (Multitenant)</h1><p>Running. Use /api/register to sign up or /api/login to access your store.</p>');
});

// ===== AUTHENTICATION =====

app.post('/api/login', async (req, res) => {
    const { username, password, tenant } = req.body;

    if (!tenant) {
        return res.status(400).json({ error: 'tenant slug is required' });
    }

    try {
        // 1. Resolve tenant
        const tenantResult = await db.query('SELECT * FROM tenants WHERE slug = $1', [tenant]);
        if (tenantResult.rows.length === 0) {
            return res.status(400).json({ error: 'Invalid tenant, username, or password' });
        }
        const tenantRow = tenantResult.rows[0];

        // 2. Find user within that tenant
        const { rows } = await db.query(
            'SELECT * FROM users WHERE username = $1 AND tenant_id = $2 AND active = true',
            [username, tenantRow.id]
        );
        if (rows.length === 0) {
            return res.status(400).json({ error: 'Invalid tenant, username, or password' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid tenant, username, or password' });
        }

        // 3. Fetch license info to embed in token
        const licenseResult = await db.query(
            `SELECT plan, status, trial_ends_at, expires_at, max_users, max_products
             FROM licenses WHERE tenant_id = $1 ORDER BY created_at DESC LIMIT 1`,
            [tenantRow.id]
        );
        const license = licenseResult.rows[0] || {};

        // 4. Create JWT with tenant context
        const payload = {
            id: user.id,
            username: user.username,
            role: user.role,
            tenant_id: tenantRow.id,
            tenant_slug: tenantRow.slug,
            tenant_name: tenantRow.name,
            license_plan: license.plan,
            license_status: license.status
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });

        delete user.password_hash;
        res.json({
            token,
            user: { ...user, tenant: { id: tenantRow.id, slug: tenantRow.slug, name: tenantRow.name } },
            license
        });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ── GET /api/license/status ── let the frontend check license at any time
app.get('/api/license/status', authenticateToken, checkLicense, (req, res) => {
    res.json({
        plan: req.license.plan,
        status: req.license.status,
        trial_ends_at: req.license.trial_ends_at,
        expires_at: req.license.expires_at,
        limits: req.license.limits
    });
});


// ===== PRODUCTS API =====

app.get('/api/products', authenticateToken, checkLicense, async (req, res) => {
    try {
        const { rows } = await db.query(
            'SELECT * FROM products WHERE tenant_id = $1 AND active = true ORDER BY id ASC',
            [req.user.tenant_id]
        );
        const products = rows.map(product => ({
            ...product,
            price: parseFloat(product.price),
            cost: parseFloat(product.cost),
        }));
        res.json(products);
    } catch (err) {
        console.error('Error fetching products from database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/products', authenticateToken, authorize(['admin', 'manager']), checkLicense, enforceLimit('products'), async (req, res) => {
    const { name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO products (name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date, active, tenant_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, true, $14) RETURNING *',
            [name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date || null, req.user.tenant_id]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error('Error adding product:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/api/products/:id', authenticateToken, authorize(['admin', 'manager']), checkLicense, async (req, res) => {
    const { id } = req.params;
    const { name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date, active } = req.body;
    try {
        const { rows } = await db.query(
            'UPDATE products SET name = $1, name_ar = $2, name_fr = $3, name_es = $4, price = $5, category = $6, stock = $7, min_stock = $8, barcode = $9, supplier = $10, cost = $11, image = $12, expiry_date = $13, active = $14 WHERE id = $15 AND tenant_id = $16 RETURNING *',
            [name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date || null, active, id, req.user.tenant_id]
        );
        if (rows.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(rows[0]);
    } catch (err) {
        console.error(`Error updating product ${id}:`, err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/api/products/:id', authenticateToken, authorize('admin'), checkLicense, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM products WHERE id = $1 AND tenant_id = $2', [id, req.user.tenant_id]);
        if (result.rowCount === 0) return res.status(404).json({ error: 'Product not found' });
        res.status(204).send();
    } catch (err) {
        console.error(`Error deleting product ${id}:`, err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== CATEGORIES API =====
app.get('/api/categories', authenticateToken, checkLicense, async (req, res) => {
    try {
        const { rows } = await db.query(
            'SELECT * FROM categories WHERE tenant_id = $1 ORDER BY id ASC',
            [req.user.tenant_id]
        );
        res.json(rows);
    } catch (err) {
        console.error('Error fetching categories:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== USERS API =====
app.get('/api/users', authenticateToken, authorize(['admin', 'manager']), checkLicense, async (req, res) => {
    try {
        const { rows } = await db.query(
            'SELECT id, username, full_name, role, active, card_number, card_access FROM users WHERE tenant_id = $1 ORDER BY id ASC',
            [req.user.tenant_id]
        );
        res.json(rows);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/users', authenticateToken, authorize('admin'), checkLicense, enforceLimit('users'), async (req, res) => {
    const { username, password, full_name, role, card_number, card_access } = req.body;
    if (!username || !password || !role) {
        return res.status(400).json({ error: 'username, password, role are required' });
    }
    try {
        const bcrypt = require('bcryptjs');
        const hash = await bcrypt.hash(password, 10);
        const { rows } = await db.query(
            `INSERT INTO users (username, password_hash, full_name, role, active, card_number, card_access, tenant_id)
             VALUES ($1, $2, $3, $4, true, $5, $6, $7) RETURNING id, username, full_name, role, active, card_number, card_access`,
            [username, hash, full_name, role, card_number || null, card_access || false, req.user.tenant_id]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        if (err.code === '23505') return res.status(409).json({ error: 'Username already exists in this store' });
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update user (username, name, role, password)
app.put('/api/users/:id', authenticateToken, authorize('admin'), checkLicense, async (req, res) => {
    const { id } = req.params;
    const { username, full_name, role, password } = req.body;
    try {
        // Ensure user belongs to same tenant
        const check = await db.query('SELECT id FROM users WHERE id = $1 AND tenant_id = $2', [id, req.user.tenant_id]);
        if (check.rows.length === 0) return res.status(404).json({ error: 'User not found' });

        if (password && password.trim() !== '') {
            const hash = await bcrypt.hash(password, 10);
            await db.query(
                'UPDATE users SET username=$1, full_name=$2, role=$3, password_hash=$4 WHERE id=$5 AND tenant_id=$6',
                [username, full_name, role, hash, id, req.user.tenant_id]
            );
        } else {
            await db.query(
                'UPDATE users SET username=$1, full_name=$2, role=$3 WHERE id=$4 AND tenant_id=$5',
                [username, full_name, role, id, req.user.tenant_id]
            );
        }
        res.json({ success: true });
    } catch (err) {
        if (err.code === '23505') return res.status(409).json({ error: 'Username already exists in this store' });
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Toggle user active status
app.patch('/api/users/:id/status', authenticateToken, authorize('admin'), checkLicense, async (req, res) => {
    const { id } = req.params;
    const { active } = req.body;
    try {
        const check = await db.query('SELECT id FROM users WHERE id = $1 AND tenant_id = $2', [id, req.user.tenant_id]);
        if (check.rows.length === 0) return res.status(404).json({ error: 'User not found' });
        await db.query('UPDATE users SET active=$1 WHERE id=$2 AND tenant_id=$3', [active, id, req.user.tenant_id]);
        res.json({ success: true });
    } catch (err) {
        console.error('Error toggling user status:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete user
app.delete('/api/users/:id', authenticateToken, authorize('admin'), checkLicense, async (req, res) => {
    const { id } = req.params;
    try {
        const check = await db.query('SELECT id FROM users WHERE id = $1 AND tenant_id = $2', [id, req.user.tenant_id]);
        if (check.rows.length === 0) return res.status(404).json({ error: 'User not found' });
        if (parseInt(id) === req.user.id) return res.status(400).json({ error: 'Cannot delete your own account' });
        await db.query('DELETE FROM users WHERE id=$1 AND tenant_id=$2', [id, req.user.tenant_id]);
        res.json({ success: true });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== CLIENTS API =====
app.get('/api/clients', authenticateToken, checkLicense, async (req, res) => {
    try {
        const { rows } = await db.query(
            'SELECT * FROM clients WHERE tenant_id = $1 ORDER BY name ASC',
            [req.user.tenant_id]
        );
        res.json(rows);
    } catch (err) {
        console.error('Error fetching clients:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== SUPPLIERS API =====
app.get('/api/suppliers', authenticateToken, checkLicense, async (req, res) => {
    try {
        const { rows } = await db.query(
            'SELECT * FROM suppliers WHERE tenant_id = $1 ORDER BY name ASC',
            [req.user.tenant_id]
        );
        res.json(rows);
    } catch (err) {
        console.error('Error fetching suppliers:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== SALES API =====

app.get('/api/sales', authenticateToken, authorize(['admin', 'manager']), checkLicense, async (req, res) => {
    try {
        const { rows } = await db.query(`
            SELECT s.id, s.sale_date, u.full_name as cashier, c.name as client,
                   s.total, s.payment_method, s.payment_status
            FROM sales s
            JOIN users u ON s.user_id = u.id
            JOIN clients c ON s.client_id = c.id
            WHERE s.tenant_id = $1
            ORDER BY s.sale_date DESC
        `, [req.user.tenant_id]);
        res.json(rows);
    } catch (err) {
        console.error('Error fetching sales history:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/sales', authenticateToken, async (req, res) => {
    const { clientId, items, subtotal, tax, total, paymentMethod, paymentStatus, currency } = req.body;
    const client = await require('./db').query.__proto__.constructor === Function
        ? null : null; // placeholder – we use pool directly below

    // Use a raw pg client for transaction support
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
    const pgClient = await pool.connect();

    try {
        await pgClient.query('BEGIN');

        // Insert the sale header
        const saleResult = await pgClient.query(
            `INSERT INTO sales (user_id, client_id, subtotal, tax, total, payment_method, payment_status, currency, sale_date)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW()) RETURNING *`,
            [req.user.id, clientId, subtotal, tax, total, paymentMethod, paymentStatus || 'paid', currency || 'DZD']
        );
        const sale = saleResult.rows[0];

        // Insert each sale item and update stock
        for (const item of items) {
            await pgClient.query(
                `INSERT INTO sale_items (sale_id, product_id, quantity, unit_price, total_price)
                 VALUES ($1, $2, $3, $4, $5)`,
                [sale.id, item.id, item.quantity, item.price, item.quantity * item.price]
            );
            // Decrement stock
            await pgClient.query(
                'UPDATE products SET stock = stock - $1 WHERE id = $2',
                [item.quantity, item.id]
            );
        }

        await pgClient.query('COMMIT');
        res.status(201).json(sale);

    } catch (err) {
        await pgClient.query('ROLLBACK');
        console.error('Error creating sale:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        pgClient.release();
        await pool.end();
    }
});

// ===== START SERVER =====
// Export for Vercel serverless AND run directly locally
if (require.main === module) {
    // Running locally with `node server.js` or `npm start`
    app.listen(PORT, () => {
        console.log(`✅ Server is running on http://localhost:${PORT}`);
        console.log('📦 Backend connected to PostgreSQL.');
        console.log('🚀 Ready to handle API requests.');
    });
}

// Export for Vercel serverless functions
module.exports = app;