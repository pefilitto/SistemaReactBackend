import { Router } from "express";
import ControllerFornecedor from "../controle/controllerFornecedor.js";

const rotaFornecedor = new Router();

const fornecedorCtrl = new ControllerFornecedor();

rotaFornecedor.post("/", fornecedorCtrl.gravar);
rotaFornecedor.delete("/:cnpj", fornecedorCtrl.excluir);
rotaFornecedor.patch("/:cnpj", fornecedorCtrl.atualizar);
rotaFornecedor.get("/:cnpj", fornecedorCtrl.buscarCPF);
rotaFornecedor.get("/", fornecedorCtrl.buscarPeloNome)

export default rotaFornecedor;