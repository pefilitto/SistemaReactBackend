import ProdutoDAO from "../persistencia/produtoDAO.js";

export default class Produto{
    #codigo
    #nome;
    #preco;
    #qtdEstoque;
    #codigoCategoria;
<<<<<<< HEAD
    #descricao;

    constructor(codigo, nome, preco, qtdEstoque, codigoCategoria, descricao){
=======
    #codigoFornecedor;
    #descricao;

    constructor(codigo, nome, preco, qtdEstoque, codigoCategoria, codigoFornecedor, descricao){
>>>>>>> feat/versao-andre
        this.#codigo = codigo;
        this.#nome = nome;
        this.#preco = preco;
        this.#qtdEstoque = qtdEstoque;
        this.#codigoCategoria = codigoCategoria;
<<<<<<< HEAD
=======
        this.#codigoFornecedor = codigoFornecedor;
>>>>>>> feat/versao-andre
        this.#descricao = descricao;
    }

    get codigoCategoria(){
        return this.#codigoCategoria;
    }

    set codigoCategoria(novoCodigoCategoria){
        this.#codigoCategoria = novoCodigoCategoria;
    }

<<<<<<< HEAD
=======
    get codigoFornecedor(){
        return this.#codigoFornecedor;
    }

    set codigoFornecedor(novoCodigoFornecedor){
        this.#codigoFornecedor = novoCodigoFornecedor;
    }

>>>>>>> feat/versao-andre
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
            codigoCategoria: this.#codigoCategoria,
<<<<<<< HEAD
=======
            codigoFornecedor: this.#codigoFornecedor,
>>>>>>> feat/versao-andre
            descricao: this.#descricao
        }
    }

    toString(){
        return  "codigo" + this.#codigo + '\n' +
                "nome" + this.#nome + '\n' +
                "preco" + this.#preco + '\n' +
                "qtdEstoque" + this.#qtdEstoque + '\n' +
                "codigoCategoria" + this.#codigoCategoria + '\n' +
<<<<<<< HEAD
=======
                "codigoFornecedor" + this.#codigoFornecedor + '\n' +
>>>>>>> feat/versao-andre
                "descricao" + this.#descricao
    }

    async gravar(){
        const produto = new ProdutoDAO();
        await produto.gravar(this);
    }

    async excluir(codigoProduto){
        const produto = new ProdutoDAO();
        await produto.excluir(this, codigoProduto);
    }

    async alterar(){
        const produto = new ProdutoDAO();
        await produto.alterar(this);
    }

    async buscar(termo){
        const produto = new ProdutoDAO();
        return await produto.buscar(termo);
    }
}