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
        if (cpf != null) {
            const sql = "SELECT * FROM cliente WHERE cpf = ?";
            const parametros = [cpf];
            const conexao = await conectar();
            const [rows] = await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);

            const lista = [];

            for (const linha of rows) {
                const cliente = new Cliente(cpf, linha['nome'], linha['endereco'], linha['numero'], linha['bairro'], linha['cidade'], linha['uf'], linha['cep']);

                lista.push(cliente);
            }
            return lista;
        }
    }

    async buscarPeloNome(nome) {
        if (nome) {
            const sql = "SELECT * FROM cliente WHERE nome like ?";
            const parametros = ['%' + nome + '%'];

            const conexao = await conectar();
            const [rows] = await conexao.execute(sql, parametros);
            let lista = [];
            for (const linha of rows) {
                const cliente = new Cliente(linha.cpf, linha.nomeCliente, linha.endereco, linha.numero, linha.bairro, linha.cidade, linha.uf, linha.cep);
                lista.push(cliente);
            }
            return lista;
        }
    }
}