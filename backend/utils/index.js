import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { format } from 'date-fns'
import es from 'date-fns/locale/es/index.js'

function validateObjectID(id, res){
    if(!mongoose.Types.ObjectId.isValid(id)){
        const error = new Error('El id no es válido')
            
            return res.status(400).json({
                msg: error.message
            })
    }
}

function handleNotFoundError(message, res){
    const error = new Error(message)
            
    return res.status(404).json({
        msg: error.message
    })
}

//Para el token de autenticación 
const uniqueId = () => Date.now().toString(32) + Math.random().toString(32).substring(2)


const generateJWT =(id)=>{
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn:'30d' //expira en 30 dias 
    })//se crea el jwt, haciendo uso del id de usuario, una llave privada creada en .env, expiración de 30 días   
    
    return token
}

function formateDate (date){
    return format(date, 'PPPP', {locale: es})
}

export {
    validateObjectID,
    handleNotFoundError,
    uniqueId,
    generateJWT,
    formateDate
}
