import express from 'express' //ESM de modulos de js
import dotenv from 'dotenv'// es una dependecia, no requiere el .js al final
import colors from 'colors'
import cors from 'cors'
import {db} from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'
import authRoutes from './routes/authRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import userRoutes from './routes/userRoutes.js'
//variables de entorno 
dotenv.config()


//configurar la aplicacion
const app = express()

//const cors = require('cors');

// Permitir todas las solicitudes CORS
app.use(cors());


//Habilitar leer datos via body
app.use(express.json())


//conectar a la BD
db()

//Configurar cors ► es para permitir comunicacion entre frontend y backend

//Lista blanca de dominios permitidos
const whiteList =  [process.env.FRONTEND_URL]

if(process.argv[2] === '--postman'){
    whiteList.push(undefined)
}

//<para que funcione postman, luego lo cambio por el de abajo
const corsOptions = {
    origin: function(origin, callback) {
      callback(null, true);
    }
  };
// const corsOptions = {
//     origin: function(origin, callback){
//          console.log(origin)
//         if(whiteList.includes(origin)){
//             //Permitir conexión
//            callback(null, true)
//         } else {
//             // No permitir conexión 
//             callback(new Error('Error de CORS'))

//      }
//       // console.log(origin)
//     }
// }

//habilitando cors
app.use(cors(corsOptions))
//definir ruta
//use → midelware 
app.use('/api/services',servicesRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/appointments',appointmentRoutes)
app.use('/api/users',userRoutes)


//definir puerto
// process.env.PORT → variables de entorno 
const PORT = process.env.PORT || 4000

//arrancar aplicacion 
app.listen(PORT, () => {
    console.log(colors.blue('El servidor se esta ejecutando en el puerto:', PORT))
})

