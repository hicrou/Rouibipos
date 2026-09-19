// =====================================================
// License + Tenant Middleware — RouibiPOS Multitenant
// =====================================================
const db = require('../db');

/**
 * Plan feature limits
 */
const PLAN_LIMITS = {
    trial: { max_users: 3, max_products: 50 },
    basic: { max_users: 3, max_products: 200 },
    pro:   { max_users: 50, max_products: 10000 },
};

/**
 * checkLicense — runs after authenticateToken.
 * Fetches the tenant's active license and attaches it to req.license.
 * Returns 402 if license is expired or suspended.
 */
async function checkLicense(req, res, next) {
    if (!req.user || !req.user.tenant_id) {
        return res.status(401).json({ error: 'No tenant context in token' });
    }

    try {
        const { rows } = await db.query(
            `SELECT l.*, t.slug, t.name as tenant_name
             FROM licenses l
             JOIN tenants t ON t.id = l.tenant_id
             WHERE l.tenant_id = $1
             ORDER BY l.created_at DESC
             LIMIT 1`,
            [req.user.tenant_id]
        );

        if (rows.length === 0) {
            return res.status(402).json({ error: 'No license found for this tenant' });
        }

        const license = rows[0];

        // Check if trial has expired
        if (license.status === 'trial' && license.trial_ends_at && new Date() > new Date(license.trial_ends_at)) {
            return res.status(402).json({
                error: 'Trial expired',
                code: 'TRIAL_EXPIRED',
                expired_at: license.trial_ends_at
            });
        }

        // Check if license is suspended
        if (license.status === 'suspended') {
            return res.status(402).json({ error: 'License suspended. Contact support.', code: 'SUSPENDED' });
        }

        // Check if license has a hard expiry date
        if (license.status === 'expired' || (license.expires_at && new Date() > new Date(license.expires_at))) {
            return res.status(402).json({ error: 'License expired', code: 'EXPIRED', expired_at: license.expires_at });
        }

        // Attach license and plan limits to request
        req.license = {
            ...license,
            limits: PLAN_LIMITS[license.status === 'trial' ? 'trial' : license.plan] || PLAN_LIMITS.basic
        };

        next();
    } catch (err) {
        console.error('License check error:', err);
        res.status(500).json({ error: 'Internal Server Error during license check' });
    }
}

/**
 * enforceLimit(resource) — factory that returns middleware checking a resource limit.
 * Usage: router.post('/products', authenticateToken, checkLicense, enforceLimit('products'), ...)
 * @param {'users'|'products'} resource
 */
function enforceLimit(resource) {
    return async (req, res, next) => {
        if (!req.license) return next(); // no license attached — skip (shouldn't happen)

        const tenantId = req.user.tenant_id;
        const limit = req.license.limits[`max_${resource}`];

        try {
            const { rows } = await db.query(
                `SELECT COUNT(*) as count FROM ${resource} WHERE tenant_id = $1 AND active = true`,
                [tenantId]
            );
            const currentCount = parseInt(rows[0].count, 10);

            if (currentCount >= limit) {
                return res.status(403).json({
                    error: `${resource} limit reached for your plan (${limit} max). Upgrade to Pro for more.`,
                    code: 'LIMIT_REACHED',
                    current: currentCount,
                    limit
                });
            }
            next();
        } catch (err) {
            console.error(`enforceLimit(${resource}) error:`, err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
}

/**
 * requirePro — blocks access for Basic/Trial tenants
 */
function requirePro(req, res, next) {
    if (!req.license || req.license.plan !== 'pro') {
        return res.status(403).json({
            error: 'This feature requires a Pro license.',
            code: 'PRO_REQUIRED'
        });
    }
    next();
}

module.exports = { checkLicense, enforceLimit, requirePro };
