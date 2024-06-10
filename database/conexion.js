import pg from "pg-promise";
const pgp = pg();

import dotenv from "dotenv";
dotenv.config();

const user = process.env._USER;
const pass = process.env.PASS;
const host = process.env.HOST;
const database = process.env.DATABASE;

const conexionSql = `postgressql://${user}:${pass}@${host}:5432/${database}?ssl=true`;

const db = pgp(conexionSql);

db.connect()
  .then(() => {
    console.log("conexiòn Exitosa!");
  })
  .catch((err) => {
    console.log(`Error de conexiòn: ${err}`);
  });

export { db };
