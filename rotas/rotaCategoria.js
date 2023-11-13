import { Router } from "express";
import ControllerCategoria from "../controle/controllerCategoria.js";

const rotaCateogoria = new Router();

const rotaCtrl = new ControllerCategoria();

rotaCateogoria.get("/", rotaCtrl.buscar);
rotaCateogoria.post("/", rotaCtrl.gravar);
rotaCateogoria.patch("/:codigoCategoria", rotaCtrl.atualizar);
rotaCateogoria.delete("/:codigoCategoria", rotaCtrl.excluir);

export default rotaCateogoria;