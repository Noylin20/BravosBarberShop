import express from 'express'
import { createBarber, getBarbers, getBarberById, updateBarber as updateBarber, deleteBarber as deleteBarber} from '../controllers/barberController.js'


const router = express.Router()

//definir ruta
router.route('/')
    .post(createBarber)
    .get(getBarbers)
 
router.route('/:id')
    .get(getBarberById)
    .put(updateBarber)
    .delete(deleteBarber)


export default router
