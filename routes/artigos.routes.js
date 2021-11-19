//Obter um artigo específico
//Obter todos os artigos publicado
//Post - Criar um novo artigo
//Put - Plublicar um artigo
//Delete - Deletar um artigo

module.exports = (app) => {
    const artigosController = require("../controllers/artigos.controller");
    let router = require("express").Router();

    /*
    router.post("/", artigosController.create);
    app.use("/artigos", router);
    */

    router.get("/findAll", artigosController.findAll);
    router.post("/", artigosController.create);

    app.use("/artigos", router)
};
