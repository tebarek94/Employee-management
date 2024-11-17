import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const databaseConnection = mysql.createConnection({
  host: process.env.DATABASEHOST,
  database: process.env.DTATBASENAME,
  user: process.env.DATABASUSER,
  password: process.env.DATABASEPASSWORD,
});
export default databaseConnection;
