import {ref, onMounted, computed } from 'vue'
import {defineStore } from 'pinia'
import AuthAPI from '../api/AuthAPI'


export const useUserStore = defineStore ('user', () => {

    //devuelve el usuario autenticado como un objeto
    const user = ref({})

    //obtiene el usuario identicado 
    onMounted(async ()=>{

        try {
            const { data } = await AuthAPI.auth()
            user.value = data
            
        } catch (error) {
            console.log(error)
            
        }


    })


    //Coloca el nombre de usuario a la par del boton cerrar sesion
    const getUserName = computed(() => user.value?.name ? user.value?.name : '')

    return{
        user,
        getUserName

    }
})
