const dbConfig = require("../confg/db.config.js");
const Sequelize = require("sequelize");

const SequelizeOptions = { dialect: databaseConfig.dialect };
const sequelizeDatabase = new Sequelize(databaseConfig.connectionStringUrl, SequelizeOptions);

const database = {
    Sequelize: Sequelize,
    sequelizeDatabase: sequelizeDatabase
};

const artigosModel = require("./artigos.model.js");
database.artigos = artigosModel (sequelizeDatabase, Sequelize);

module.exports = database;