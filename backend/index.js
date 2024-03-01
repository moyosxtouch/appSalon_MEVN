import express from "express";
import { db } from "./config/db.js";
import colors from "colors";
import cors from "cors";
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
//configurar cors
const whiteList = [process.env.FRONTEND_URL];
if (process.argv[2] === "--postman") {
  whiteList.push(undefined);
}
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      //Permite la conexion
      callback(null, true);
    } else {
      //No permitir la conexion
      callback(new Error("Error de CORS"));
    }
  },
};
app.use(cors(corsOptions));
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
