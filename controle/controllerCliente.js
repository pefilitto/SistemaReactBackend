import Cliente from "../modelo/cliente.js";

export default class ControllerCliente{
    gravar(req, res){
        res.type("application/json");

        if(req.method === "POST" && req.is("application/json")){
            const dados = req.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const numero = dados.numero;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const uf = dados.uf;
            const cep = dados.cep;

            if(cpf && nome && endereco && numero && bairro && cidade && uf && cep){
                const cliente = new Cliente(cpf, nome, endereco, numero, bairro, cidade, uf, cep);
                cliente.buscarCPF(cpf).then((lista) => {
                    if(lista.length > 0){
                        res.status(400).json({
                            "status": false,
                            "mensagem": "Cliente já cadastrado"
                        })
                    }
                    else{
                        cliente.gravar().then(() => {
                            res.status(200).json({
                                "status": true,
                                "codigoGerado": cliente.codigo,
                                "mensagem": "Cliente cadastrado com sucesso!"
                            })
                        }).catch((e) => {
                            res.status(500).json({
                                "status": false,
                                "mensagem": "Erro ao cadastrar cliente: " + e.message
                            })
                        })
                    }
                }).catch((e) => {
                    res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao consultar cliente para gravar: " + e.message
                    })
                })
            }
            else{
                res.status(400).json({
                    "status": false,
                    "mensagem": "Por gentileza informe todos os campos!"
                })
            }
        }
    }

    atualizar(req, res){
        res.type("application/json");

        if(req.method === "PATCH" && req.is("application/json")){
            const cpf = req.params.cpf;

            const novosDados = req.body;
            const nome = novosDados.nome;
            const endereco = novosDados.endereco;
            const numero = novosDados.numero;
            const bairro = novosDados.bairro;
            const cidade = novosDados.cidade;
            const uf = novosDados.uf;
            const cep = novosDados.cep;

            if(nome && endereco && numero && bairro && cidade && uf && cep){
                const cliente = new Cliente(cpf, nome, endereco, numero, bairro, cidade, uf, cep);
            
                cliente.buscarCPF(cpf).then((retorno) => {
                    if(retorno.length > 0){
                        cliente.atualizar().then(() => {
                            res.status(200).json({
                                "status": true,
                                "mensagem": "Cliente atualizado com sucesso"
                            })
                        }).catch((e) => {
                            res.status(500).json({
                                "status": false,
                                "mensagem": "Erro ao atualizar cliente: " + e.message
                            })
                        })
                    }
                    else{
                        res.status(400).json({
                            "status": false,
                            "mensagem": "Cliente para atualizar não encontrado"
                        })
                    }
                }).catch((e) => {
                    res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao buscar cliente: " + e.message
                    })
                })
            }   
            else{
                res.status(400).json({
                    "status": false,
                    "mensagem": "Informe todos os campos para atualizar"
                })
            }
        }
    }

    excluir(req, res){
        res.type("application/json");
    
        if(req.method === "DELETE"){
            const cpf = req.params.cpf;
    
            const cliente = new Cliente(cpf); 
    
            cliente.buscarCPF(cpf).then((retorno) => {
                if(retorno.length > 0){
                    cliente.excluir().then(() => {
                        res.status(200).json({
                            "status": true,
                            "mensagem": "Cliente excluído com sucesso"
                        })
                    }).catch((e) => {
                        res.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao excluir cliente: " + e.message
                        })
                    })
                }
                else{
                    res.status(400).json({
                        "status": false,
                        "mensagem": "Cliente para exclusão não encontrado"
                    })
                }
            }).catch((e) => {
                res.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao buscar cliente: " + e.message
                })
            })
        }
    }
    

    buscarCPF(req, res){
        res.type("application/json");
    
        if(req.method === "GET"){
            const cpf = req.params.cpf;
    
            const cliente = new Cliente(cpf);
    
            if(cpf || !cpf){
                cliente.buscarCPF(cpf).then((retorno) => {
                    if(retorno.length){
                        res.status(200).json({
                            "status": true,
                            "cliente": retorno
                        });
                    } else {
                        res.status(404).json({
                            "status": false,
                            "mensagem": "Cliente não encontrado"
                        });
                    }
                }).catch((e) => {
                    res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao buscar cliente: " + e.message
                    });
                });
            }
        } else {
            res.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida"
            });
        }
    }
    
    
    buscarPeloNome(req, res) {
        res.type("application/json");
    
        if (req.method === "GET") {
            const { nome } = req.query; 
    
            const cliente = new Cliente(nome); 
    
            if(nome || !nome){
                cliente.buscarPeloNome(nome).then((clienteEncontrado) => {
                    if (clienteEncontrado.length > 0) {
                        res.status(200).json({
                            "status": true,
                            "cliente": clienteEncontrado
                        });
                    } else {
                        res.status(404).json({
                            "status": false,
                            "mensagem": "Cliente não encontrado"
                        });
                    }
                }).catch((e) => {
                    res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao buscar cliente: " + e.message
                    });
                });
            }
        } else {
            res.status(400).json({
                "status": false,
                "mensagem": "Por gentileza, utilize o método GET para buscar um cliente"
            });
        }
    }
    
}