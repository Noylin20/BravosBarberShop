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
    <div class="p- space-y-3 rounded-lg " style="text-align: center; border: 3px solid #85929E; background-color:#E5E8E8 !important ;">
        <p class="text-black-500 font-black">
            Fecha: <span class="font-light">{{ displayDate(appointment.date) }}</span>
            <br><br> Hora: <span class="font-light">{{ appointment.time }}</span>
        </p>

        <p class="text-black-500 font-black">
            Nombre cliente: <span class="font-light">{{ appointment.user.name }}{{ appointment.user.lastname }}</span> 
        </p>
          

        <p class="text-lg font-black">Servicios solicitados en la cita:</p>

        <div v-for="service in appointment.services" >
            <p>{{ service.name }}</p>
            <!-- <p class="text-1xl font-black text-blue-500">{{ formatCurrency(service.price) }}</p> -->
        </div>

        <!-- <p class="text-1xl font-black text-right">
            Total a pagar: <span class="text-blue-600">{{ formatCurrency(appointment.totalAmount) }}</span>
        </p> -->

        
    </div>
</template>

<style>
.bg-light-gray-500 {
  background-color: #dbd9d9; /* Ajusta el valor del color según tu preferencia */
}

.colorTxtD{
  color:#5D6D7E ;
}

.colorCD{
  background-color: #E5E8E8;
}

.colorCS{
  background-color: #2E4053;
}
</style>

  