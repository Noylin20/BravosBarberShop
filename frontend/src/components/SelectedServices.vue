<script setup>
import { useAppointmentsStore } from '../stores/appointments';
import { formatCurrency } from '../helpers';
  
const appointments = useAppointmentsStore()

defineProps({
        service: {
            type:Object
        }
    })
</script>


<template>
   <div class=" rounded-lg p-3 justify-between items-center" style="text-align: center; border: 3px solid #85929E;  background: #E5E8E8;">
    <div>
        <p class="text-2xl font-extrabold text-black">{{ service.name }}</p>
        <p class="text-3xl font-black" style="color: #5D6D7E;">{{ formatCurrency(service.price) }}</p>
    </div>
    <br>
    <div class="flex gap-2 items-center contenedor">
    <button
    type="button"
    class="btn btn-outline-danger bg-red-600 rounded-lg p-3  text-sm uppercase font-black flex-1 md:flex-none"
    @click="appointments.onServiceSelected(service)"
    >
        Eliminar
    </button>
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
</style>