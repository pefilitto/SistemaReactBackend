import express  from "express"
import cors from "cors"
import rotaCateogoria from "./rotas/rotaCategoria.js";
import rotaProduto from "./rotas/rotaProduto.js";
import rotaCliente from "./rotas/rotaCliente.js";


const app = express()

app.use(cors({origins:"*"}));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use("/categoria", rotaCateogoria);
app.use("/produto", rotaProduto);
app.use("/cliente", rotaCliente);
app.use("/fornecedor", rotaFornecedor);

app.listen(3000, "localhost",  () => {
    console.log("Servidor escutando em localhost : " + 3000);
});

app.get("/",(req,res)=>{
    res.send("Olá");
})

/*const categoria = new Categoria(3, "Pincel", "G");
categoria.gravar().then(() => {
    console.log(categoria.codigo);
});*/

/*const categoria = new Categoria(3, "", "");
categoria.excluir().then(() => {
    console.log(categoria.codigo);
});*/

/*const categoria = new Categoria(2, "LixaPFF3", "M");
categoria.alterar().then(() => {
    console.log(categoria.codigo);
});*/

/*const categoria = new Categoria("", "", "");
categoria.buscar(4).then((res) => {
    console.log(res.toString());
});*/


//---------------------------------------------------------------------------------------//


/*const produto = new Produto(1, "Pincel", 20.00, 20, 4, "Pincel sardas macias");
produto.gravar().then(() => {
    console.log("Codigo do produto: " + produto.codigo + '\n', "Codigo da categoria: " + produto.codigoCategoria);
})*/

/*const produto = new Produto(1, "", 0, 0, 2, "");
produto.excluir().then(() => {
    console.log(produto.codigo);
})*/

/*const produto = new Produto(1, "Pincel Atualizacao", 20.00, 20, 4, "Pincel descricao Atualizacao");
produto.alterar().then(() => {
    console.log(produto.codigo);
})*/

/*const produto = new Produto(1, "", 0, 0, 2, "");
produto.buscar("Pin").then(() => {
    console.log(produto.codigo);
})*/