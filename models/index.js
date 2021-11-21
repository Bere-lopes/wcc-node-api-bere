const databaseConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const {dialect, connectionStringUrl } = databaseConfig;
const sequelizeOptions = { dialect };
const sequelizeDatabase = new Sequelize(connectionStringUrl, sequelizeOptions);

const database = {
    Sequelize: Sequelize,
    sequelizeDatabase: sequelizeDatabase,
};

const artigosModel = require("./artigos.model.js");//vai procurar o arquivo na pasta
database.artigos = artigosModel (sequelizeDatabase, Sequelize);


module.exports = database;