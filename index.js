const express = require("express");
const app = express();
const port = 8080;

app.get("/", function(req, res)  {
        res.send("Minha primeira requisição");
});

app.get("/segunda-req", function(req, res) {
    res.send("Minha segunda requisição");
});

app.get("/com-parametros", function(req, res)  {
    res.send("Com parâmetro funciona?  Sabadou " + req.query.nome);
});

app.listen(port, function() {
    console.log("Ouvindo porta " , port);
});