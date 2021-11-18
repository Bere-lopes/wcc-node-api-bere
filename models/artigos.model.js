//model da tabela de artigos
//título, descrição, plublicado

const { Sequelize } = require("sequelize/types")

module.exposts = (sequelizeDatabase) =>  {
    const Artigo = sequelizeDatabase.define("artigos", {
        titulo: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING 
        },
        publicado: {
            TYPE: Sequelize.BOOLEAN
        }  
    }); 

    return Artigo;
}