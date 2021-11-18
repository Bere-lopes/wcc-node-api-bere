const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", function(req, res)  {
        res.send("Dasa Educa - Artigos");
});
app.post("/", function(req, res)  {
    res.send("Dasa Educa - Post");
});
app. put("/:id", function(req, res)  {
    console.log(req.body.mensagem, req.params.id);
    res.send("Dasa Educa - Put");
});
app.delete("/", function(req,res)  {
    res.send("Dasa Educa - Delete geral");
});
app.delete("/:id", function(req,res)  {
    res.send("Dasa Educa - Delete especificar");
});

app.listen(port, function() {
    console.log("Ouvindo porta " , port);
});