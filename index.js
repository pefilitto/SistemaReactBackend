import express  from "express"
import cors from "cors"
import rotaCategoria from "./rotas/rotaCategoria.js";
import rotaProduto from "./rotas/rotaProduto.js";
import rotaCliente from "./rotas/rotaCliente.js";
import rotaFornecedor from "./rotas/rotaFornecedor.js";

const app = express()

app.use(cors({origins:"*"}));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use("/categoria", rotaCategoria);
app.use("/produto", rotaProduto);
app.use("/cliente", rotaCliente);
app.use("/fornecedor", rotaFornecedor);

app.listen(3000, "localhost",  () => {
    console.log("Servidor escutando em localhost : " + 3000);
});