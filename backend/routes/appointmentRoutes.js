import express from "express"
import { createAppointment, getAppointmentsByDate, getAllAppointments, getAppointmentById, updateAppointment, deleteAppointment} from '../controllers/appointmentController.js'
import authMiddleware from '../middleware/authMiddleware.js'

//const appointmentController = require('../controllers/appointmentController');


const router = express.Router()

router.route('/')
    .post(authMiddleware, createAppointment)
    .get(authMiddleware, getAppointmentsByDate)
    .get(getAllAppointments)

    //router.get('/appointments', appointmentController.getAllAppointments);

router.route('/:id')
    .get(authMiddleware, getAppointmentById)
    .put(authMiddleware, updateAppointment)
    .delete(authMiddleware, deleteAppointment)


export default router