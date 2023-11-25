import Fornecedor from "../modelo/fornecedor.js";
import conectar from "./conexao.js";

export default class FornecedorDAO{
    async gravar(fornecedor){
        if(fornecedor instanceof Fornecedor){
            const sql = "INSERT INTO fornecedor (cnpj, nomeEmpresa, endereco, numero, cidade, cep) VALUES (?, ?, ?, ?, ?, ?)";
            const parametros = [
                fornecedor.cnpj,
                fornecedor.nomeEmpresa,
                fornecedor.endereco,
                fornecedor.numero,
                fornecedor.cidade,
                fornecedor.cep
            ];
            const conexao = await conectar();
            const retorno = await conexao.execute(sql, parametros);
            fornecedor.codigoFornecedor = retorno[0].insertId
            global.poolConexoes.releaseConnection(conexao);
        }
    }
}