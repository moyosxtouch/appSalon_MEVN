import express from "express";
import { db } from "./config/db.js";
import colors from "colors";
import servicesRoutes from "./routes/servicesRoutes.js";
import dotenv from "dotenv";
//variables de entorno
dotenv.config();
//configurar la app
const app = express();
//Leer datos via body
app.use(express.json());
//conectar a la db
db();
//Definir una ruta
app.use("/api/services", servicesRoutes);
//Definir el puerto
const PORT = process.env.PORT || 4000;
//Arrancar la App
app.listen(PORT, () => {
  console.log(
    colors.blue("El servidor se esta ejecutando en el puerto:", PORT)
  );
});
