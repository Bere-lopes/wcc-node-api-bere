const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", function(req, res)  {
        res.send("Minha primeira requisição");
});

app.get("/segunda-req", function(req, res) {
    res.send("Minha segunda requisição");
});

app.get("/com-parametros", function(req, res)  {
    if(req.query.nome === "Berenice")  {
        res.send("Berenice chamou requisição"); 
    }
    res.send("Com parâmetro funciona?  Sabadou " + req.query.nome);
});

app.post("/meu-primeiro-post", function (req, res) {
    console.log(req.body);
    res.send("Meu post funciona");

});

app.put("/meu-primeiro-put/:id", function(req, res)  {
    console.log(req.body, req.params.id);
    res.send("Meu put funciona");

});

app.delete("/meu-primeiro-delete/:id", function(req, res)  {
    console.log(req.params.id);
    res.send("Meu delete funciona, que legal!" + req.params.id);

});

app.listen(port, function() {
    console.log("Ouvindo porta " , port);
});