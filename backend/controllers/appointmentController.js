import { parse, formatISO, startOfDay, endOfDay, isValid } from 'date-fns'
import Appointment from '../models/Appointment.js'
import { validateObjectID, handleNotFoundError, formateDate} from '../utils/index.js'
import { sendEmailNewAppointment, sendEmailUpdateAppointment, sendEmailCancelAppointment} from '../emails/appointmentEmailServices.js'


const createAppointment = async (req, res) => {

    const appointment = req.body
    appointment.user = req.user._id.toString()

    try {
        const newAppointment = new Appointment(appointment)
        const result = await newAppointment.save()
        
        await sendEmailNewAppointment({
            date: formateDate(result.date),  
            time: result.time
        })
        
        res.json({
            msg: 'Tu reservación se realizó correctamente'
        })

    } catch (error) {
        console.log(error)
    }
}

const getAppointmentsByDate = async (req, res) => {
    const { date } = req.query
    console.log(req.query)
    //se obtiene la fecha que elije el usuario
    const newDate = parse(date, 'dd/MM/yyyy', new Date())
    //se formatea la fecha al formato que lo recibe MongoDB

    if (!isValid(newDate)) {
        const error = new Error('Fecha no válida')
        return res.status(401).json({ msg: error.message })

    }

    const isoDate = formatISO(newDate)

    const appointments = await Appointment.find({
        date: {
            $gte: startOfDay(new Date(isoDate)),
            $lte: endOfDay(new Date(isoDate))
        }
    }).select('time')

    res.json(appointments)

}

const getAppointmentById = async (req, res) => {
    const { id } = req.params

    //Validar por object id
    if (validateObjectID(id, res)) return

    //Validad que exista
    const appointment = await Appointment.findById(id).populate('services')

    if (!appointment) {
        return handleNotFoundError('La cita no existe', res)
    }

    //Denegar permisos si un usuario quiere acceder a una cita de otra persona
    if (appointment.user.toString() !== req.user._id.toString()) {
        const error = new Error('No tiene los permisos necesarios')
        return res.status(403).json({ msg: error.message })
    }

    //Retornar la cita
    res.json(appointment)
}

const updateAppointment = async (req, res) => {
    const { id } = req.params

    //Validar por object id
    if (validateObjectID(id, res)) return

    //Validad que exista
    const appointment = await Appointment.findById(id).populate('services')

    if (!appointment) {
        return handleNotFoundError('La cita no existe', res)
    }

    //Denegar permisos si un usuario quiere acceder a una cita de otra persona
    if (appointment.user.toString() !== req.user._id.toString()) {
        const error = new Error('No tiene los permisos necesarios')
        return res.status(403).json({ msg: error.message })
    }

    const {date, time, totalAmount, services} = req.body
    appointment.date = date
    appointment.time = time
    appointment.totalAmount = totalAmount
    appointment.services = services
    appointment.barber = user._id

    try {
    const result =  await appointment.save()  

    await sendEmailUpdateAppointment({
        date: formateDate(result.date),  
        time: result.time
    })

    res.json({
        msg: 'Cita actualizada correctamente'
    })
    } catch (error) {
        console.log(error)
    }
}

const deleteAppointment= async (req, res)=>{
    const { id } = req.params

    //Validar por object id
    if (validateObjectID(id, res)) return

    //Validad que exista
    const appointment = await Appointment.findById(id).populate('services')

    if (!appointment) {
        return handleNotFoundError('La cita no existe', res)
    }

    //Denegar permisos si un usuario quiere acceder a una cita de otra persona
    if (appointment.user.toString() !== req.user._id.toString()) {
        const error = new Error('No tiene los permisos necesarios')
        return res.status(403).json({ msg: error.message })
    }

    try {
        const result = await appointment.deleteOne()

        await sendEmailCancelAppointment({
            date: formateDate(result.date),  
            time: result.time
        })
    

        res.json({msg: 'Cita cancelada correctamente'})
    } catch (error) {
        console.log(error)
    }
}

export {
    createAppointment,
    getAppointmentsByDate,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
}