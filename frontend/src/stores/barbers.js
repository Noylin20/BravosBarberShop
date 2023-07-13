import { ref, inject, onMounted } from 'vue' //Consulta la api para mostrar los servicios 
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import BarbersAPI from '../api/BarberAPI'

export const useBarbersStore = defineStore('barbers', () => {

    const barbers = ref([])

    const barberId = ref('')
    const name = ref('')
    const lastName = ref('')
    const email = ref('')
    const scheduleStart = ref('')
    const scheduleEnd = ref('')

    const toast = inject('toast')
    const router = useRouter()

    onMounted(async () => {
        try {
            const { data } = await BarbersAPI.all()
            barbers.value = data
        } catch (error) {
            console.log(error)
        }
    });

    async function createBarber(barber) {

        try {
            const { data } = await BarbersAPI.createBarber(barber)//pasamos los datos de la cita
            toast.open({
                message: data.msg,
                type: 'success'
            })
        } catch (error) {
            console.log(error)
        }

        // }
        console.log(barber)
        try {
            const { data } = await BarbersAPI.all()
            barbers.value = data
        } catch (error) {
            console.log(error)
        }
        router.push({ name: 'barbers-list' })

    }

    async function getBarberById(barberId) {
        try {
          const { data } = await BarbersAPI.getBarberById(barberId)
          return data // Devuelve los datos del barbero encontrado
        } catch (error) {
          console.log(error)
          return null // Devuelve null si ocurre un error
        }
      }
      

    async function deleteBarber(id) {
        if (confirm('¿Desea eliminar este barbero?')) {
            try {
                const { data } = await BarbersAPI.deleteBarber(id)
                toast.open({
                    message: data.msg,
                    type: 'success'
                })
                barbers.value = barbers.value.filter(barber => barber._id !== id)
            } catch (error) {
                toast.open({
                    message: error.response.data.msg,
                    type: 'error'
                })
            }
        }
    }

    return {
        services: barbers,
        name,
        lastName,
        email,
        scheduleStart,
        scheduleEnd,
        createBarber,
        deleteBarber,
        getBarberById
    }
})