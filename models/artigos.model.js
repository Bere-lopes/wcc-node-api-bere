//model da tabela de artigos
//título, descrição, plublicado


module.exports = (sequelizeDatabase, Sequelize) =>  {
    const Artigo = sequelizeDatabase.define("artigos", {
        titulo: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING 
        },
        publicado: {
            type: Sequelize.BOOLEAN
        }  
    }); 

    return Artigo;
}