// PostgreSQL connection setup
const { Pool } = require('pg');

// The pool will use the DATABASE_URL environment variable
// to connect to your PostgreSQL instance.
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};