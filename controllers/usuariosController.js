import { db } from "../database/conexion.js";

const postUsuarios= async (req, res)=> {
    try {
        const { correo, pass,identificacion } = req.params;
        const params = [correo, pass, identificacion];

    const sql = `INSERT INTO USUARIOS (correo, pass, identificacion, rol_asignado)
                   VALUES($1, $2, $3, 2) returning *`;
    
    
        const result = await db.query(sql, params);
        res.json({
            result,
            msg: `usuario Añadido Correctamente`
        }); 
 
    }catch (error){
        res.status(500).json(error);
        console.log(error);
    }
}
                
export { postUsuarios };
