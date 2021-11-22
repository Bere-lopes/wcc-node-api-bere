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

    router.get("/findByTitle", artigosController.findByTitle);
    
    router.get("/findById", artigosController.findById);
        
    
    
   

    app.use("/artigos", router);

}



    

    
