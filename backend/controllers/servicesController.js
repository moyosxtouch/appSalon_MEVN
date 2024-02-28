import { services } from "../data/beautyServices.js";
import Services from "../models/Services.js";
import mongoose from "mongoose";
const createService = async (req, res) => {
  if (Object.values(req.body).includes("")) {
    const error = new Error("Todos los campos son obligatorios");
    return res.status(400).json({
      msg: error.message,
    });
  }
  try {
    const service = new Services(req.body);
    await service.save();
    res.json({
      msg: "Servicio creado correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};
const getServices = (req, res) => {
  res.json(services);
};
const getServiceById = async (req, res) => {
  const { id } = req.params;
  //Validar un object id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("ID no valido");
    return res.status(400).json({
      msg: error.message,
    });
  }
  //Validar que exista
  const service = await Services.findById(id);
  if (!service) {
    const error = new Error("El servicio no existe");
    return res.status(404).json({
      msg: error.message,
    });
  }

  //Mostrar el servicio
  res.json(service);
};
export { getServices, createService, getServiceById };
