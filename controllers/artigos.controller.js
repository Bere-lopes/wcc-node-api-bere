// regras de negócio do sistema de artigos
const { request, response } = require("express");
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
            .then(() => response.send("Artigo criado com sucesso")) 
            .catch((error) => {
                console.log(error)
                response.status(500).send("Ocorreu um erro ao salvar o artigo");
            });
        }
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

// CRU -Create, Read, Update e Delete

    exports.findByTitle = (request, response) =>  {
        const tituloArtigo = request.query.titulo;
        tabelaArtigos.findOne({where:{titulo: tituloArtigo}})  
        .then(function (data)  {  
            if(data)  {
                response.send(data);
        } else {
            response
                .status(404)
                .send("Não foi possível encontrar um artigo com titulo: ",
                tituloArtigo
                );
      };  
           
        }).catch(function()  {
            response.status(500).send("Ocorreu um erro ao buscar o artigo com titulo" , tituloArtigo);
        });
    };
        exports.findById = (request, response) => {
            const idArtigos = request.query.id;
        tabelaArtigos.findByPk(idArtigos)
        .then(function (data)  {
            if (data)  {
                response.send(data);
            } else {
                response.status(404).send(
                     "Não foi possível encontrar um artigo com o id:" + idArtigos,
                  ).catch(function (error)  {
                      response.status(500)
                      .send("Ocorreu um erro", idArtigos)
                  })
            };  
        });
    };


        
            
   
    
    
        
    
            