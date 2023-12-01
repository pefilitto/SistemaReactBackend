import Produto from "../modelo/produto.js";

export default class ControllerProduto{
    gravar(req, res){
        res.type("application/json");
        if(req.method === "POST" && req.is("application/json")){
            const dados = req.body;

            const nome = dados.nome;
            const preco = dados.preco;
            const qtdEstoque = dados.qtdEstoque;
            const codigoCategoria = dados.codigoCategoria;
            const descricao = dados.descricao;

            if(nome && preco && qtdEstoque && codigoCategoria && descricao){
                const produto = new Produto(0, nome, preco, qtdEstoque, codigoCategoria, descricao);

                produto.buscar(nome).then((listaProdutos) => {
                    if(listaProdutos.length == 0){
                        produto.gravar().then(() => {
                            res.status(200).json({
                                "status": true,
                                "codigoGerado": produto.codigo,
                                "mensagem": "Produto cadastrado com sucesso"
                            })
                        }).catch((e) => {
                            res.status(500).json({
                                "status": false,
                                "mensagem": "Nao foi possivel gravar o produto " + e.message
                            })
                        })
                    }
                    else{
                        res.status(404).json({
                            "status": false,
                            "mensagem": "Produto ja cadastrado!"
                        })
                    }
                })
                
            }
            else{
                res.status(400).json({
                    "status": false,
                    "mensagem": "Por gentileza, informe todos os campos!"
                })
            }
        }
        else{
            res.status(400).json({
                "status": false,
                "mensagem": "Para gravar identifique o metodo POST!"
            })
        }
    }

    excluir(req, res){
        res.type("application/json");
        if(req.method === "DELETE"){
            const codigoProduto = req.params.codigo; // Suponha que o código do produto a ser excluído seja passado como parâmetro na URL.
    
            if (codigoProduto) {
                const produto = new Produto(codigoProduto);
                produto.excluir(codigoProduto).then(() => {
                        res.status(200).json({
                            "status": true,
                            "mensagem": "Produto excluído com sucesso"
                        });
                    })
                    .catch((e) => {
                        res.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao excluir o produto: " + e.message
                        });
                    });
            } else {
                res.status(400).json({
                    "status": false,
                    "mensagem": "Por gentileza, informe o código do produto a ser excluído na URL"
                });
            }
        } else {
            res.status(400).json({
                "status": false,
                "mensagem": "Por gentileza, utilize o método DELETE para excluir um produto"
            });
        }
    }
    

    atualizar(req, res){
        res.type("application/json");
        if(req.method === "PATCH" && req.is("application/json")){
            const codigoProduto = req.params.codigo; // Suponha que o código do produto a ser atualizado seja passado como parâmetro na URL.
            const novosDados = req.body;

            const nome = novosDados.nome;
            const preco = novosDados.preco;
            const qtdEstoque = novosDados.qtdEstoque;
            const codigoCategoria = novosDados.codigoCategoria;
            const descricao = novosDados.descricao;
    
            if (codigoProduto && nome && preco && qtdEstoque && codigoCategoria && descricao) {
                const produto = new Produto(codigoProduto, nome, preco, qtdEstoque, codigoCategoria, descricao)
                produto.alterar().then(() => {
                        res.status(200).json({
                            "status": true,
                            "mensagem": "Produto atualizado com sucesso"
                        });
                    })
                    .catch((e) => {
                        res.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao atualizar o produto: " + e.message
                        });
                    });
            } else {
                res.status(400).json({
                    "status": false,
                    "mensagem": "Por gentileza, informe o código do produto a ser atualizado na URL e forneça os novos dados no corpo da requisição"
                });
            }
        } else {
            res.status(400).json({
                "status": false,
                "mensagem": "Por gentileza, utilize o método PATCH para atualizar um produto"
            });
        }
    }
    

    buscar(req, res){
        res.type("application/json");
        if(req.method === "GET"){
            let parametro = "";
            const codigoProduto = req.params.codigo; // Suponha que o código do produto a ser buscado seja passado como parâmetro na URL.
            const {descricao} = req.query;

            if(codigoProduto){
                parametro = codigoProduto;
            }

            if(descricao){
                parametro = descricao;
            }

            if (parametro) {
                const produto = new Produto(parametro);
                produto.buscar(parametro).then((produto) => {
                        if (produto.length > 0) {
                            res.status(200).json({
                                "status": true,
                                "produto": produto
                            });
                        } else {
                            res.status(404).json({
                                "status": false,
                                "mensagem": "Produto não encontrado"
                            });
                        }
                    })
                    .catch((e) => {
                        res.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao buscar o produto: " + e.message
                        });
                    });
            } else {
                res.status(400).json({
                    "status": false,
                    "mensagem": "Por gentileza, informe o código do produto a ser buscado na URL"
                });
            }
        } else {
            res.status(400).json({
                "status": false,
                "mensagem": "Por gentileza, utilize o método GET para buscar um produto"
            });
        }
    }
    
}