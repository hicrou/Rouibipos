// =====================================================
// Tenant & License Admin Routes — RouibiPOS
// Super-admin only (protected by SUPER_ADMIN_KEY header)
// =====================================================
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const db = require('../db');

// Super-admin guard: require X-Admin-Key header
function superAdminGuard(req, res, next) {
    const key = req.headers['x-admin-key'];
    if (!key || key !== process.env.SUPER_ADMIN_KEY) {
        return res.status(403).json({ error: 'Super-admin access required' });
    }
    next();
}

function generateLicenseKey() {
    return 'RPOS-' + crypto.randomBytes(4).toString('hex').toUpperCase() +
           '-' + crypto.randomBytes(4).toString('hex').toUpperCase() +
           '-' + crypto.randomBytes(4).toString('hex').toUpperCase();
}

// ── GET /api/admin/tenants ── List all tenants with license info
router.get('/', superAdminGuard, async (req, res) => {
    try {
        const { rows } = await db.query(`
            SELECT t.*, l.plan, l.status, l.license_key, l.trial_ends_at, l.expires_at,
                   l.max_users, l.max_products
            FROM tenants t
            LEFT JOIN licenses l ON l.tenant_id = t.id
            ORDER BY t.created_at DESC
        `);
        res.json(rows);
    } catch (err) {
        console.error('Error listing tenants:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ── POST /api/admin/tenants ── Create a new tenant + license + admin user
router.post('/', superAdminGuard, async (req, res) => {
    const { name, email, slug, phone, address, plan = 'basic', adminUsername, adminPassword } = req.body;

    if (!name || !email || !slug || !adminUsername || !adminPassword) {
        return res.status(400).json({ error: 'name, email, slug, adminUsername, adminPassword are required' });
    }

    // Validate slug (alphanumeric + hyphens only)
    if (!/^[a-z0-9-]+$/.test(slug)) {
        return res.status(400).json({ error: 'Slug must be lowercase alphanumeric with hyphens only' });
    }

    const licenseKey = generateLicenseKey();
    const limits = plan === 'pro'
        ? { max_users: 50, max_products: 10000, status: 'active' }
        : { max_users: 3, max_products: 200, status: 'trial' };

    try {
        // Start transaction
        await db.query('BEGIN');

        // 1. Create tenant
        const tenantResult = await db.query(
            `INSERT INTO tenants (slug, name, email, phone, address)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [slug, name, email, phone || null, address || null]
        );
        const tenant = tenantResult.rows[0];

        // 2. Create license
        const licenseResult = await db.query(
            `INSERT INTO licenses (tenant_id, license_key, plan, status, max_users, max_products, trial_ends_at, expires_at)
             VALUES ($1, $2, $3, $4, $5, $6, NOW() + INTERVAL '30 days', NULL) RETURNING *`,
            [tenant.id, licenseKey, plan, limits.status, limits.max_users, limits.max_products]
        );

        // 3. Create default admin user for this tenant
        const passwordHash = await bcrypt.hash(adminPassword, 10);
        await db.query(
            `INSERT INTO users (username, password_hash, full_name, role, active, tenant_id)
             VALUES ($1, $2, $3, 'admin', true, $4)`,
            [adminUsername, passwordHash, `${name} Admin`, tenant.id]
        );

        // 4. Create default Walk-in client
        await db.query(
            `INSERT INTO clients (name, phone, address, tenant_id) VALUES ('Walk-in Customer', 'N/A', 'N/A', $1)`,
            [tenant.id]
        );

        await db.query('COMMIT');

        res.status(201).json({
            tenant,
            license: licenseResult.rows[0],
            license_key: licenseKey,
            message: `Tenant created. License key: ${licenseKey}`
        });
    } catch (err) {
        await db.query('ROLLBACK');
        if (err.code === '23505') {
            return res.status(409).json({ error: 'Tenant with that slug or email already exists' });
        }
        console.error('Error creating tenant:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ── PUT /api/admin/licenses/:tenantId ── Update a license (activate, suspend, upgrade plan)
router.put('/licenses/:tenantId', superAdminGuard, async (req, res) => {
    const { tenantId } = req.params;
    const { status, plan, max_users, max_products, expires_at } = req.body;

    try {
        const { rows } = await db.query(
            `UPDATE licenses SET
                status       = COALESCE($1, status),
                plan         = COALESCE($2, plan),
                max_users    = COALESCE($3, max_users),
                max_products = COALESCE($4, max_products),
                expires_at   = COALESCE($5::TIMESTAMPTZ, expires_at)
             WHERE tenant_id = $6 RETURNING *`,
            [status, plan, max_users, max_products, expires_at || null, tenantId]
        );
        if (rows.length === 0) return res.status(404).json({ error: 'License not found' });
        res.json(rows[0]);
    } catch (err) {
        console.error('Error updating license:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ── DELETE /api/admin/tenants/:tenantId ── Suspend (soft-delete) a tenant
router.delete('/:tenantId', superAdminGuard, async (req, res) => {
    const { tenantId } = req.params;
    try {
        await db.query(`UPDATE licenses SET status = 'suspended' WHERE tenant_id = $1`, [tenantId]);
        res.json({ message: 'Tenant license suspended' });
    } catch (err) {
        console.error('Error suspending tenant:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
