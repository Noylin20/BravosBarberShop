

<script setup>

import { onMounted } from 'vue';
import {useRoute, useRouter} from 'vue-router'
import AppointmentAPI from '../../api/AppointmentAPI';
import {useAppointmentsStore} from '../../stores/appointments';



const appointments = useAppointmentsStore()
const route = useRoute()
const router = useRouter()

const { id } = route.params

onMounted(async () => {
    try {
        const {data} = await AppointmentAPI.getById(id)
        appointments.setSelectedAppointment(data)
    } catch (error) {
        router.push({name: 'my-appointments'})
    }
})

</script>


<template>
   <nav class="my-5 flex gap-3">
      <RouterLink
         :to="{name: 'edit-appointment'}"
         class="no-underline flex-1 text-center p-1 uppercase font-extrabold hover:bg-blue-600 hover:text-white border border-blue-500 rounded-md"
         :class="route.name === 'appointment-details' ? 'bg-blue-500 text-white': 'bg-blue text-white-500'"
      >
         Servicios 
      </RouterLink>

      <RouterLink
         :to="{name:'edit-appointment-details'}"
         class="no-underline flex-1 text-center p-1 uppercase font-extrabold hover:bg-blue-600 hover:text-white border border-blue-500 rounded-md"
         :class="route.name === 'appointment-details' ? 'bg-blue-500 text-white': 'bg-blue text-white-500'"
      >
         Cita y resumen 
      </RouterLink>
   </nav>
   <div class="space-y-5">
       <RouterView/>
   </div>
  
</template>
