const express = require('express');
const router = express.Router();
const db = require('../db');

// Helper to upgrade license
async function upgradeLicense(tenantId) {
    const { rows } = await db.query(
        `UPDATE licenses SET 
            plan = 'pro', 
            status = 'active', 
            max_users = 50, 
            max_products = 10000, 
            expires_at = NOW() + INTERVAL '1 year' 
         WHERE tenant_id = $1 RETURNING *`,
        [tenantId]
    );
    return rows[0];
}

// ==============================================
// 1. PAYPAL WEBHOOK / CAPTURE
// ==============================================
router.post('/paypal/capture', async (req, res) => {
    const { orderID, details } = req.body;
    const tenantId = req.user.tenant_id;

    if (!orderID || !details) {
        return res.status(400).json({ error: 'Missing PayPal order details' });
    }

    // In production, you MUST verify the orderID with PayPal API here to prevent spoofing.
    // Since this is sandbox/test mode, we will trust the client details.

    try {
        if (details.status === 'COMPLETED') {
            const license = await upgradeLicense(tenantId);
            if (!license) return res.status(404).json({ error: 'License not found' });
            
            res.status(200).json({ message: 'PayPal payment successful! Account upgraded.', license });
        } else {
            res.status(400).json({ error: 'PayPal payment not completed' });
        }
    } catch (err) {
        console.error('PayPal capture error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ==============================================
// 2. CHARGILY EPAY V2 (CIB & Edahabia)
// ==============================================

// Create Checkout URL
router.post('/chargily/create', async (req, res) => {
    const tenantId = req.user.tenant_id;

    // Sandbox / Test Mode
    // Instead of calling the real Chargily API, we mock the checkout URL.
    // To make this real: Use axios/fetch to POST to https://pay.chargily.net/test/api/v2/checkouts
    // with your Secret Key and return the `checkout_url`.
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        // Mocking the checkout URL for testing purposes
        const mockCheckoutUrl = `/api/payment/chargily/mock-checkout?tenantId=${tenantId}&token=${token}`;
        res.status(200).json({ checkout_url: mockCheckoutUrl });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create Chargily checkout' });
    }
});

// Mock Checkout Page (For testing without Chargily API keys)
router.get('/chargily/mock-checkout', (req, res) => {
    const tenantId = req.query.tenantId;
    res.send(`
        <html>
        <body style="font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f8fafc;">
            <div style="background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
                <h2>Chargily Sandbox Payment</h2>
                <p>Simulating CIB / Edahabia Payment for 10,000 DZD</p>
                <form action="/api/payment/chargily/mock-success" method="POST">
                    <input type="hidden" name="tenantId" value="${tenantId}">
                    <button type="submit" style="background: #16a34a; color: white; border: none; padding: 10px 20px; font-size: 16px; border-radius: 4px; cursor: pointer;">
                        Simulate Successful Payment
                    </button>
                </form>
            </div>
        </body>
        </html>
    `);
});

// Mock Success Callback
router.post('/chargily/mock-success', async (req, res) => {
    const tenantId = req.body.tenantId;
    try {
        await upgradeLicense(tenantId);
        // Redirect back to dashboard after success
        res.redirect('/index.html');
    } catch (err) {
        res.status(500).send('Error upgrading license');
    }
});

// Webhook for Real Chargily Integration (To be used when real API is active)
router.post('/chargily/webhook', express.raw({type: 'application/json'}), (req, res) => {
    // 1. Verify Signature using your Chargily Secret Key
    // 2. Parse payload
    // 3. If payload.type === 'checkout.paid', upgrade the license
    res.status(200).send('Webhook received');
});

// ==============================================
// 3. PAYONEER MANUAL NOTIFICATION
// ==============================================
router.post('/payoneer/notify', async (req, res) => {
    const tenantId = req.user.tenant_id;
    // Here you would typically save a record in the database like:
    // INSERT INTO pending_payments (tenant_id, method, status) VALUES (tenantId, 'payoneer', 'pending')
    // And possibly send an email to the super admin.
    
    console.log(`[Payoneer Alert] Tenant ${tenantId} claims to have sent $75 via Payoneer. Please verify.`);
    
    res.status(200).json({ message: 'Notification sent! Our team will verify your transfer and activate your account shortly.' });
});

module.exports = router;
