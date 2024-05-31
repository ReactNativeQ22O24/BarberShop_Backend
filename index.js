//LIBRERIAS TERCERROS
import  Express  from 'express';
import responseTime from 'response-time';
const app= Express();

//LIBRERIAS PROPIAS
import { barberosApi } from './routes/BarberosRoutes.js';


app.use(responseTime());

app.use('/api/barberos', barberosApi);

app.listen(3000);   

console.log('escuchando en el puerto 3000')
