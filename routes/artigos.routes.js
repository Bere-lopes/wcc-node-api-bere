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
        
    router.get("/published", artigosController.findAllPublished);
    
    router.put("/:id", artigosController.update);

    router.put("/", artigosController.updateMany);

    router.delete("/", artigosController.deleteAll);

    router.delete("/:id", artigosController.delete);

    app.use("/articles", router);

}



    

    
