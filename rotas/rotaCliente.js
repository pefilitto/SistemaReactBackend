import { Router } from "express";
import ControllerCliente from "../controle/controllerCliente.js";

const rotaCliente = new Router();

const clienteCtrl = new ControllerCliente();

rotaCliente.post("/", clienteCtrl.gravar);
rotaCliente.delete("/:cpf", clienteCtrl.excluir);
rotaCliente.patch("/:cpf", clienteCtrl.atualizar);
rotaCliente.get("/:cpf", clienteCtrl.buscarCPF);
rotaCliente.get("/", clienteCtrl.buscar)

export default rotaCliente;