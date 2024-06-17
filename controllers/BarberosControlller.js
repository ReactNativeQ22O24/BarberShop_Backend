import {db} from '../database/conexion.js';

const getbarberos= async(_, res)=>{
    const querySQL =`SELECT * FROM barberos`;

    const result= await db.query(querySQL);
    
    if(result.length>0){
        res.json(result);
    }else{
        res.status(404).json(result);
    }
}


export {getbarberos};