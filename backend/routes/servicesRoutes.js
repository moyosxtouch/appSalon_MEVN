import express from "express";

import {
  getServices,
  createService,
  getServiceById,
} from "../controllers/servicesController.js";
const router = express.Router();
router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", createService);
export default router;
