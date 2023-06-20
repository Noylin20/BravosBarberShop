import { services } from '../data/services.js'
import Services from '../models/Service.js'
import mongoose from 'mongoose'
import { validateObjectID, handleNotFoundError } from '../utils/index.js'

const createService = async (req, res) => {  
   if(Object.values(req.body).includes("")) {//valida que todos los campos tengan contenido
        const error = new Error('Todos los campos son obligatotios')
        
        return res.status(400).json({
            msg: error.message
        })
    } 


    try {
        const service = new Services(req.body)
        await service.save()
        //console.log(service)
        res.json({
            msg: 'El servicio se creó correctamenta'
        })
        
    } catch (error){
        console.log(error)
    }
}

const getServices = (req, res) => {  
    res.json(services)
}

const getServicesById = async (req, res) => {  
    
    const { id } = req.params
    //validar un object id
    if(validateObjectID(id, res)) return
   
        //Validar que exista
    const service = await Services.findById(id) 
   
    if(!service){
        return handleNotFoundError('El servicio no existe',res)
         
    }
    //Mostrar el servicio
    res.json(service)
}

const updateService = async (req, res) => { 
    const { id } = req.params
    
    if(validateObjectID(id, res)) return

        //Validar que exista
    const service = await Services.findById(id)
    
    if(!service){
        return handleNotFoundError('El servicio no existe',res)
         
    }

    //escribimos en el obj los valores nuevos 
   service.name = req.body.name || service.name
   service.price = req.body.price || service.price

   try {
    await service.save()
    res.json({
        msg: "El servicio se actualizó correctamente"
    })
   } catch (error) {
    console.log(error)
   }
}

const deleteService = async (req, res) => { 
    const { id } = req.params
    
    if(validateObjectID(id, res)) return

        //Validar que exista
    const service = await Services.findById(id)
    
    if(!service){
        return handleNotFoundError('El servicio no existe',res)
         
    }

    try {
       await service.deleteOne()
       res.json({
            msg: 'El servicio se eliminó con éxito'
       })
    } catch (error) {
        console.log(error)   
    }
}


export {
    createService,
    getServices,
    getServicesById,
    updateService,
    deleteService
}