import Appointment from "../models/Appointment.js";
import { parse, formatISO, startOfDay, endOfDay, isValid } from "date-fns";
import { handleNotFoundError, validateObjectId } from "../utils/index.js";
const createAppointment = async (req, res) => {
  const appointment = req.body;
  appointment.user = req.user._id.toString();

  try {
    const newAppointment = new Appointment(appointment);
    await newAppointment.save();
    res.json({
      msg: "Tu Reservación se realizó Correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};
const getAppointmentsByDate = async (req, res) => {
  const { date } = req.query;

  const newDate = parse(date, "dd/MM/yyyy", new Date());
  if (!isValid(newDate)) {
    const error = new Error("Fecha no valida");
    return res.status(400).json({ msg: error.message });
  }
  const isoDate = formatISO(newDate);
  const appointments = await Appointment.find({
    date: {
      $gte: startOfDay(new Date(isoDate)),
      $lte: endOfDay(new Date(isoDate)),
    },
  }).select("time");
  res.json(appointments);
};
const getAppointmentById = async (req, res) => {
  const { id } = req.params;
  //validar por object id
  if (validateObjectId(id, res)) return;
  //validar que exista
  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return handleNotFoundError("La Cita no existe", res);
  }
  //Retornar la cita
  res.json(appointment);
};
export { createAppointment, getAppointmentsByDate, getAppointmentById };
