import { ref, computed, onMounted, inject } from 'vue'  //Se importan los servicios que el cliente quiere contratar
import { defineStore } from 'pinia'
import{ useRouter } from 'vue-router'
import AppointmentAPI from '../api/AppointmentAPI'
import { convertToISO } from '../helpers/date'

export const useAppointmentsStore = defineStore('appointments', ()=>{
    
    const services = ref([]) //para guardar los servicios seleccionados
    const date = ref('') //para guardar la fecha 
    const hours = ref([])
    const time = ref('[]')

    const toast = inject('toast')
    const router = useRouter()

    onMounted(() => {
        const starHour = 10;
        const endHour = 19;
      
        for (let hour = starHour; hour <= endHour; hour++) {
          let format = (hour < 12) ? 'am' : 'pm';
          let hourFormatted = (hour <= 12) ? hour : hour - 12;
          hours.value.push(hourFormatted + ':00 ' + format);
        }
      });
      

    async function createAppointment() {
       const appointment = {
        services: services.value.map(service => service._id),
        date: convertToISO(date.value),
        time: time.value, 
        totalAmount: totalAmount.value 
       }
       
       
       try {
        const{ data } =await AppointmentAPI.create(appointment)//pasamos los datos de la cita
       toast.open({
            message: data.msg,
            type: 'success'
         })
         router.push({name: 'my-appointments'})
         clearAppointmentData()
         
       } catch (error) {
        console.log(error)
       }
       
       

    }

    function clearAppointmentData(){//reinicia los servicios y elecciones después de elegir una cita y volver a generar una nueva
        services.value=[]
        data.value=''
        time.value= ''

    }

    function onServiceSelected(service){
         ///Vamos a comprobar que no hayan servicios repetidos
        if(services.value.some(selectedService => selectedService._id === service._id)){
           services.value = services.value.filter(selectedService => selectedService._id !== service._id)
        }else{
            if(services.value.length === 2){
                alert('Maximo 2 servicios por cita')
                return
            }
            services.value.push(service)
       }
       
    }

    const isServiceSelected = computed(()=>{
        return (id) => services.value.some(service => service._id === id)

     })


    const noServicesSelected = computed(() => services.value.length === 0)

    const totalAmount =computed(()=>{
        return services.value.reduce((total, service) => total + service.price, 0)
    })

    const isValidReservation = computed(()=>{
        return services.value.length && date.value.length && time.value.length 
    })

    return {
        services,
        date, 
        hours,
        time,
        createAppointment, 
        onServiceSelected,
        isServiceSelected,
        noServicesSelected,
        totalAmount,
        isValidReservation
    }
})
