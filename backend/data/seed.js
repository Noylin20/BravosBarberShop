
import dotenv from 'dotenv'
import colors from 'colors'
import { db } from '../config/db.js'
import Services from '../models/Service.js'
import { services } from './services.js'


dotenv.config()

await db()

async function seedDB(){
    try {
       await Services.insertMany(services)
       console.log(colors.green.bold('Se agregaron los servicios correctamente'))
       process.exit(0)//Finaliza el proceso correctamente
    } catch (error) {
        console.log(error)
        process.exit(1) //corta el proceso si hay un error
    }
   
}
//si la BD tiene un error la podemos limpiar facilmente
async function clearDB(){

    try {
        await Services.deleteMany()
        console.log(colors.red.bold('Se eliminaron los datos correctamente'))
        process.exit(0)//Finaliza el proceso correctamente
     } catch (error) {
         console.log(error)
         process.exit(1) //corta el proceso si hay un error
     }
}


if (process.argv[2] === '--import'){
    seedDB()
} else {
    clearDB()
}