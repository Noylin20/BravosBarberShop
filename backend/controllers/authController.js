import User from '../models/User.js'
import { sendEmailVerification } from '../emails/authEmailService.js'
import { generateJWT } from '../utils/index.js'

const register = async (req, res) => {
    
    //Valida todos los campos
    if (Object.values(req.body).includes('')) {
        const error = new Error('Todos los campos son obligatotios')
        return res.status(400).json({ msg: error.message })
    }


    const { email, lastName, name, password } = req.body


    //Evitar registros duplicados 
    const userExists = await User.findOne({ email })
    if (userExists) {
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({ msg: error.message})

    }
    console.log(userExists)

    //Validar la extensión del password
    const MIN_PASSWORD_LENGTH = 8
    if (password.trim().length < MIN_PASSWORD_LENGTH) {
        const error = new Error('El password debe contener al menos 8 caracteres')
        return res.status(400).json({ msg: error.message })
    }



    try {
        const user = new User(req.body)
        const result = await user.save()

        const { name, lastName, email, token } = result
        sendEmailVerification({ name, lastName, email, token })


        res.json({
            msg: 'El usuario se creó correctamente, revisa tu email'
        })

    } catch (error) {
        console.log(error)
    }
}

const verifyAccount = async (req, res) => {
    const { token } = req.params

    const user = await User.findOne({ token })
    if (!user) {
        const error = new Error('Hubo un error, token no válido')
        return res.status(401).json({ msg: error.message })
    }

    //Si el token es válido, se confirma la cuenta
    try {
        user.verified = true
        user.token = ""
        await user.save();
        res.json({ msg: "Usuario confirmado correctamente" })
    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    
    
    const { email, password } = req.body
    //Revidar que el usuario exista
    const user = await User.findOne({ email })
    if (!user) {
        const error = new Error('El usuario no existe')
        console.log("Usuario no existe")
        return res.status(401).json({ msg: error.message })
        
    }

    //Revisar si el usuario confirmo su cuenta
    if (!user.verified) {
        const error = new Error('Tu cuenta no ha sido confirmada aún')
        console.log("Usuario sin confirmar")
        return res.status(401).json({ msg: error.message })
    }
    //Confirmar el password
    if (await user.checkPassword(password)) {
        const token = generateJWT(user._id)
        console.log(token)
        console.log("Passworddd ")

        res.json({
            token
        })
    } else {
        const error = new Error('El password es incorrecto')
        return res.status(401).json({ msg: error.message }) 
    }
}

const user = async (req, res)=>{
    const {user}= req
    res.json(
        user
    )
}
export {
    register,
    verifyAccount,
    login,
    user
}