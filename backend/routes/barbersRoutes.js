import express from 'express'
import { createBarber, getBarberById, updateBarber, deleteBarber, getBarbers, getAllBarbers} from '../controllers/barberController.js'


const router = express.Router()

//definir ruta
router.route('/')
    .post(createBarber)
   .get(getBarbers)
    .get(getAllBarbers)
 
router.route('/:id')
    .get(getBarberById)
    .put(updateBarber)
    .delete(deleteBarber)


export default router
