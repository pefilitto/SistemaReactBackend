import { Router } from "express";
import ControllerProduto from "../controle/controllerProduto.js";

const rotaProduto = new Router();

const rotaCtrl = new ControllerProduto();

rotaProduto.get("/:codigo", rotaCtrl.buscar);
rotaProduto.get("/", rotaCtrl.buscar);
rotaProduto.post("/", rotaCtrl.gravar);
rotaProduto.patch("/:codigo", rotaCtrl.atualizar);
rotaProduto.delete("/:codigo", rotaCtrl.excluir);

export default rotaProduto;