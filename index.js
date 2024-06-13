//LIBRERIAS TERCERROS
import Express from "express";
import responseTime from "response-time";
const app = Express();

//LIBRERIAS PROPIAS
import { Login } from "./routes/apiLogin.js";
import { barberosApi } from "./routes/BarberosRoutes.js";
import { usuariosApi } from "./routes/UsuarioRoutes.js";

app.use(responseTime());
app.use(Express.json());

app.use("/api/login", Login);
app.use("/api/barberos", barberosApi);
app.use("/api/registro", usuariosApi);

app.listen(3000);