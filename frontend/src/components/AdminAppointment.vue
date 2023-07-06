<script setup>
import { displayDate } from '../helpers/date'
import { formatCurrency } from '../helpers'

defineProps({
    appointment: {
        type: Object
    }
})

</script>


<template>
    <div class="bg-gray p-5 space-y-3 rounded-lg bg-light-gray-500">
        <p class="text-black-500 font-black">
            Fecha: <span class="font-light">{{ displayDate(appointment.date) }}</span>
            Hora: <span class="font-light">{{ appointment.time }}</span>
        </p>

        <p class="text-black-500 font-black">
            Nombre cliente: <span class="font-light">{{ appointment.user.name }}</span> 
            <br> <br>Email: <span class="font-light">{{ appointment.user.email }}</span> 
        </p>
          

        <p class="text-lg font-black">Servicios solicitados en la cita</p>

        <div v-for="service in appointment.services" >
            <p>{{ service.name }}</p>
            <p class="text-1xl font-black text-blue-500">{{ formatCurrency(service.price) }}</p>
        </div>

        <p class="text-1xl font-black text-right">
            Total a pagar: <span class="text-blue-600">{{ formatCurrency(appointment.totalAmount) }}</span>
        </p>

        
    </div>
</template>

<style>
.bg-light-gray-500 {
  background-color: #dbd9d9; /* Ajusta el valor del color según tu preferencia */
}
</style>

  