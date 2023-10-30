export default class Produto{
    #codigo
    #nome;
    #preco;
    #qtdEstoque;
    #categoria;
    #descricao;

    constructor(codigo, nome, preco, qtdEstoque, categoria={}, descricao){
        this.#codigo = codigo;
        this.#nome = nome;
        this.#preco = preco;
        this.#qtdEstoque = qtdEstoque;
        this.#categoria = categoria;
        this.#descricao = descricao;
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    get preco(){
        return this.#preco;
    }

    set preco(novoPreco){
        this.#preco = novoPreco;
    }

    get qtdEstoque(){
        return this.#qtdEstoque;
    }

    set qtdEstoque(novaQtdEstoque){
        this.#qtdEstoque = novaQtdEstoque;
    }

    get categoria(){
        return this.#categoria;
    }

    set categoria(novaCategoria){
        this.#categoria = novaCategoria;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(novaDescricao){
        this.#descricao = novaDescricao;
    }

    toJSON(){
        return {
            codigo: this.#codigo,
            nome: this.#nome,
            preco: this.#preco,
            qtdEstoque: this.#qtdEstoque,
            categoria: this.#categoria.toJSON(),
            descricao: this.#descricao
        }
    }

    toString(){
        return  "codigo" + this.#codigo + '\n' +
                "nome" + this.#nome + '\n' +
                "preco" + this.#preco + '\n' +
                "qtdEstoque" + this.#qtdEstoque + '\n' +
                "categoria" + this.#categoria + '\n' +
                "descricao" + this.#descricao
    }

    async gravar(){

    }

    async excluir(){

    }

    async alterar(){

    }

    async buscar(){

    }
}