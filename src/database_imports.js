const credentials = {
    user: `${process.env.DB_USER}`,
    host: "localhost",
    database: "dominikocsofszki",
    password: `${process.env.DB_PASS}`,
    port: 5432
}

const {Pool} = require('pg')
const pool_new = new Pool({
    credentials,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})
exports.pool_new = pool_new