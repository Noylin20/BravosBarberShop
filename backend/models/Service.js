import mongoose from 'mongoose'


const servicesSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }, 
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    
    description:{
        type:String,
        required:true,
        trim:true
    },
    duration:{
        type:Number,
        required:true,
        trim:true
    }
})

//Identifica el modelo y la forma que se le ha definido 
const Services = mongoose.model('Services', servicesSchema)

//Se exporta porque se usa desde el controlador 
export default Services