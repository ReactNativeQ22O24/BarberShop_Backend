import  Express  from "express";
const usuariosApi = Express();

import { postUsuarios } from "../controllers/usuariosController.js";

usuariosApi.post('',postUsuarios)

export {usuariosApi};