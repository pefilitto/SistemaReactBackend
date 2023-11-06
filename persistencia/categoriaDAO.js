import Categoria from "../modelo/categoria.js"
import conectar from "./conexao.js";

export default class CategoriaDAO{
    async gravar(categoria){
        if(categoria instanceof Categoria){
            const sql = "INSERT INTO categoria (categoria, tamanho) VALUES (?, ?)" 
            const parametros = [categoria.tipoProduto, categoria.tamanho];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
        }
    }

    async alterar(){

    }

    async excluir(){

    }

    async buscar(parametroConsulta){
        if(!isNaN(parametroConsulta)){
            const sql = "SELECT * FROM categoria like categoria = ?";
            const parametros = [parametroConsulta];
        }
        else{
            const sql = "SELECT * FROM categoria order_by codigoCategoria"
        }
        const conexao = await conectar();
        const [linhas, colunas] = conexao.execute(sql, parametros);
    }
}