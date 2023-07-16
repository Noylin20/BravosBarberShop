import {ref, inject, onMounted} from 'vue' //Consulta la api para mostrar los servicios 
import {defineStore} from 'pinia'
import { useRouter } from 'vue-router'
import AppointmentAPI from '../api/AppointmentAPI'    
//import { ref } from 'vue';

export const appointmentsRef = ref([]);
export const useAppointmentsStore = defineStore('appointments', () =>{
    
const appointments = ref([])

     const barbers = ref([])
    const user = ref('')
    const date = ref('')
    const time = ref('')
   // const barber = ref('')
    

    const toast = inject('toast')
    const router = useRouter()

   onMounted(async () =>{
        try {
            const {data} = await AppointmentAPI.all()
           appointments.value = data         
        } catch (error) {
        console.log(error) 
        }
    });

  
    async function getAllAppointments(userId = '64aded0bbc0195b41f92a8fc') {
        try {
            const { data } = await AppointmentAPI.getUserAppointments(userId);
            return data; // Devuelve la lista de usuarios encontrados
        } catch (error) {
            console.log(error);
            return null; // Devuelve null si ocurre un error
        }
    }

    // async function createAppointment(service) {

    //         try {
    //             const { data } = await AppointmentsAPI.createService(service)//pasamos los datos de la cita
    //             toast.open({
    //                 message: data.msg,
    //                 type: 'success'
    //             })
    //         } catch (error) {
    //             console.log(error)
    //         }

    //     // }
    //     console.log(service)        
    //     try {
    //         const {data} = await AppointmentsAPI.all()
    //         appointments+.value = data       
    //     } catch (error) {
    //         console.log(error) 
    //     }
    //     router.push({ name:'list-services' })

    // }

    // async function updateService(service) {
    //     try {
    //       const { data } = await ServicesAPI.updateService(service); // Pass the updated service data
    //       toast.open({
    //         message: data.msg,
    //         type: 'success'
    //       });
    //     } catch (error) {
    //       console.log(error);
    //     }
      
    //     console.log(service);
      
    //     try {
    //       const { data } = await ServicesAPI.all();
    //       services.value = data;
    //     } catch (error) {
    //       console.log(error);
    //     }
      
    //     router.push({ name: 'services-list' });
    //   }
      
    
    // async function deleteService(id) {
    //     if (confirm('¿Desea eliminar este servicio?')) {
    //         try {
    //             const { data } = await AppointmentsAPI.deleteService(id)
    //             toast.open({
    //                 message: data.msg,
    //                 type: 'success'
    //             })
    //             appointments+.value = appointments+.value.filter(service => service._id !== id)
    //         } catch (error) {
    //             toast.open({
    //                 message: error.response.data.msg,
    //                 type: 'error'
    //             })
    //         }
    //     }
    // }
   
      
    // async function updateService(service) {
    //     console.log('mi servicio a actualizar' + service._id)
    //     console.log(service.description)

    //     try {
    //         const { data } = await AppointmentsAPI.updateService(service._id); // Pasamos los datos del servicio
    //         toast.open({
    //             message: data.msg,
    //             type: 'success'
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    
    //     console.log(service);
    
    //     try {
    //         const { data } = await AppointmentsAPI.all();
    //         appointments+.value = data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    
    //     router.push({ name: 'list-services' });
    // }
    

    return{
       appointments,
       getAllAppointments,
        user,
        date, time
    }
})