import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { uniqueId } from '../utils/index.js'


const barberSchema = mongoose.Schema({
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
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    scheduleStart: {
        type: String,
        required: true,
        trim: true
    },
    scheduleEnd: {
        type: String,
        required: true,
        trim: true
    }
})

//Identifica el modelo y la forma que se le ha definido 
const Barbers = mongoose.model('Barbers', barberSchema)

//Se exporta porque se usa desde el controlador 
export default Barbers