import {db} from '../database/conexion.js';

const getbarberos= async(_, res)=>{
    const querySQL =`SELECT * FROM ROLE`;

    const result= await db.query(querySQL);
    
    if(result.length>0){
        res.json(result);
    }else{
        res.status(404).json(result);
    }
}

const postBarberos = async(req, res)=>{
    
}

export {getbarberos};