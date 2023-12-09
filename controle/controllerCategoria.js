import Categoria from "../modelo/categoria.js";

export default class ControllerCategoria {
    gravar(req, res) {
        res.type("application/json");
        if (req.method === "POST" && req.is("application/json")) {
            const dados = req.body;

            const tipoProduto = dados.tipoProduto;
            const tamanho = dados.tamanho;

            if (tipoProduto && tamanho) {
                const categoria = new Categoria(0, tipoProduto, tamanho);

                categoria.buscar(tipoProduto, tamanho).then((listaCategorias) => {
                    if (listaCategorias.length == 0) {
                        categoria.gravar().then(() => {
                            res.status(200).json({
                                "status": true,
                                "codigoGerado": categoria.codigo,
                                "mensagem": "Categoria cadastrada com sucesso"
                            })
                        }).catch((e) => {
                            res.status(500).json({
                                "status": false,
                                "mensagem": "Erro ao inserir categoria: " + e.message
                            })
                        })
                    }
                    else {
                        res.status(400).json({
                            "status": false,
                            "mensagem": "Categoria já cadastrada"
                        })
                    }
                })
            }
            else {
                res.status(400).json({
                    "status": false,
                    "mensagem": "Por gentileza, informe todos os campos!"
                })
            }
        }
        else {
            res.status(400).json({
                "status": false,
                "mensagem": "Por gentileza, utilize o metodo POST para cadastrar uma categoria"
            })
        }
    }

    excluir(req, res) {
        res.type("application/json");
        if (req.method === "DELETE") {
            const codigoCategoria = req.params.codigoCategoria; // Suponha que o código da categoria a ser excluída seja passado como parâmetro na URL.
            if (codigoCategoria) {
                const categoria = new Categoria(codigoCategoria);

                categoria.excluir(codigoCategoria).then(() => {
                    res.status(200).json({
                        "status": true,
                        "mensagem": "Categoria excluída com sucesso"
                    });
                }).catch((e) => {
                    res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao excluir categoria: " + e.message
                    });
                });
            }
            else {
                res.status(400).json({
                    "status": false,
                    "mensagem": "Por gentileza, informe o código da categoria a ser excluída na URL"
                });
            }
        } else {
            res.status(400).json({
                "status": false,
                "mensagem": "Por gentileza, utilize o método DELETE para excluir uma categoria"
            });
        }
    }


    atualizar(req, res) {
        res.type("application/json");
        if (req.method === "PATCH" && req.is("application/json")) {
            const codigoCategoria = req.params.codigoCategoria; // Suponha que o código da categoria a ser atualizada seja passado como parâmetro na URL.
            const novosDados = req.body;

            const tipoProduto = novosDados.tipoProduto;
            const tamanho = novosDados.tamanho;

            if (codigoCategoria && tipoProduto && tamanho) {
                const categoria = new Categoria(codigoCategoria, tipoProduto, tamanho);

                categoria.alterar().then(() => {
                    res.status(200).json({
                        "status": true,
                        "mensagem": "Categoria atualizada com sucesso"
                    });
                }).catch((e) => {
                    res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao atualizar categoria: " + e.message
                    });
                });
            }
        }
        else {
            res.status(400).json({
                "status": false,
                "mensagem": "Por gentileza, informe o código da categoria a ser atualizada na URL e forneça os novos dados no corpo da requisição"
            });
        }
    }

buscar(req, res) {
    res.type("application/json");
    if (req.method === "GET") {
        let parametro = "";
        const { codigoCategoria } = req.params;
        const { descricao } = req.query; // Suponha que o código da categoria a ser buscada seja passado como parâmetro na URL.

        if (codigoCategoria) {
            parametro = codigoCategoria;
        }

        if (descricao) {
            parametro = descricao;
        }

        const categoria = new Categoria(parametro)
        categoria.buscar(parametro, 0).then((categoria) => {
            if (categoria) {
                res.status(200).json({
                    "status": true,
                    "categoria": categoria
                });
            } else {
                res.status(404).json({
                    "status": false,
                    "mensagem": "Categoria não encontrada"
                });
            }
        })
            .catch((e) => {
                res.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao buscar categoria: " + e.message
                });
            });

    } else {
        res.status(400).json({
            "status": false,
            "mensagem": "Por gentileza, utilize o método GET para buscar uma categoria"
        });
    }
}

}