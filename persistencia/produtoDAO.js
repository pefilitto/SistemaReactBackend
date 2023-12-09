import Produto from "../modelo/produto.js";
import conectar from "./conexao.js";

export default class ProdutoDAO{
    async gravar(produto){
        if(produto instanceof Produto){
<<<<<<< HEAD
            const sql = "INSERT INTO produto (codigoProduto, nome, preco, qtdEstoque, codigoCategoria, descricao) VALUES (?, ?, ?, ?, ?, ?)"
=======
            const sql = "INSERT INTO produto (codigoProduto, nome, preco, qtdEstoque, codigoCategoria, codigoFornecedor, descricao) VALUES (?, ?, ?, ?, ?, ?, ?)"
>>>>>>> feat/versao-andre
            const parametros = [
                produto.codigo, 
                produto.nome, 
                produto.preco, 
                produto.qtdEstoque, 
                produto.codigoCategoria,
<<<<<<< HEAD
=======
                produto.codigoFornecedor,
>>>>>>> feat/versao-andre
                produto.descricao
            ];
            const conexao = await conectar();
            const retorno = await conexao.execute(sql, parametros);
            produto.codigo = retorno[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(produto, codigoProduto){
        if(produto instanceof Produto){
            const sql = "DELETE FROM produto WHERE codigoProduto = ?";
            const parametros = [codigoProduto];
            const conexao = await conectar();
            await conexao.execute(sql, parametros)
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async alterar(produto){
        if(produto instanceof Produto){
<<<<<<< HEAD
            const sql = "UPDATE produto SET nome = ?, preco = ?, qtdEstoque = ?, codigoCategoria = ?, descricao = ? WHERE codigoProduto = ?";
=======
            const sql = "UPDATE produto SET nome = ?, preco = ?, qtdEstoque = ?, codigoCategoria = ?, codigoFornecedor = ?, descricao = ? WHERE codigoProduto = ?";
>>>>>>> feat/versao-andre
            const parametros = [
                produto.nome,
                produto.preco,
                produto.qtdEstoque,
                produto.codigoCategoria,
<<<<<<< HEAD
=======
                produto.codigoFornecedor,
>>>>>>> feat/versao-andre
                produto.descricao,
                produto.codigo
            ];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async buscar(termo){
        let sql = '';
        let parametros = [];
        if(!isNaN(parseInt(termo))){
            sql = "SELECT * FROM produto WHERE codigoProduto = ?";
            parametros = [termo];
        }
        else{
            sql = "SELECT * FROM produto WHERE nome = ?";
            parametros = [termo];
        }

        if(!termo){
            sql = "SELECT * FROM produto"
        }

        const conexao = await conectar();
        const [linhas] = await conexao.execute(sql, parametros);
        let listaProdutos = [];
        for(const lines of linhas){
<<<<<<< HEAD
            const produto = new Produto(lines.codigoProduto, lines.nome, lines.preco, lines.qtdEstoque, lines.codigoCategoria, lines.descricao);
=======
            const produto = new Produto(lines.codigoProduto, lines.nome, lines.preco, lines.qtdEstoque, lines.codigoCategoria, lines.codigoFornecedor,lines.descricao);
>>>>>>> feat/versao-andre
            listaProdutos.push(produto);
        };
        global.poolConexoes.releaseConnection(conexao);
        return listaProdutos;
    }
}