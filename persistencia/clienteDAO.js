import Cliente from "../modelo/cliente.js";
import conectar from "./conexao.js";

export default class ClienteDAO{
    async gravar(cliente){
        if(cliente instanceof Cliente){
            const sql = "INSERT INTO cliente (cpf, nome, endereco, numero, bairro, cidade, uf, cep) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            const parametros = [
                cliente.cpf,
                cliente.nome,
                cliente.endereco,
                cliente.numero,
                cliente.bairro,
                cliente.cidade,
                cliente.uf,
                cliente.cep
            ];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

}