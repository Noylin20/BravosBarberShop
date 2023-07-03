import {ref, onMounted} from 'vue' //Consulta la api para mostrar los servicios 
import {defineStore} from 'pinia'
import ServicesAPI from '../api/ServicesAPI'    

export const useServicesStore = defineStore('services', () =>{
    
const services = ref([])

    const name = ref('')
    const description = ref('')
    const price = ref(0)

   onMounted(async () =>{
        try {
            const {data} = await ServicesAPI.all()
           services.value = data
        } catch (error) {
        console.log(error) 
        }
    });

    function createService() {
        const service = {
            name: name.value,
            description: description.value,
            price: price.value
        }
        console.log(service)
    }
    
    return{
        services,
        name,
        description,
        price,
        createService
    }
})