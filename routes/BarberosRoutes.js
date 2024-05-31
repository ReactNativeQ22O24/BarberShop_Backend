import  Express  from "express";
const barberosApi = Express();

import { getbarberos } from "../controllers/BarberosControlller.js";

barberosApi.get('',getbarberos)

export {barberosApi};