import  Express  from "express";
const agendaApi = Express();

import { postAgenda, putAgenda, getAgenda } from "../controllers/agendaController.js";

agendaApi.post('',postAgenda);

agendaApi.put('/:id', putAgenda);

agendaApi.get('', getAgenda)

export {agendaApi};