import FornecedorDAO from "../persistencia/fornecedorDAO.js";

export default class Fornecedor{
    #codigoFornecedor;
    #cnpj;
    #nomeEmpresa;
    #endereco;
    #numero;
    #cidade;
    #cep;

<<<<<<< HEAD
    constructor(cnpj, nomeEmpresa, endereco, numero, cidade, cep){
=======
    constructor(codigoFornecedor, cnpj, nomeEmpresa, endereco, numero, cidade, cep){
        this.#codigoFornecedor = codigoFornecedor;
>>>>>>> feat/versao-andre
        this.#cnpj = cnpj;
        this.#nomeEmpresa = nomeEmpresa;
        this.#endereco = endereco;
        this.#numero = numero;
        this.#cidade = cidade;
        this.#cep = cep;
    };

    get codigoFornecedor() {
        return this.#codigoFornecedor;
    }

    get cnpj() {
        return this.#cnpj;
    }

    get nomeEmpresa() {
        return this.#nomeEmpresa;
    }

    get endereco() {
        return this.#endereco;
    }

    get numero() {
        return this.#numero;
    }

    get cidade() {
        return this.#cidade;
    }

    get cep() {
        return this.#cep;
    }

    set codigoFornecedor(novoCodigo) {
        this.#codigoFornecedor = novoCodigo;
    }

    set cnpj(novoCnpj) {
        this.#cnpj = novoCnpj;
    }

    set nomeEmpresa(novoNome) {
        this.#nomeEmpresa = novoNome;
    }

    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    set numero(novoNumero) {
        this.#numero = novoNumero;
    }

    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    }

    set cep(novoCep) {
        this.#cep = novoCep;
    }

    toString() {
        return `Fornecedor:
            Código: ${this.#codigoFornecedor}
            CNPJ: ${this.#cnpj}
            Nome da Empresa: ${this.#nomeEmpresa}
            Endereço: ${this.#endereco}
            Número: ${this.#numero}
            Cidade: ${this.#cidade}
            CEP: ${this.#cep}`;
    }

    toJSON() {
        return {
            codigoFornecedor: this.#codigoFornecedor,
            cnpj: this.#cnpj,
            nomeEmpresa: this.#nomeEmpresa,
            endereco: this.#endereco,
            numero: this.#numero,
            cidade: this.#cidade,
            cep: this.#cep
        };
    }

    async gravar(){
        const fornecedor = new FornecedorDAO();
        await fornecedor.gravar(this);
    }

    async atualizar(){
        const fornecedor = new FornecedorDAO();
        await fornecedor.atualizar(this);
    }

    async buscar(cnpj){
        const fornecedor = new FornecedorDAO();
        return await fornecedor.buscar(cnpj);
    }

    async excluir(){
        const fornecedor = new FornecedorDAO();
        await fornecedor.excluir(this);
    }
}