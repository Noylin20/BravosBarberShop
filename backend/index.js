import express from 'express' //ESM de modulos de js
import dotenv from 'dotenv'// es una dependecia, no requiere el .js al final
import colors from 'colors'

import {db} from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'

//variables de entorno 
dotenv.config()


//configurar la aplicacion
const app = express()

//Habilitar leer datos via body
app.use(express.json())

//conectar a la BD
db()

//definir ruta
//use → midelware 
app.use('/api/services',servicesRoutes)

//definir puerto
// process.env.PORT → variables de entorno 
const PORT = process.env.PORT || 4000

//arrancar aplicacion 
app.listen(PORT, () => {
    console.log(colors.blue('El servidor se esta ejecutando en el puerto:', PORT))
})

