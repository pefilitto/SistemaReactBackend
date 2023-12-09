import Categoria from "../modelo/categoria.js"
import conectar from "./conexao.js";

export default class CategoriaDAO{
    async gravar(categoria){
        if(categoria instanceof Categoria){
            const sql = "INSERT INTO categoria (categoria, tamanho) VALUES (?, ?)" 
            const parametros = [categoria.tipoProduto, categoria.tamanho];
            const conexao = await conectar();
            const retorno = await conexao.execute(sql, parametros);
            categoria.codigo = retorno[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async alterar(categoria){
        if(categoria instanceof Categoria){
            const sql = "UPDATE categoria SET categoria = ?, tamanho = ? WHERE codigoCategoria = ?"
            const parametros = [categoria.tipoProduto, categoria.tamanho, categoria.codigo];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(categoria, codigoCategoria){
        if(categoria instanceof Categoria){
            const sql = "DELETE FROM categoria WHERE codigoCategoria = ?"
            const parametros = [codigoCategoria];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async buscar(parametroConsulta, tamanho){
        let sql = '';
        let parametros = [];

        //É um numero inteiro?
        if(!isNaN(parseInt(parametroConsulta))){
            //Entao consulta pelo codigo da categoria
            tamanho = -1;
            sql = "SELECT * FROM categoria WHERE codigoCategoria = ?";
            parametros = [parametroConsulta];
        }
        else{
            //Se nao consulta pela descricao
            if(parametroConsulta){
                sql = "SELECT * FROM categoria WHERE categoria like ? AND tamanho = ?"
                parametros = ['%' + parametroConsulta + '%', tamanho];
            }
        }
        
        if(parametroConsulta === '' && tamanho == 0){
            sql = "SELECT * FROM categoria"
        }
        
        const conexao = await conectar();
        const [linhas] = await conexao.execute(sql, parametros);
        let listaCategoria = [];
        for(const lines of linhas){
            const categoria = new Categoria(lines.codigoCategoria, lines.categoria, lines.tamanho);
            listaCategoria.push(categoria);
        }
        return listaCategoria;
    }
}