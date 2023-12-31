import { ref, computed, onMounted, inject, watch, reactive } from 'vue'  //Se importan los servicios que el cliente quiere contratar
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import AppointmentAPI from '../api/AppointmentAPI'
import { convertToISO, convertToDDMMYYYY } from '../helpers/date'
import { useUserStore } from '../stores/user'

export const useAppointmentsStore = defineStore('appointments', () => {

    const appointmentId = ref('')
    const services = ref([]) //para guardar los servicios seleccionados
    const date = ref('') //para guardar la fecha 
    const hours = ref([])
    const time = ref('')
    const appointmentsByDate = ref([])
    const appoint = ref([])



    const state = reactive({
        appointments: [] // Asegúrate de inicializarla como un array vacío
    })

    const toast = inject('toast')
    const router = useRouter()
    const user = useUserStore()


    onMounted(() => {

     
        const startHour = 10;
        const endHour = 19;

        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                const format = (hour < 12) ? 'am' : 'pm';
                const hourFormatted = (hour <= 12) ? hour : hour - 12;
                const timeFormatted = hourFormatted + ':' + ('0' + minute).slice(-2) + ' ' + format;
                hours.value.push(timeFormatted);
            }
        }
    });



    // Watcher para detectar cambios en la selección del barbero
    watch(date, async () => {
        time.value = ''

        if (date.value === '') return
        //Obtenemos las citas
        const { data } = await AppointmentAPI.getByDate(date.value)


        if (appointmentId.value) {
            appointmentsByDate.value = data.filter(appointment => appointment._id !== appointmentId.value)
            const currentTime = data.filter(appointment => appointment._id === appointmentId.value)[0].time
            time.value = currentTime.substring(0, 5); // Extrae los primeros 5 caracteres (hora y minutos) para quitar el am o pm

            console.log(' time.value ' + time.value)

        } else {
            appointmentsByDate.value = data
        }
    })

    //Trae la informacion cargada de la cita que se desea editar
    function setSelectedAppointment(appointment) {
        services.value = appointment.services
        date.value = convertToDDMMYYYY(appointment.date)
        time.value = appointment.time
        appointmentId.value = appointment._id

        console.log('appointmentId ' + appointmentId)
    }

    async function saveAppointment() {
        const appointment = {
            services: services.value.map(service => service._id),
            date: convertToISO(date.value),
            time: time.value,
            totalAmount: totalAmount.value
        }

        if (appointmentId.value) {

            console.log('appointmentId.value' + appointmentId.value)
            try {
                const { data } = await AppointmentAPI.update(appointmentId.value, appointment)//pasamos el id y los datos de la cita
                toast.open({
                    message: data.msg,
                    type: 'success'
                })

            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const { data } = await AppointmentAPI.create(appointment)//pasamos los datos de la cita
                toast.open({
                    message: data.msg,
                    type: 'success'
                })
            } catch (error) {
                console.log(error)
            }

        }
        clearAppointmentData()
        user.getUserAppointments()


        router.push({ name: 'my-appointments' })

    }

    async function getAllAppointments(userId = '64aded0bbc0195b41f92a8fc') {
        try {
            const { data } = await AppointmentAPI.getUserAppointments(userId);
            return data; // Devuelve la lista de usuarios encontrados
        } catch (error) {
            console.log(error);
            return null; // Devuelve null si ocurre un error
        }
    }


    function clearAppointmentData() {//reinicia los servicios y elecciones después de elegir una cita y volver a generar una nueva
        appointmentId.value = ''
        services.value = []
        date.value = ''
        time.value = ''
    }


    async function cancelAppointment(id) {
        if (confirm('¿Desea cancelar esta cita?')) {
            try {
                const { data } = await AppointmentAPI.delete(id)
                toast.open({
                    message: data.msg,
                    type: 'success'
                })

                user.userAppointments = user.userAppointments.filter(appointment => appointment._id !== id)
            } catch (error) {

                toast.open({
                    message: errorMsg,
                    type: 'error'
                })
            }
        }
    }


    function onServiceSelected(service) {
        ///Vamos a comprobar que no hayan servicios repetidos
        if (services.value.some(selectedService => selectedService._id === service._id)) {
            services.value = services.value.filter(selectedService => selectedService._id !== service._id)
        }
        else {
            if (services.value.length === 10000) {
                alert('Maximo 5 servicios por cita')
                return
            }
            services.value.push(service)
        }

    }

    const isServiceSelected = computed(() => {
        return (id) => services.value.some(service => service._id === id)

    })


    const noServicesSelected = computed(() => services.value.length === 0)

    const totalAmount = computed(() => {
        return services.value.reduce((total, service) => total + service.price, 0)
    })


    const isValidReservation = computed(() => {
        return services.value.length && date.value.length && time.value.length
    })

    const isDateSelected = computed(() => {
        return date.value ? true : false
    })


    const disableTime = computed(() => {
        return (hour) => {
            return appointmentsByDate.value.find(appointment => appointment.time === hour)

        }
    })

    return {
        appoint,
        services,
        date,
        hours,
        time,
        setSelectedAppointment,
        onServiceSelected,
        saveAppointment,
        clearAppointmentData,
        cancelAppointment,
        isServiceSelected,
        noServicesSelected,
        totalAmount,
        isValidReservation,
        isDateSelected,
        disableTime,
        getAllAppointments
    }
})
