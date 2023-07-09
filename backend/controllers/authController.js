import User from '../models/User.js'
import { sendEmailVerification, sendEmailPasswordReset } from '../emails/authEmailService.js'
import { generateJWT, uniqueId } from '../utils/index.js'

const register = async (req, res) => {

    //Valida todos los campos
    if (Object.values(req.body).includes('')) {
        const error = new Error('Todos los campos son obligatotios')
        return res.status(400).json({ msg: error.message })
    }


    const { email, lastName, name, password, validateAdmin, horarioE, horarioS } = req.body

    console.log('mi validacion' + validateAdmin)


    //Evitar registros duplicados 
    const userExists = await User.findOne({ email })
    if (userExists) {
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({ msg: error.message })

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
       console.log('????' + validateAdmin)


       //Verificamos si es un admin quien esta creando el usuario como admin (nuevo barbero)
        if (validateAdmin) {
            console.log('antes' + user.admin)
            user.admin = true; // Establecer usuario admin como true
            user.schedule.inicio = horarioE
            user.schedule.salida = horarioS

            console.log( 'desp' + user.admin)
           await user.save(); // Guardar el usuario actualizado
        }

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

const forgotPassword = async (req, res) => {
    const { email } = req.body

    //Comprobamos si existe el usuario
    const user = await User.findOne({ email })
    if (!user) {
        const error = new Error('El usuario no existe')
        return res.status(404).json({ msg: error.message })
    }

    //Si el usuario existe hay que generar un nuevo token
    try {
        user.token = uniqueId()
        //Almcenamos en la BD
        const result = await user.save()

        await sendEmailPasswordReset({
            name: result.name,
            email: result.email,
            token: result.token
        })
        res.json({
            msg: 'Se ha enviado un mensaje con las instrucciones a tu correo'
        })

    } catch (error) {
        console.log(error)
    }

}

const verifyPasswordResetToken = async (req, res) => {
    const {token} = req.params
    const isValidToken = await User.findOne({token})
    if(!isValidToken){
        const error = new Error('Hubo un error, el token no es válido')
        return res.status(400).json({ msg: error.message })
    }

    res.json({msg: 'Token válido'})
}

const updatePassword = async (req, res) => {
    const {token} = req.params
    const user = await User.findOne({token})
    if(!user){
        const error = new Error('Hubo un error, el token no es válido')
        return res.status(400).json({ msg: error.message })
    }
    
    const {password} = req.body 
    try {
        user.token = ''
        user.password = password
        await user.save()
        res.json({
            msg: 'Contraseña modificada correctamente'
        })
    } catch (error) {
        console.log(error)
    }
}

const user = async (req, res) => {
    const { user } = req
    res.json(
        user
    )
}

const admin = async (req, res) => {
    const { user } = req
    if(!user.admin){
        const error = new Error ('Acción no válida')
        return res.status(403).json({ msg: error.message })
    }
   
    res.json(
        user
    )
}
export {
    register,
    verifyAccount,
    login,
    forgotPassword,
    verifyPasswordResetToken,
    updatePassword,
    user,
    admin
}