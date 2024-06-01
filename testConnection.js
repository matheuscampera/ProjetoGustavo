const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

async function testConnection() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
        console.log('Conexão bem-sucedida!');
        await connection.end();
    } catch (error) {
        console.error('Erro na conexão:', error);
    }
}

testConnection();
