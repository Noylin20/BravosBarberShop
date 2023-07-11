import {ref, inject, onMounted} from 'vue' //Consulta la api para mostrar los servicios 
import {defineStore} from 'pinia'
import { useRouter } from 'vue-router'
import ServicesAPI from '../api/ServicesAPI'    

export const useServicesStore = defineStore('services', () =>{
    
const services = ref([])

    const serviceId = ref('')
    const name = ref('')
    const description = ref('')
    const price = ref('')

    const toast = inject('toast')
    const router = useRouter()

   onMounted(async () =>{
        try {
            const {data} = await ServicesAPI.all()
           services.value = data         
        } catch (error) {
        console.log(error) 
        }
    });

    async function createService(service) {

            try {
                const { data } = await ServicesAPI.createService(service)//pasamos los datos de la cita
                toast.open({
                    message: data.msg,
                    type: 'success'
                })
            } catch (error) {
                console.log(error)
            }

        // }
        console.log(service)        
        try {
            const {data} = await ServicesAPI.all()
            services.value = data       
        } catch (error) {
            console.log(error) 
        }
        router.push({ name:'services-list' })

    }
    
    async function deleteService(id) {
        if (confirm('¿Desea eliminar este servicio?')) {
            try {
                const { data } = await ServicesAPI.deleteService(id)
                toast.open({
                    message: data.msg,
                    type: 'success'
                })
                services.value = services.value.filter(service => service._id !== id)
            } catch (error) {
                toast.open({
                    message: error.response.data.msg,
                    type: 'error'
                })
            }
        }
    }

    return{
        services,
        name,
        description,
        price,
        createService,
        deleteService
    }
})