import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { uniqueId } from '../utils/index.js'


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    token: {
        type: String,
        default: () => uniqueId()
    },
    verified: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false //usuario es el cliente, pero al cambiar a true pasa a ser admin 
    },
    schedule: {
        inicio: {
            type: String,
            default: ''
        },
        salida: {
            type: String,
            default: ''
        }
    }
})

//Para hashear el password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()//va al siguiente middleware, se va a la siguiente función o lo que siga
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)//lo que esta en la contraseña 
})

userSchema.methods.checkPassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User