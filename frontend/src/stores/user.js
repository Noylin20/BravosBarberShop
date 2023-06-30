import {ref, onMounted, computed } from 'vue'
import {defineStore } from 'pinia'
import AuthAPI from '../api/AuthAPI'


export const useUserStore = defineStore ('user', () => {

    const user = ref({})

    onMounted(async ()=>{

        try {
            const { data } = await AuthAPI.auth()
            console.log(data)
            
        } catch (error) {
            console.log(error)
            
        }


    })


        const getUsername = computed(() => user.value?.name ? user.value?.name : '')

    return{
        user,
        getUsername

    }
})
