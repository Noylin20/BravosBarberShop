import express from 'express'
import { createService, getServices, getServicesById, updateService, deleteService} from '../controllers/servicesController.js'


const router = express.Router()

//definir ruta
router.route('/')
    .post(createService)
    .get(getServices)
    
    
 
router.route('/:id')
    .get(getServicesById)
    .put(updateService)
    .delete(deleteService)
   // .get(updateServices)


export default router
