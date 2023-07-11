import Appointment from "../models/Appointment.js"
import User from "../models/User.js"

const getUserAppointments = async (req, res) => {
    const { user } = req.params


    if (user !== req.user._id.toString()) { ///&& role !== 'admin'
        const error = new Error('Acceso denegado')
        return res.status(400).json({ msg: error.message })
    }
    try {
        const query = req.user.admin ? { date: { $gte: new Date() } } : {
            user, date: {
                $gte: new Date()
            }
        }

        const appointments = await Appointment.find(query).populate('services').populate({ path: 'user', select: 'name email' }).sort({ date: 'asc' })
        res.json(appointments)
    } catch (error) {
        console.log(error)

    }
}


const getUser = async (req, res) => {
    // if (req.user.role !== 'admin') {
    //   const error = new Error('Acceso denegado');
    //   return res.status(400).json({ msg: error.message });
    // }

    try {
        const users = await User.find().select('name email').sort({ name: 'asc' });
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ocurrió un error al obtener la lista de usuarios' });
    }
}

export {
    getUserAppointments,
    getUser
}