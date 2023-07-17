

<script setup>

import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import AppointmentAPI from '../../api/AppointmentAPI';
import { useAppointmentsStore } from '../../stores/appointments';



const appointments = useAppointmentsStore()
const route = useRoute()
const router = useRouter()

const { id } = route.params

onMounted(async () => {
   try {
      const { data } = await AppointmentAPI.getById(id)
      appointments.setSelectedAppointment(data)
   } catch (error) {
      router.push({ name: 'my-appointments' })
   }
})

</script>


<template>
   <div class="img_NC">
      <div class="center_Txt">
         <h2 class="text-5xl font-bold  text-center mt-10 uppercase">Modifica tu cita</h2>
         <p class="text-xl text-center my-3 ">En Bravo´s Barbería te damos la posibilidad de que hagas cambios en una cita
            ya agendada</p>
      </div>
   </div>
   <div class="mi-div">
      <div class="my-5 flex gap-3 menu" style="position: relative; top: 20px; background: none;">

         <RouterLink :to="{ name: 'edit-appointment' }"
            class="no-underline flex-1 text-center p-1 uppercase font-extrabold hover:bg-gray-600 hover:text-white border rounded-md"
            :class="route.name === 'appointment-details' ? 'col text-white' : 'colorTxtD text-white-500'">
            Servicios
         </RouterLink>

         <RouterLink :to="{ name: 'edit-appointment-details' }"
            class="no-underline flex-1 text-center p-1 uppercase font-extrabold hover:bg-gray-600 hover:text-white border border-blue-500 rounded-md"
            :class="route.name === 'appointment-details' ? 'col text-white' : 'colorTxtD text-white-500'">
            Cita y resumen
         </RouterLink>
      </div>
      <hr style="width: 80%; position: relative; margin-left: 10%;">
   </div>
   <div class="space-y-5">
      <RouterView />
   </div>
</template>
<style>
.col{
   background: blue;
}

.colorTxtD {
   color: #5D6D7E;
}

.colorCD {
   background-color: #E5E8E8;
   ;
}

.colorCS2 {
   background-color: blue;
}

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
   margin-left: 100px;
   margin-right: 100px;
}

.menu {
   width: 50%;
   display: flex;
   justify-content: center;
   margin-left: 24%;
}

@media screen and (max-width: 767px) {
   .mi-div {
      width: 100%;
      margin-left: 1px !important;
   }
}

</style>