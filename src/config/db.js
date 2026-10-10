const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'mybussaarthi_db',
  password: process.env.PGPASSWORD || 'postgres',
  port: Number(process.env.PGPORT) || 5432,
});

pool.on('error', (err) => {
  console.error('Database connection error:', err.message);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
