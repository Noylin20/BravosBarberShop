

<script setup>

import { onMounted } from 'vue';
import {useRoute} from 'vue-router'
import { useAppointmentsStore } from '../../stores/appointments';


const appointments = useAppointmentsStore()
const route = useRoute()

onMounted(()=>{
   appointments.clearAppointmentData()
})
</script>


<template>
   <div class="mi-div" style="position: relative; top: 1px;">
        <h2 class="flex-1 text-center p-4 uppercase font-extrabold hover:text-black">Nueva cita</h2>
        <hr>
        <div class="mi-div">
        </div>
    </div>
   <div class="mi-div">
   <nav class=" my-5 flex gap-3" style="position: relative; top: 20px;">
      <RouterLink
         :to="{name: 'new-appointment'}"
         class="no-underline flex-1 text-center p-1 uppercase font-extrabold hover:bg-blue-600 hover:text-white border border-blue-500 rounded-md"
         :class="route.name === 'new-appointment' ? 'bg-blue-500 text-white': 'bg-blue text-white-500'"
      >
         Servicios 
      </RouterLink>

      <RouterLink
         :to="{name:'appointment-details'}"
         class="no-underline flex-1 text-center p-1 uppercase font-extrabold hover:bg-blue-600 hover:text-white border border-blue-500 rounded-md"
         :class="route.name === 'appointment-details' ? 'bg-blue-500 text-white': 'bg-blue text-white-500'"
      >
         Cita y resumen 
      </RouterLink>
   </nav></div>
   <div class="space-y-5">
       <RouterView/>
   </div>
  
</template>
<style>

.mi-div {
  margin-left: 100px;
  margin-right: 100px;
}
</style>