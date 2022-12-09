// importe le package dotenv pour accèder au .env
import 'dotenv/config';
// importe mysql pour se connecter à la base
// import mysql, { Pool } from 'mysql2';
import { Pool } from 'pg';

// importe la variable d'environnement
// let databaseUrl: string = process.env.CLEARDB_DATABASE_URL || '';
// retire le type de base de données
// databaseUrl = databaseUrl.substring(8);
// who doesn't love some good old effective Regex ?
// const [user, password, host, database] =
//   databaseUrl.split(/[:@/?)<>{}\r\n/\\]+/);

// créer l'objet pool
// const pool: Pool = mysql.createPool({
//   host: host,
//   user: user,
//   password: password,
//   database: database,
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: true,
});

// exporte l'objet pool pour l'utiliser ailleurs
export default pool;
