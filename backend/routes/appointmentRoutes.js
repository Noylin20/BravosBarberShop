import express from "express"
import { createAppointment } from '../controllers/appointmentController.js'
import AuthMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
    .post(AuthMiddleware, createAppointment)





export default router