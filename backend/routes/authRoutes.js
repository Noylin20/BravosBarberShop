import express from 'express'
import {register, verifyAccount, login} from '../controllers/authController.js'
const router = express.Router()

//Rutas de auntenticación y registro de usuarios
 router.post('/register', register)
 router.get('/verify/:token', verifyAccount)
 router.get('/login', login)

export default router