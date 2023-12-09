import ClienteDAO from "../persistencia/clienteDAO.js";

export default class Cliente{
    #codigo
    #cpf;
    #nome;
    #endereco;
    #numero;
    #bairro;
    #cidade;
    #uf;
    #cep;

    constructor(cpf, nome, endereco, numero, bairro, cidade, uf, cep){
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#cep = cep
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get cpf() {
        return this.#cpf;
    }

    get nome() {
        return this.#nome;
    }

    get endereco() {
        return this.#endereco;
    }

    get numero() {
        return this.#numero;
    }

    get bairro() {
        return this.#bairro;
    }

    get cidade() {
        return this.#cidade;
    }

    get uf() {
        return this.#uf;
    }

    get cep() {
        return this.#cep;
    }

    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    set numero(novoNumero) {
        this.#numero = novoNumero;
    }

    set bairro(novoBairro) {
        this.#bairro = novoBairro;
    }

    set cidade(novoCidade) {
        this.#cidade = novoCidade;
    }

    set uf(novoUf) {
        this.#uf = novoUf;
    }

    set cep(novoCep) {
        this.#cep = novoCep;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            cpf: this.#cpf,
            nome: this.#nome,
            endereco: this.#endereco,
            numero: this.#numero,
            bairro: this.#bairro,
            cidade: this.#cidade,
            uf: this.#uf,
            cep: this.#cep
        };
    }

    toString() {
        return `Cliente: 
            CODIGO: ${this.#codigo},
            CPF: ${this.#cpf}, 
            Nome: ${this.#nome}, 
            Endereço: ${this.#endereco}, 
            Número: ${this.#numero}, 
            Bairro: ${this.#bairro}, 
            Cidade: ${this.#cidade}, 
            UF: ${this.#uf}, 
            CEP: ${this.#cep}`;
    }

    async gravar(){
        const cliente = new ClienteDAO();
        await cliente.gravar(this);
    }

    async excluir(){
        const cliente = new ClienteDAO();
        await cliente.excluir(this);
    }

    async atualizar(){
        const cliente = new ClienteDAO();
        await cliente.atualizar(this);
    }

    async buscarCPF(cpf){
        const cliente = new ClienteDAO();
        return await cliente.buscarCPF(cpf);
    }
    
    async buscarPeloNome(nome){
        const cliente = new ClienteDAO();
        return await cliente.buscarPeloNome(nome);
    }
}