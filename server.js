// Basic Express Server for RouibiPOS Backend
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db'); // Import the database connection module
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(cors()); // Enable All CORS Requests
app.use(express.json());

// ===== MIDDLEWARE =====

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (token == null) return res.sendStatus(401); // if there isn't any token

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


// A simple root route to confirm the server is running
app.get('/', (req, res) => {
    res.send('<h1>RouibiPOS Backend Server</h1><p>The server is running correctly. Ready to handle API requests.</p>');
});

// ===== AUTHENTICATION =====

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const { rows } = await db.query('SELECT * FROM users WHERE username = $1 AND active = true', [username]);
        if (rows.length === 0) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Create JWT
        const payload = { id: user.id, username: user.username, role: user.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });

        // Don't send password hash to client
        delete user.password_hash;

        res.json({ token, user });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ===== PRODUCTS API =====

app.get('/api/products', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM products ORDER BY id ASC');
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

app.post('/api/products', authenticateToken, authorize(['admin', 'manager']), async (req, res) => {
    const { name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date } = req.body;
    try {
        const { rows } = await db.query(
            'INSERT INTO products (name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date, active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, true) RETURNING *',
            [name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date || null]
        );
        res.status(201).json(rows[0]);
    } catch (err) {
        console.error('Error adding product:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/api/products/:id', authenticateToken, authorize(['admin', 'manager']), async (req, res) => {
    const { id } = req.params;
    const { name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date, active } = req.body;
    try {
        const { rows } = await db.query(
            'UPDATE products SET name = $1, name_ar = $2, name_fr = $3, name_es = $4, price = $5, category = $6, stock = $7, min_stock = $8, barcode = $9, supplier = $10, cost = $11, image = $12, expiry_date = $13, active = $14 WHERE id = $15 RETURNING *',
            [name, name_ar, name_fr, name_es, price, category, stock, min_stock, barcode, supplier, cost, image, expiry_date || null, active, id]
        );
        if (rows.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(rows[0]);
    } catch (err) {
        console.error(`Error updating product ${id}:`, err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/api/products/:id', authenticateToken, authorize('admin'), async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM products WHERE id = $1', [id]);
        if (result.rowCount === 0) return res.status(404).json({ error: 'Product not found' });
        res.status(204).send(); // No Content
    } catch (err) {
        console.error(`Error deleting product ${id}:`, err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== CATEGORIES API =====
app.get('/api/categories', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM categories ORDER BY id ASC');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching categories:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== USERS API =====
app.get('/api/users', authenticateToken, authorize(['admin', 'manager']), async (req, res) => {
    try {
        const { rows } = await db.query('SELECT id, username, full_name, role, active, card_number, card_access FROM users ORDER BY id ASC');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== CLIENTS API =====
app.get('/api/clients', authenticateToken, async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM clients ORDER BY name ASC');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching clients:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== SUPPLIERS API =====
app.get('/api/suppliers', authenticateToken, async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM suppliers ORDER BY name ASC');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching suppliers:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ===== SALES API =====

app.get('/api/sales', authenticateToken, authorize(['admin', 'manager']), async (req, res) => {
    try {
        const { rows } = await db.query(`
            SELECT s.id, s.sale_date, u.full_name as cashier, c.name as client, s.total, s.payment_method, s.payment_status
            FROM sales s
            JOIN users u ON s.user_id = u.id
            JOIN clients c ON s.client_id = c.id
            ORDER BY s.sale_date DESC
        `);
        res.json(rows);
    } catch (err) {
        console.error('Error fetching sales history:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/sales', authenticateToken, async (req, res) => {
    const { clientId, items, subtotal, tax, total, paymentMethod, paymentStatus, currency } = req.body;
    const
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Backend is now connected to PostgreSQL.');
    console.log('Next step: Refactor the front-end to fetch data from this server.');
});