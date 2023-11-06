import CategoriaDAO from "../persistencia/categoriaDAO.js";

export default class Categoria{
    #codigo;
    #tipoProduto;
    #tamanho;

    constructor(tipoProduto, tamanho){
        this.#tipoProduto = tipoProduto;
        this.#tamanho = tamanho;    
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get tipoProduto(){
        return this.#tipoProduto;
    }

    set tipoProduto(novatipoProduto){
        this.#tipoProduto = novatipoProduto;
    }

    get tamanho(){
        return this.#tamanho;
    }

    set tamanho(novoTamanho){
        this.#tamanho = novoTamanho;
    }

    toJSON(){
        return{
            tipoProduto: this.#tipoProduto,
            tamanho: this.#tamanho
        }
    }

    toString(){
        return "tipoProduto" + this.#tipoProduto + '\n' + 
                "tamanho " + this.#tamanho;
    }

    async gravar(){
        const categoria = new CategoriaDAO();
        await categoria.gravar(this)
    }

    async excluir(){

    }

    async alterar(){

    }

    async buscar(){

    }
}