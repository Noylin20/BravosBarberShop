import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const authMiddleware = async(req, res, next)=>{

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqq')//-------------
        try {
            const token = req.headers.authorization.split(' ')[1]
            
            const decoded= jwt.verify(token, process.env.JWT_SECRET)//se usa la misma llave privada para generarlo y para verificarlo 
            
            req.user = await User.findById(decoded.id).select(
                "-password -verified -token -__v"//Son los datos que se obtienen con el id de usuario y que no necesitamos que se muestren
            )

            next()
        } catch{
            const error= new Error('Token no válido o inexistente')
             res.status(403).json({msg: error.message})
             console.log('bbbbbbbbbbbbbbbb')
        }
        
    }else{
        const error= new Error('Token no válido o inexistente')
        res.status(403).json({msg: error.message})
        console.log('aaaaaaaaaaaaaaaaaaaaaa')
    }
}

export default authMiddleware