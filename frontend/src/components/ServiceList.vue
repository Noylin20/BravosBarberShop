<script setup>
import { formatCurrency } from '../helpers';
import { useAppointmentsStore } from '../stores/appointments';
import { ref } from 'vue';

const appointments = useAppointmentsStore();
const showDetails = ref(false);

defineProps({
  service: {
    type: Object
  }
});

const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};
</script>

<template>
  <div
    class="p-4 space-y-7 cursor-default" style=" text-align: center;"
    :class="appointments.isServiceSelected(service._id) ? 'text-black' : 'text-black-600'"
  >
    <p class="text-xl font-bold" style="text-align: center;">{{ service.name }}......{{ formatCurrency(service.price) }}</p>
    <p class="text-l font-bold">Duración: {{service.duration }} minutos</p>
    
    <!-- <button @click="toggleDetails" class="bg-blue-500 text-white px-3 py-1 rounded">Ver más</button> -->
    
    <div class="mt-2">
      <p class="text-sm"> {{ service.description }}</p>
    </div>
<hr>
  </div>
</template>

<style>
.bg-light-gray-500 {
  background-color: #dbd9d9; /* Ajusta el valor del color según tu preferencia */
}
</style>
