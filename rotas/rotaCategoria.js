import { Router } from "express";
import ControllerCategoria from "../controle/controllerCategoria.js";

const rotaCategoria = new Router();

const rotaCtrl = new ControllerCategoria();

rotaCategoria.get("/:codigoCategoria", rotaCtrl.buscar);
rotaCategoria.get("/", rotaCtrl.buscar);
rotaCategoria.post("/", rotaCtrl.gravar);
rotaCategoria.patch("/:codigoCategoria", rotaCtrl.atualizar);
rotaCategoria.delete("/:codigoCategoria", rotaCtrl.excluir);

export default rotaCategoria;