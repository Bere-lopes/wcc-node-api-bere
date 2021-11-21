//Obter um artigo específico
//Obter todos os artigos publicado
//Post - Criar um novo artigo
//Put - Plublicar um artigo
//Delete - Deletar um artigo

module.exports = (app)  => {

    const artigosController = require("../controllers/artigos.controller");
    let router = require("express").Router();

    
    
    router.post("/", artigosController.create);
    
    router.get("/findAll", artigosController.findAll);
    
    router.get("/findById", artigosController.findById)
    
    router.get("/findByPK", artigosController.findByPK);
    
    router.get("/findByTitle", artigosController.findByTitle);
    
    router.get("/findOne", artigosController.findOne);

    
    

    app.use("/artigos", router);

}



    

    
