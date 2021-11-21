// regras de negócio do sistema de artigos

const { response } = require("express");
const { artigos } = require("../models");
const database = require("../models");
const tabelaArtigos = database.artigos;

//criar um novo artigo

exports.create = (request, response) => {
    const artigo = {
        titulo: request.body.titulo,
        descricao: request.body.descricao,
        publicado: request.body.publicado
    };
}

    // a promessa pode ser resolvida
    //ou ele pode ser rejeitada (exemplo: ocorreu um erro ao tentar salvar)

    tabelaArtigos
        .create(artigos)  
            .then(function() {
                response.send("Art igo criado com sucesso");
          })
          
        .catch( function (error)  {
           response
            .status(500)
            .send({ message: "Ocorreu um erro ao salvar o artigo"});
    });

    exports.findAll = (request, response) =>  {
     tabelaArtigos
        .findAll()
        .then(function (data)  {
            response.send(data);
        })
        .catch(function ()  {
            response.status(500).send("Ocorreu um erro ao buscar os artigos.");
        });
    };

    exports.findByTitle = (request, response) =>  {
        const tituloArtigo = request.query.titulo;
        tabelaArtigos
        .findOne({where:  {titulo: tituloArtigo}})
        .then(function (data)  {  
            if(data)  {
                response.send(data);
        } else {
            response
                .status(404)
                .send(
                    "Não foi possível encontrar um artigo com titulo: ",
                    request.query.titulo
                );
                };              
        }).catch(function()  {
            response.status(500).send("Ocorreu um erro ao buscar o artigo com titulo" , request.query.titulo);
        });
    };

    exports.findById = (request, response) =>  {
        const idArtigo = request.query.id;
        tabelaArtigos
        .findByPK(idArtigo)
        .then(function (data)  {
            if (data)  {
                response.send(data);
            } else {
                response.status(404).send({
                    message: "Não foi possível encontrar um artigo com o id:" + idArtigo,
                });
            }
        })
        .catch(function (error)  {
            console.log(error);
            response.status(500).send({
                message: "Ocorreu um erro ao buscar o artigo com titulo:" ,
                 idArtigo,
                });
        });
    };

    exports.findByPK = (request, response) => {
        tabelaArtigos.findByPK(request.params.id)
        .then(function (user)  {
            if (request.params.id == user.id)  {
                response.send(user);
            } else{
                response.status(404).send({message: "Não foi possível encontrar um usuário com o id=" + request.params.id});
            }
        }).catch(function ()  {
            response.status(500).send({
                message: "Erro obtendo usuário id=" + response.params.id
            });
        });   
    };
       
    exports.findOne = (request, response) =>  {
        tabelaArtigos.findOne({where: {titulo: request.query.titulo}})
        .then(function (user)  {
            if (request.query.titulo == user.titulo)  {
                response.send(user);
            } else {
                response.status(404).send({message: "Não foi possível encontrar um usuário."
            });
        }  
    }).catch(function  ()  {
        response.status(500).send({
            message: "Erro obtendo usuário."
        });
    });

    };
   
    
    
        
    
 