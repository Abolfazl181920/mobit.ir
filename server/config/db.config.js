const mysql = require("mysql")
require("dotenv")

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'mysql'
})

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed!')
    }
    console.log('Database connection Successfull!')
    connection.release()
})

module.exports = { pool }