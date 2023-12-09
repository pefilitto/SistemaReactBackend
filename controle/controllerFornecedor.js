import Fornecedor from './../modelo/fornecedor.js';
export default class ControllerFornecedor{
    gravar(req, res){
        res.type("application/json");

        if(req.method === "POST" && req.is("application/json")){
            const dados = req.body;

            const cnpj = dados.cnpj;
            const nomeEmpresa = dados.nomeEmpresa;
            const endereco = dados.endereco;
            const numero = dados.numero;
            const cidade = dados.cidade;
            const cep = dados.cep;

            if(cnpj && nomeEmpresa && endereco && numero && cidade && cep){
                const fornecedor = new Fornecedor(0, cnpj, nomeEmpresa, endereco, numero, cidade, cep);

                fornecedor.buscar(cnpj).then((listaFornecedor) => {
                    if(listaFornecedor.length > 0){
                        res.status(400).json({
                            "status": false,
                            "mensagem": "Fornecedor já cadastrado!"
                        })
                    }
                    else{
                        fornecedor.gravar().then(() => {
                            res.status(200).json({
                                "status": true,
                                "codigoFornecedor": fornecedor.codigoFornecedor,
                                "mensagem": "Fornecedor cadastrado com sucesso"
                            })
                        }).catch((e) => {
                            res.status(500).json({
                                "status": false,
                                "mensagem": "Erro ao cadastrar fornecedor: " + e.message
                            })
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
    }

    atualizar(req, res){
        res.type("application/json");

        if(req.method === "PATCH" && req.is("application/json")){
            const cnpj = req.params.cnpj;
            const dados = req.body;

            const nomeEmpresa = dados.nomeEmpresa;
            const endereco = dados.endereco;
            const numero = dados.numero;
            const cidade = dados.cidade;
            const cep = dados.cep;

            if(nomeEmpresa, endereco, numero, cidade, cep){
                const fornecedor = new Fornecedor(0, cnpj, nomeEmpresa, endereco, numero, cidade, cep);
                fornecedor.buscar(cnpj).then((listaFornecedor) => {
                    if(listaFornecedor.length > 0){
                        fornecedor.atualizar().then(() => {
                            res.status(200).json({
                                "status": true,
                                "mensagem": "Fornecedor atualizado com sucesso!"
                            })
                        }).catch((e) => {
                            res.status(400).json({
                                "status": false,
                                "mensagem": "Erro ao atualizar fornecedor: " + e.message
                            })
                        })
                    }
                    else{
                        res.status(400).json({
                            "status": false,
                            "mensagem": "Fornecedor para atualizar nao encontrado!"
                        })
                    }
                }).catch((e) => {
                    res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao buscar fornecedor para atualizar: " + e.message
                    })
                })
                
            }
        }
    }

    excluir(req, res){
        res.type("application/json");

        if(req.method === "DELETE"){
            const cnpj = req.params.cnpj

            if(cnpj){
                const fornecedor = new Fornecedor(0, cnpj, "", "", 0, "", 0);

                fornecedor.buscar(cnpj).then((listaFornecedor) => {
                    if(listaFornecedor.length > 0){
                        fornecedor.excluir().then(() => {
                            res.status(200).json({
                                "status": true,
                                "mensagem": "Fornecedor excluido com sucesso!"
                            })
                        }).catch((e) => {
                            res.status(400).json({
                                "status": false,
                                "mensagem": "Erro ao excluir fornecedor: " + e.message
                            })
                        })
                    }
                    else{
                        res.status(400).json({
                            "status": false,
                            "mensagem": "Fornecedor para excluir não encontrado!"
                        })
                    }
                })
            }
            else{
                res.status(400).json({
                    "status": false,
                    "mensagem": "Por gentileza, informe um CNPJ para excluir!"
                })
            }
        }
    }

    buscarCNPJ(req, res){
        res.type("application/json");
    
        if(req.method === "GET"){
            const cnpj = req.params.cnpj;
    
            if(cnpj || !cnpj){
                const fornecedor = new Fornecedor(cnpj);
    
                fornecedor.buscar(cnpj).then((listaFornecedor) => {
                    if(listaFornecedor.length > 0){
                        res.status(200).json({
                            "status": true,
                            "fornecedores": listaFornecedor
                        });
                    } else {
                        res.status(404).json({
                            "status": false,
                            "mensagem": "Fornecedor com o CNPJ informado não encontrado!",
                        });
                    }
                }).catch((e) => {
                    res.status(400).json({
                        "status": false,
                        "mensagem": "Erro ao buscar fornecedor por CNPJ: " + e.message
                    });
                });
            } else {
                res.status(400).json({
                    "status": false,
                    "mensagem": "Por gentileza, informe um CNPJ para buscar o fornecedor!"
                });
            }
        }
    }
}