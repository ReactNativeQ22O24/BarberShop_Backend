import {db} from '../database/conexion.js';

const postAgenda= async (req, res)=> {
   
    const params =[
        req.body.fecha,
        req.body.tiempo,
        req.body.id_Barbero
    ];
    
    try {
        const sql = `INSERT INTO agenda (fecha, tiempo, id_Barbero)
        VALUES($1, $2, $3) returning *`;
    
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

const putAgenda= async(req, res)=> {
   
    const params =[
        req.body.fecha,
        req.body.tiempo,
        req.body.id_Barbero,
        req.params.id
    ];

    const existeMaestro=`SELECT * FROM agenda WHERE id=$4`;
    const result = await db.query(existeMaestro, params);

    try {
        const sql = `UPDATE agenda SET fecha= $1, tiempo= $2, id_Barbero=$3 WHERE id=$4 returning *`;

        const result = await db.query(sql, params);
        res.json({
            result,
            msg: `usuario ACTUALIZADO Correctamente`
    }); 

    }catch (error){
        res.status(500).json(error);
        console.log(error);
    }
}


                
export { postAgenda, putAgenda };
