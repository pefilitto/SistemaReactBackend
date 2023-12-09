import CategoriaDAO from "../persistencia/categoriaDAO.js";

export default class Categoria{
    #codigo;
    #tipoProduto;
    #tamanho;

    constructor(codigo, tipoProduto, tamanho){
        this.#codigo = codigo;
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
            codigo: this.#codigo,
            tipoProduto: this.#tipoProduto,
            tamanho: this.#tamanho
        }
    }

    toString(){
        return "codigo" + this.#codigo + '\n' + "tipoProduto" + this.#tipoProduto + '\n' + 
                "tamanho " + this.#tamanho;
    }

    async gravar(){
        const categoria = new CategoriaDAO();
        await categoria.gravar(this)
    }

    async excluir(codigoCategoria){
        const categoria = new CategoriaDAO();
        await categoria.excluir(this, codigoCategoria);
    }

    async alterar(){
        const categoria = new CategoriaDAO();
        await categoria.alterar(this);
    }

    async buscar(termo, tamanho){
        const categoria = new CategoriaDAO();
        return await categoria.buscar(termo, tamanho);
    }
}