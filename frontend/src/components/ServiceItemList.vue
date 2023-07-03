<script setup>
import {formatCurrency} from '../helpers'
import {useAppointmentsStore} from '../stores/appointments'

const appointments = useAppointmentsStore()

defineProps({
    service: {
        type:Object
    }
})
</script>


<template>
   <div
   class="p-5 space-y-5 rounded-lg cursor-pointer "
  :class="appointments.isServiceSelected(service._id) ? 'bg-blue-500 text-white': ''"
   @click="appointments.onServiceSelected(service)"
   >
   
    <tr>
        <td class="text-2xl font-light">{{service.name}}</td>
        <td class="text-2xl font-black">{{formatCurrency(service.price)}}</td>
    </tr>

</div>
   
</template>