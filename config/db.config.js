//Configuração do banco de dados
//dotenv
//npm install --save-dev dotenv

const dotenv = require("dotenv");

dotenv.config();


module.exports = {
    connectionStringUrl: process.env.DB_CONNECTION_STRING_URL,
    dialect: "postgres",
};