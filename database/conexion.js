const pgp = require ('pg-promise');

const USER= 'admin';
const PASS='lMVCbuEPVBaQTTnJXdZPCN2FkZfNyaf2';
const HOST='dpg-cp9vucf109ks73afcgqg-a.oregon-postgres.render.com';
const DATABASE='barbershop';

const conexionSql= `postgressql://${USER}:${PASS}@${HOST}:5432/${DATABASE}`;

const db = pgp(conexionSql);
db.conect()
    .then(()=>{

        console.log('conexiòn Exitosa!')
    })
    .catch((err)=>{
        console.log(`Error de conexiòn: ${err}`)
    });