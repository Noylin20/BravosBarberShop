import mongoose from 'mongoose'

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
const generateJWT =()=>{
    console.log('desde generar JWT', id)
}


export {
    validateObjectID,
    handleNotFoundError,
    uniqueId,
    generateJWT
}
