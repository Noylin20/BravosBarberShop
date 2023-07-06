import express from 'express'
import {register, verifyAccount, login, user, forgotPassword, verifyPasswordResetToken, updatePassword, admin} from '../controllers/authController.js'
const router = express.Router()
import authMiddleware from '../middleware/authMiddleware.js'

//Rutas de auntenticación y registro de usuarios
 router.post('/register', register)
 router.get('/verify/:token', verifyAccount)
 router.post('/login', login)
 router.post('/forgot-password', forgotPassword)
 router.route('/forgot-password/:token')
    .get(verifyPasswordResetToken)
    .post(updatePassword)


 //Area privada - requiere un JWT

 router.get('/user', authMiddleware, user)
 router.get('/admin', authMiddleware, admin)

export default router