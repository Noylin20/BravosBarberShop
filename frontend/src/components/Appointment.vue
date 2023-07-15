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
    <div class="bg-gray p-5 space-y-3 rounded-lg">
        <p class="text-black-500 font-black">
            Fecha: <span class="font-light">{{ displayDate(appointment.date) }}</span>
            Hora: <span class="font-light">{{ appointment.time }}</span>
        </p>

        <p class="text-lg font-black">Servicios solicitados en la cita</p>

        <div v-for="service in appointment.services" :key="service.name">
            <p>{{ service.name }}</p>
            <p class="text-1xl font-black text-blue-500">{{ formatCurrency(service.price) }}</p>
        </div>

        <p class="text-1xl font-black text-right">
            Total a pagar: <span class="text-blue-600">{{ formatCurrency(appointment.totalAmount) }}</span>
        </p>

        <div class="flex gap-2 items-center">
            <RouterLink 
                :to="{name: 'edit-appointment', params: { id: appointment._id } }"
                class="no-underline bg-green-600 rounded-lg p-3 text-white text-sm uppercase font-black flex-1 md:flex-none">
                <i class="fas fa-pencil-alt mr-2"></i>Editar cita
            </RouterLink>
            <button 
                class="bg-red-600 rounded-lg p-3 text-white text-sm uppercase font-black flex-1 md:flex-none"
                @click="appointments.cancelAppointment(appointment._id)"
                >
                <i class="fas fa-ban mr-2"></i>Cancelar cita
            </button>

        </div>
    </div>
</template>
  

  
<style scoped>
.bg-gray {
    background-color: #f3f4f6;
}

.text-black-500 {
    color: #374151;
}

.font-black {
    font-weight: 900;
}

.font-light {
    font-weight: 300;
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
  