import express from 'express'
import {register, verifyAccount, login, user} from '../controllers/authController.js'
const router = express.Router()
import authMiddleware from '../middleware/authMiddleware.js'

//Rutas de auntenticación y registro de usuarios
 router.post('/register', register)
 router.get('/verify/:token', verifyAccount)
 router.post('/login', login)


 //Area privada - requiere un JWT

 router.get('/user', authMiddleware, user)

export default router