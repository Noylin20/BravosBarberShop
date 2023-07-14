
import Barbers from '../models/Barber.js'

import { validateObjectID, handleNotFoundError } from '../utils/index.js'

const createBarber = async (req, res) => {  
   if(Object.values(req.body).includes("")) {//valida que todos los campos tengan contenido
        const error = new Error('Todos los campos son obligatotios')
        
        return res.status(400).json({
            msg: error.message
        })
    } 


    try {
        const barber = new Barbers(req.body)
        await barber.save()
        //console.log(barber)
        res.json({ 
            msg: 'El barbero se creó correctamente'
        })
        
    } catch (error){
        console.log(error)
    }
}

const getBarbers = async (req, res) => {  
   try {
      const barbers = await Barbers.find()
      res.json(barbers)
   } catch (error) {
    console.log(error)
   }
}

const getBarberById = async (req, res) => {  
    
    const { id } = req.params
    //validar un object id
    if(validateObjectID(id, res)) return
   
        //Validar que exista
    const barber = await Barbers.findById(id) 
   
    if(!barber){
        return handleNotFoundError('El barbero no existe',res)
         
    }
    //Mostrar el barbero
    res.json(barber)
}

const updateBarber = async (req, res) => { 
    const { id } = req.params
    
    if(validateObjectID(id, res)) return

        //Validar que exista
    const barber = await Barbers.findById(id)
    
    if(!barber){
        return handleNotFoundError('El barbero no existe',res)
         
    }

    //escribimos en el obj los valores nuevos 
   barber.name = req.body.name || barber.name
   barber.lastName = req.body.lastName || barber.lastName
   barber.email = req.body.email || barber.email
   barber.phone = req.body.phone || barber.phone
   barber.scheduleStart = req.body.scheduleStar || barber.scheduleStart
   barber.scheduleEnd = req.body.scheduleEnd || barber.scheduleEnd

   try {
    await barber.save()
    res.json({
        msg: "El barbero se actualizó correctamente"
    })
   } catch (error) {
    console.log(error)
   }
}

const deleteBarber = async (req, res) => { 
    const { id } = req.params
    
    if(validateObjectID(id, res)) return

        //Validar que exista
    const barber = await Barbers.findById(id)
    
    if(!barber){
        return handleNotFoundError('El barbero no existe',res)
         
    }

    try {
       await barber.deleteOne()
       res.json({
            msg: 'El barbero se eliminó con éxito'
       })
    } catch (error) {
        console.log(error)   
    }
}


export {
    createBarber,
    getBarbers,
    getBarberById,
    updateBarber,
    deleteBarber
}