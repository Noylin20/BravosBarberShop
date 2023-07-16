<script setup>
import Appointment from '../../components/Appointment.vue'
import { useUserStore } from '../../stores/user'
const user = useUserStore()
</script>
<template>
    <div class="mi-div">
        <h2 class="flex-1 text-center p-4 uppercase font-extrabold hover:text-black">Mis citas</h2>
        <hr style="width: 80%; float: center; position: relative; margin-left: 10%;">
    </div>
    <br>
    <p v-if="user.loading" class="text-black text-2xl text-center mt-5">Cargando...</p>
    <div v-else>
        <p v-if="user.noAppointments" class="text-black text-2xl text-center mt-5">No tienes citas pendientes</p>

        <div v-else class="mi-div grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 mt-10">
            <Appointment 
            v-for="appointment in user.userAppointments"
            :key="appointment._id"
            :appointment="appointment"
            />
        </div>
    </div>
</template>

<style>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
}

.mi-div {
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
}

@media (max-width: 767px) {
    .mi-div {
        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>
