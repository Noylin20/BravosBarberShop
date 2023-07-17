<script setup>
import { formatCurrency } from '../helpers'
import { useAppointmentsStore } from '../stores/appointments'

const appointments = useAppointmentsStore()

defineProps({
  service: {
    type: Object
  }
})
</script>


<template>
  <div class="p-5 space-y-2 rounded-lg" style="text-align: center; border: 3px solid #85929E; "
    :class="appointments.isServiceSelected(service._id) ? 'colorCS text-white' : 'colorCD'"
    @click="appointments.onServiceSelected(service)">

    <p class="text-2xl ">{{ service.name }}</p>
    <p class="text-2xl font-black " :class="appointments.isServiceSelected(service._id) ? 'text-white' : 'colorTxtD'">
      {{ formatCurrency(service.price) }}</p>

  </div>
</template>
<style>
.colorTxtD{
  color:#5D6D7E ;
}

.colorCD{
  background-color: #E5E8E8;
}

.colorCS{
  background-color: #2E4053;
}

.bg-light-gray-500 {
  background-color: #dbd9d9;
  /* Ajusta el valor del color según tu preferencia */
}

.mi-div {
  margin-left: 100px;
  margin-right: 100px;
}
</style>