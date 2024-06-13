import  Express  from "express";
const usuariosApi = Express();

import { postUsuarios } from "../controllers/usuariosController.js";

usuariosApi.post('/:correo/:pass/:identificacion',postUsuarios)

export {usuariosApi};