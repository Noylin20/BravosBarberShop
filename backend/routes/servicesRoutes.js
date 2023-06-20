import express from 'express'
import { createService, getServices, getServicesById, updateService, deleteService} from '../controllers/servicesController.js'


const router = express.Router()

//definir ruta
router.post('/', createService) 
router.get('/', getServices)
router.get('/:id', getServicesById)
router.put('/:id', updateService)
router.delete('/:id', deleteService)


export default router
