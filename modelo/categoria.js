export default class Categoria{
    #codigo;
    #categoria;
    #tamanho;

    constructor(codigo, categoria, tamanho){
        this.#codigo = codigo;
        this.#categoria = categoria;
        this.#tamanho = tamanho;    
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get categoria(){
        return this.#categoria;
    }

    set categoria(novaCategoria){
        this.#categoria = novaCategoria;
    }

    get tamanho(){
        return this.#tamanho;
    }

    set tamanho(novoTamanho){
        this.#tamanho = novoTamanho;
    }

    toJSON(){
        return{
            categoria: this.#categoria,
            tamanho: this.#tamanho
        }
    }

    toString(){
        return "categoria" + this.#categoria + '\n' + 
                "tamanho " + this.#tamanho;
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