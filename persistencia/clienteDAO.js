import Cliente from "../modelo/cliente.js";
import conectar from "./conexao.js";

export default class ClienteDAO {
    async gravar(cliente) {
        if (cliente instanceof Cliente) {
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
            const retorno = await conexao.execute(sql, parametros);
            cliente.codigo = retorno[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(cliente) {
        if (cliente instanceof Cliente) {
            const sql = "DELETE FROM cliente WHERE cpf = ?";
            const parametros = [cliente.cpf];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(cliente) {
        if (cliente instanceof Cliente) {
            const sql = "UPDATE cliente SET nome = ?, endereco = ?, numero = ?, bairro = ?, cidade = ?, uf = ?, cep = ? WHERE cpf = ?";
            const parametros = [
                cliente.nome,
                cliente.endereco,
                cliente.numero,
                cliente.bairro,
                cliente.cidade,
                cliente.uf,
                cliente.cep,
                cliente.cpf
            ];

            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async buscarCPF(cpf) {
        let sql = "";
        let parametros = [];
        if (cpf == null) {
            sql = "SELECT * FROM cliente"
        }
        else {
            sql = "SELECT * FROM cliente WHERE cpf = ?";
            parametros = [cpf];
        }


        const conexao = await conectar();
        const [rows] = await conexao.execute(sql, parametros);
        const lista = [];

        for (const linha of rows) {
            const cliente = new Cliente(linha['cpf'], linha['nome'], linha['endereco'], linha['numero'], linha['bairro'], linha['cidade'], linha['uf'], linha['cep']);

            lista.push(cliente);
        }
        global.poolConexoes.releaseConnection(conexao);
        return lista;
    }

    async buscarPeloNome(nome) {
        let sql = "";
        let parametros = [];

        if (!nome) {
            sql = "SELECT * FROM cliente"
        }
        else {
            sql = "SELECT * FROM cliente WHERE nome like ?";
            parametros = ['%' + nome + '%'];
        }
        const conexao = await conectar();
        const [rows] = await conexao.execute(sql, parametros);
        let lista = [];
        for (const linha of rows) {
            const cliente = new Cliente(linha.cpf, linha.nome, linha.endereco, linha.numero, linha.bairro, linha.cidade, linha.uf, linha.cep);
            lista.push(cliente);
        }
        global.poolConexoes.releaseConnection(conexao);
        return lista;
    }
}