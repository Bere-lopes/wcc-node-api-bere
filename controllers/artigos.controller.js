// regras de negócio do sistema de artigos
const database = require("../models");
const tabelaArtigos = database.artigos;

//criar um novo artigo

exports.create = (request, response) => {
    const artigo = {
        titulo: request.body.titulo,
        descricao: request.body.descricao,
        publicado: request.body.publicado

    };

    // a promessa pode ser resolvida
    //ou ele pode ser rejeitada (exemplo: ocorreu um erro ao tentar salvar)
    
    tabelaArtigos.create(artigo)
    .then(function ()  {
        response.send("Artigo criado com sucesso");
    }) 
    .catch( function (error)  {
        console.log(error); 
        response.status(500).send("Ocorreu um erro ao salvar o artigo");
    })

};

    exports.findAll = (request, response) =>  {
        const artigos = tabelaArtigos
        .findAll()
        .then(function (data)  {
            response.send(data);
        })
        .catch(function ()  {
            response.status(500).sen("Ocorreu um erro ao buscar os artigos.");

        })
    };

    exports.findByPk = (req, res) =>  {
        tabelaArtigos.findByPk(req, params.id)
        .then(function (user)  {
            if(req.params.id  == user.id)  {
                res.send(user)
            } else {
                res.status(404).send({message: "Não foi possível encontrar com o id="  + req.params.id
        }).catch(function()  {
            res.status(500).send({
                message:"Erro obtendo usuário id=" + req.params.id
            });
        } );
    }

    exports.findOne  = (req,resp) =>  {
        tabelaArtigos.findOne(req.params.titulo)
        .then(function (user)  {
            if (req.query.titulo == user.titulo)  {
                res.send(user);
            } else {
                res.status(404).send({message: "Não foi possível encontrar um usuário."
            });
            }
        }).catch(function () {
            res.status(500).send({
                message: "Erro obtendo usuário."
            });
        });
        };
    }
 
)};