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
                /*cliente.buscar(cpf).then((lista) => {
                    if(lista.length > 0){
                        res.status(400).json({
                            "status": false,
                            "mensagem": "Cliente já cadastrado"
                        })
                    }
                    else*///{
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
                    //}
                //})
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

    }

    excluir(req, res){

    }

    buscarCPF(req, res){

    }
    
    buscar(req, res){

    }
}