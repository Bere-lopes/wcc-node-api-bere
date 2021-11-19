const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", function(request, response)  {
        response.send("Dasa Educa - Artigos");
});

const database = require("./models");
database.sequelizeDatabase.sync();

const router = require("./routes/artigos.routes");
router(app);

app.listen(port, function() {
    console.log("Ouvindo porta " , port);
});