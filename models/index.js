const databaseConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelizeOptions = { dialect: databaseConfig.dialect };
const sequelizeDatabase = new Sequelize(databaseConfig.connectionStringUrl, sequelizeOptions);

const database = {
    Sequelize: Sequelize,
    sequelizeDatabase: sequelizeDatabase,
};

const artigosModel = require("./artigos.model.js");
database.artigos = artigosModel (sequelizeDatabase, Sequelize);


module.exports = database;