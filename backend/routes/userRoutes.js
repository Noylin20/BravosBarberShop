import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import {getUserAppointments} from '../controllers/userController.js'
const router = express.Router()


//Aqui se debe hacer la ruta para ver todos los usuarios y sus citas



router.route('/:user/appointments')
.get(authMiddleware, getUserAppointments)

export default router