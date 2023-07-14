<script setup>
import Appointment from '../../components/Appointment.vue'
import { useUserStore } from '../../stores/user'
const user = useUserStore()
</script>

<template>
    <br>
    <div style="position: relative; top: ;">
        <h2 class="flex-1 text-center p-4 uppercase font-extrabold hover:text-black" >Mis citas</h2>
        <hr>
        <p class="text-black text-lg mt-5">A continuación podrás administrar tus próximas citas</p>
    </div>
    
    <p v-if="user.loading" class="text-black text-2xl text-center mt-5">Cargando...</p>
    <div v-else>
        <p v-if="user.noAppointments" class="text-black text-2xl text-center mt-5">No tienes próximas citas</p>

        <div v-else class="grid grid-cols-2 gap-5 mt-10">
            <Appointment 
            v-for="appointment in user.userAppointments"
            :key="appointment._id"
            :appointment="appointment"
            />
        </div>
    </div>
</template>

