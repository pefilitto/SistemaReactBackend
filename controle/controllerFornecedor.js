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
                const fornecedor = new Fornecedor(cnpj, nomeEmpresa, endereco, numero, cidade, cep);

                fornecedor.gravar().then(() => {
                    res.status(200).json({
                        "status": true,
                        "mensagem": "Fornecedor cadastrado com sucesso"
                    })
                }).catch((e) => {
                    res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao cadastrar fornecedor: " + e.message
                    })
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
}