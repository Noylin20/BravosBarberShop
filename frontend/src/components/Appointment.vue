<script setup>
import { displayDate } from '../helpers/date'
import { formatCurrency } from '../helpers';
import { useAppointmentsStore } from '../stores/appointments';
// import { defineProps } from 'vue';
// import { RouterLink } from 'vue-router';

const appointments = useAppointmentsStore()
defineProps({
    appointment: {
        type: Object
    }
});
</script>


<template>
    <div class="p-5 space-y-2 rounded-lg font" style="text-align: center; border: 3px solid #85929E;  background: #E5E8E8;">
        <p class="text-black-500 font-black">
            Fecha: <span class="font-light">{{ displayDate(appointment.date) }}</span>
            Hora: <span class="font-light">{{ appointment.time }}</span>
        </p>

        <p class="text-lg font-black">Servicios solicitados en la cita</p>

        <div v-for="service in appointment.services" :key="service.name">
            <p class="font-light">{{ service.name }}</p>
            <p class="text-1xl font-black " style="color: #5D6D7E;">{{ formatCurrency(service.price) }}</p>
        </div>

        <p class="text-1xl font-black">
            Total a pagar: <span class="font-black" style="color: #5D6D7E;">{{ formatCurrency(appointment.totalAmount) }}</span>
        </p>
        <br>
        
        <div class="flex gap-2 items-center contenedor">
            <RouterLink 
                :to="{name: 'edit-appointment', params: { id: appointment._id } }"
                class="btn btn-outline-primary no-underline bg-green-600 rounded-lg p-3 text-sm uppercase font-black flex-1 md:flex-none">
                Editar cita
            </RouterLink>
            <button 
            type="button" class="btn btn-outline-danger bg-red-600 rounded-lg p-3  text-sm uppercase font-black flex-1 md:flex-none"
                @click="appointments.cancelAppointment(appointment._id)"
                >
                Cancelar cita
            </button>

        </div>
    </div>
</template>
  

  
<style scoped>

.position{
    margin-bottom: 0px;
}

.font{
    font-size: 18px;
}
.bg-gray {
    background-color: #f3f4f6;
}

.text-black-500 {
    color: #374151;
}

.font-black {
    font-weight: 900;
    /* color: #212F3C; */
}

.font-light {
    font-weight: 400;
}

.text-lg {
    font-size: 1.125rem;
}

.text-1xl {
    font-size: 1.25rem;
}

.text-2xl {
    font-size: 1.5rem;
}

.text-blue-500 {
    color: #3b82f6;
}

.text-blue-600 {
    color: #2563eb;
}

.text-right {
    text-align: right;
}

.space-y-3>*+* {
    margin-top: 0.75rem;
}

.rounded-lg {
    border-radius: 0.5rem;
}

/* Agrega aquí cualquier otro estilo personalizado que desees aplicar */
</style>
  