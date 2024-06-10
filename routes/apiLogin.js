import express from "express";
import { getLogin } from "../controllers/LoginController.js";

const Login = express.Router();
Login.get("/:Usuario/:Contrasena", getLogin);
export { Login };
