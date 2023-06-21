import {ref, onMounted} from 'vue' //Consulta la api para mostrar los servicios 
import {defineStore} from 'pinia'
import ServicesAPI from '../api/ServicesAPI'    

export const useServicesStore = defineStore('services', () =>{
    
const services = ref([])

   onMounted(async () =>{
        try {
            const {data} = await ServicesAPI.all()
           services.value = data
        } catch (error) {
        console.log(error) 
        }
    }) 
    
    return{
        services

    }
})