import express from "express";

import {
  getServices,
  createService,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/servicesController.js";
const router = express.Router();

router.route("/").post(createService).get(getServices);
router
  .route("/:id")
  .get(getServiceById)
  .put(updateService)
  .delete(deleteService);
// router.get("/", getServices);
// router.get("/:id", getServiceById);
// router.post("/", createService);
// router.put("/:id", updateService);
// router.delete("/:id", deleteService);
export default router;
