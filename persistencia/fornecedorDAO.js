import Fornecedor from "../modelo/fornecedor.js";
import conectar from "./conexao.js";

export default class FornecedorDAO {
    async gravar(fornecedor) {
        if (fornecedor instanceof Fornecedor) {
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

    async atualizar(fornecedor) {
        if (fornecedor instanceof Fornecedor) {
            const sql = "UPDATE fornecedor SET nomeEmpresa = ?, endereco = ?, numero = ?, cidade = ?, cep = ? WHERE cnpj = ?"
            const parametros = [
                fornecedor.nomeEmpresa,
                fornecedor.endereco,
                fornecedor.numero,
                fornecedor.cidade,
                fornecedor.cep,
                fornecedor.cnpj
            ];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async buscar(cnpj) {
        let sql = "";
        let parametros = [];
        if (!cnpj) {
            sql = "SELECT * FROM fornecedor"
        }
        else {
            sql = "SELECT * FROM fornecedor WHERE cnpj = ?";
            parametros = [cnpj];
        }

        const conexao = await conectar();
        const [rows] = await conexao.execute(sql, parametros);

        let lista = [];
        for (const linha of rows) {
            const fornecedor = new Fornecedor(linha['cnpj'], linha['nomeEmpresa'], linha['endereco'], linha['numero'], linha['cidade'], linha['cep']);
            lista.push(fornecedor);
        }
        return lista;
    }

    async excluir(fornecedor) {
        if (fornecedor instanceof Fornecedor) {
            const sql = "DELETE FROM fornecedor WHERE cnpj = ?";
            const parametros = [fornecedor.cnpj];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }
}