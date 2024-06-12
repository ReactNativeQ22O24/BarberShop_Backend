import { db } from "../database/conexion.js";

const postUsuarios= async (req, res)=> {
    
    const { correo, pass, identificacion } = req.body;
    const params = [correo, pass, identificacion];
  

    const sql = `INSERT INTO USUARIOS (correo, pass, identificacion, rol_asignado)
                   VALUES($1, $2, $3, 2) returning *`;
    
    try {
        const result = await db.query(sql, params);
        res.json({
            result,
            msg: `usuario Añadido Correctamente`
        }); 
 
    }catch (error){
        res.status(500).json(error);
    }
}
                
export { postUsuarios };
