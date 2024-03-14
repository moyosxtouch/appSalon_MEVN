import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  register,
  verifyAccount,
  login,
  user,
} from "../controllers/authController.js";
const router = express.Router();
//Rutas de autentificacion y registro de usuarios
router.post("/register", register);
router.get("/verify/:token", verifyAccount);
router.post("/login", login);
//Area privada- Requiere un JWT
router.get("/user", authMiddleware, user);

export default router;
