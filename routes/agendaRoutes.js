import  Express  from "express";
const agendaApi = Express();

import { postAgenda, putAgenda } from "../controllers/agendaController.js";

agendaApi.post('',postAgenda)

agendaApi.put('/:id', putAgenda )

export {agendaApi};