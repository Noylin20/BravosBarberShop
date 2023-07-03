import mongoose from 'mongoose'
import colors from 'colors'
import error from 'error'


//conexión a la BD
//Si falla la conexión de una vez lanza el error
export const db = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI)
        //console.log (db.connection)
        const url =`${db.connection.host}:${db.connection.port}`
        console.log (colors.green('MongoDB se conectó correctamente', url))
    }catch{
        console.log (`Error: ${error.message}`)
        process.exit(1) //detiene la ejecucion o programa 
    }
}
