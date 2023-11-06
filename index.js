import Produto from "./modelo/produto.js";
import Categoria from "./modelo/categoria.js";

const categoria = new Categoria("Pinceis", "G");
categoria.gravar().then(() => {
    console.log("Sucesso")
});

/*const produto = new Produto(1, "Pincel", 15.00, 20, "Pinceis", categoria);
console.log(produto.toJSON());*/