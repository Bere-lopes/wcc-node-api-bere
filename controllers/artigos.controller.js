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
            .then(() => response.send("Artigo criado com sucesso")) 
            .catch((error) => {
                console.log(error)
                response.status(500).send("Ocorreu um erro ao salvar o artigo");
            });
        };
    exports.findAll = (request, response) =>  {
     tabelaArtigos
        .findAll()
        .then(function (data)  {
            response.send(data);
        })
        .catch(function ()  {
            response
            .status(500)
            .send("Ocorreu um erro ao buscar os artigos.");

        });
    }

    
// CRU -Create, Read, Update e Delete
    exports.findAllPublished = (request, response) =>  {
        tabelaArtigos.findAll({where: {publicado: false}})
        .then(function (data)  {
        }).catch(function (error) {
            response
            .status(500)
            .send("Não foi possível buscar os artigos publicado");

        });
    };
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
                  });
            };  
        });
    };
    exports.update = (request, reponse) =>  {
        const { body: updates} = request;
        const {id: idArtigo} = request.params;
        const query = {where: { id: idArtigo}, returning: false};
        
        tabelaArtigos
        .update(updates. query)
        .then(function  (data)  {
            //quando returning: true, o sequelize nos retorna uma lista com duas coisas:
            //- a quantidade de itens atualizados
            //- a lista dos itens atualizados
            const linhasAtualizadas = data[0];

            if(linhasAtualizadas === 0)  {
                response
                .status(404)
                .send(
                    "Não foi encontrado nenhum registro para ser atualizado do id: " + idArtigo
                );
                
            } else {
                const artigosAtualizados = data[1];
                response.send(artigosAtualizados); 
            };
            
        }).catch(function (error)  {
            response.status(500).send("Ocorreu um erro ao atualizar o arquivo")
        });  

        
    };
    exports.updateMany = (request, response) =>  {
        const{ body: updates} = request;
        //const {id: idArtigo} = request.params;
        const query = {
            returning: true,
            where: {descricao: "Descrição do artigo"},
        };
    tabelaArtigos.update(updates, query).then(function(data)  {
        const linhasAtualizadas = data[0];
        if(linhasAtualizadas === 0)  {
            response
            .status(404)
            .send(
                "Não foi encontrado nenhum registro para ser atualizado do id: " + idArtigo
            );
            
        } else {
            const artigosAtualizados = data[1];
            response.send(artigosAtualizados); 
        };
        
    }).catch(function (error)  {
        response.status(500).send("Ocorreu um erro ao atualizar o arquivo")
    });
};
    exports.deleteAll = (request, response) => {
        tabelaArtigos.destroy({where:  {}, truncate: false}).then(function (itensDeletados) {
            response.send("Foram deletados" + itensDeletados + "artigos");
        }).catch(function (error)  {
            response.status(500).send("Ocorreu um erro ao deletar os artigos");
        });
};

    exports.delete = (request, response) =>  {
        const { id: idArtigos} = request.params;
        tabelaArtigos.destrou({where: {id: idArtigos}})
        .then(function (itensDeletados)  {
            if(itensDeletados === 0)  {
                response.send("O item com ID" + idArtigos + "deletado com sucesso");
            };
            
        }).catch(function (error)  {

        });
    };



        
            
   
    
    
        
    
            