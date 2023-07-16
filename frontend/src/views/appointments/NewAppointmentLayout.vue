

<script setup>

import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { useAppointmentsStore } from '../../stores/appointments';


const appointments = useAppointmentsStore()
const route = useRoute()

onMounted(() => {
   appointments.clearAppointmentData()
})
</script>


<template>
   <div>
      <div class="img_NC">
         <div class="center_Txt">
      <h2 class="text-5xl font-bold  text-center mt-10 uppercase">Nueva cita</h2>
      <p class="text-xl text-center my-3 ">En Bravo´s Barbería te ofrecemos las mejores opciones</p>
   </div>
   </div>
      <div class="mi-div">
         <div class="my-5 flex gap-3 menu " style="position: relative; top: 20px; background: none;">
            <RouterLink :to="{ name: 'new-appointment' }"
               class="no-underline flex-1 text-center p-1 uppercase font-extrabold hover:bg-gray-600 hover:text-white border rounded-md"
               :class="route.name === 'new-appointment' ? 'colorCS text-white' : 'colorTxtD text-white-500'">
               Servicios
            </RouterLink>

            <RouterLink :to="{ name: 'appointment-details' }"
               class="no-underline flex-1 text-center p-1 uppercase font-extrabold hover:bg-gray-600 hover:text-white border border-blue-500 rounded-md"
               :class="route.name === 'appointment-details' ? 'colorCS text-white' : 'colorTxtD text-white-500'">
               Cita y resumen
            </RouterLink>
         </div>
      </div>
    
      <div class="mi-div">
      </div>
      <hr style="width: 80%; position: relative; margin-left: 10%;">
   </div>

   <div class="space-y-5">
      <RouterView />
   </div>
</template>
<style>
.img_NC {
  position: relative;
  top: -30px;
  width: 100%;
  height: 280px;
  background-image: url('/img/NC.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.mi-div {
   position: relative;
   /* left: 4%;
   right: 5%; */
   /* margin-right: 10%; */
}

.menu {
   width: 50%;
   display: flex;
   justify-content: center;
   margin-left: 24%;
}


</style>