// =====================================================
// Self-Service Registration Route — RouibiPOS
// POST /api/register — creates a new tenant with 30-day trial
// =====================================================
const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const db = require('../db');

function generateLicenseKey() {
    return 'RPOS-' + crypto.randomBytes(4).toString('hex').toUpperCase() +
           '-' + crypto.randomBytes(4).toString('hex').toUpperCase() +
           '-' + crypto.randomBytes(4).toString('hex').toUpperCase();
}

function generateSlug(name) {
    return name.toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 40)
        + '-' + crypto.randomBytes(2).toString('hex');
}

// POST /api/register
router.post('/', async (req, res) => {
    const { businessName, email, phone, address, adminUsername, adminPassword } = req.body;

    if (!businessName || !email || !adminUsername || !adminPassword) {
        return res.status(400).json({
            error: 'businessName, email, adminUsername, adminPassword are required'
        });
    }

    if (adminPassword.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    const slug = generateSlug(businessName);
    const licenseKey = generateLicenseKey();

    try {
        // Check for Trial Abuse (Company Name, Phone, Address)
        const conditions = ['LOWER(name) = LOWER($1)'];
        const params = [businessName];
        
        if (phone && phone.trim() !== '') {
            params.push(phone.trim());
            conditions.push(`phone = $${params.length}`);
        }
        
        if (address && address.trim() !== '') {
            params.push(address.trim());
            conditions.push(`LOWER(address) = LOWER($${params.length})`);
        }
        
        const existingTenant = await db.query(
            `SELECT id FROM tenants WHERE ${conditions.join(' OR ')} LIMIT 1`,
            params
        );
        
        if (existingTenant.rows.length > 0) {
            return res.status(409).json({ error: 'An account with this business name, phone number, or address already exists. Multiple trials are not allowed.' });
        }

        await db.query('BEGIN');

        // 1. Create tenant
        const tenantResult = await db.query(
            `INSERT INTO tenants (slug, name, email, phone, address)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [slug, businessName, email, phone || null, address || null]
        );
        const tenant = tenantResult.rows[0];

        // 2. Create trial license (30 days, basic limits)
        const licenseResult = await db.query(
            `INSERT INTO licenses (tenant_id, license_key, plan, status, max_users, max_products, trial_ends_at)
             VALUES ($1, $2, 'basic', 'trial', 3, 50, NOW() + INTERVAL '30 days') RETURNING *`,
            [tenant.id, licenseKey]
        );

        // 3. Create admin user
        const passwordHash = await bcrypt.hash(adminPassword, 10);
        await db.query(
            `INSERT INTO users (username, password_hash, full_name, role, active, tenant_id)
             VALUES ($1, $2, $3, 'admin', true, $4)`,
            [adminUsername, passwordHash, `${businessName} Admin`, tenant.id]
        );

        // 4. Seed default data for this tenant
        await db.query(
            `INSERT INTO clients (name, phone, address, tenant_id) VALUES ('Walk-in Customer', 'N/A', 'N/A', $1)`,
            [tenant.id]
        );
        await db.query(
            `INSERT INTO categories (name, name_ar, name_fr, name_es, active, tenant_id)
             VALUES ('General', 'عام', 'Général', 'General', true, $1)`,
            [tenant.id]
        );

        await db.query('COMMIT');

        res.status(201).json({
            message: 'Registration successful! Your 30-day trial has started.',
            tenant: {
                id: tenant.id,
                slug: tenant.slug,
                name: tenant.name,
                email: tenant.email
            },
            license_key: licenseKey,
            trial_ends_at: licenseResult.rows[0].trial_ends_at,
            plan: 'basic (trial)',
            limits: { max_users: 3, max_products: 50 }
        });
    } catch (err) {
        await db.query('ROLLBACK');
        if (err.code === '23505') {
            return res.status(409).json({ error: 'An account with that email already exists' });
        }
        console.error('Registration error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
