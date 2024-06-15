import  Express  from "express";
const agendaApi = Express();

import { postAgenda } from "../controllers/agendaController.js";

agendaApi.post('',postAgenda)

export {agendaApi};