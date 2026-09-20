// PostgreSQL connection setup
const { Pool } = require('pg');

// Detect if running on a cloud provider (Railway, Render, Heroku, etc.)
const isCloud = process.env.NODE_ENV === 'production' || 
                process.env.RAILWAY_ENVIRONMENT || 
                process.env.RENDER ||
                (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('postgresql://') && !process.env.DATABASE_URL.includes('localhost'));

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isCloud ? { rejectUnauthorized: false } : false
});

pool.on('connect', () => {
    if (process.env.NODE_ENV !== 'test') {
        // Silent connection success
    }
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool
};