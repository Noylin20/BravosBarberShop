
<script setup>
import ServiceItem from '../../components/ServiceItem.vue';
import {useServicesStore} from '../../stores/services'

const store = useServicesStore()

</script>


<template>
 <div class="mi-div">
  <h2 class="text-2xl font-extrabold text-black mt-18 mb-6 text-left">Servicios</h2>
 <p class="text-black text-lg mt-5 text-left">A continuación elige al menos un servicio para tu cita</p>

</div>


 
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
   <ServiceItem
    v-for="service in store.services"
    :key="service._id"
    :service="service"
    class="text-sm-bold col-span-1"
  /> 
</div>


</template>
<style>

.mi-div {
  margin-left: 100px;
  margin-right: 100px;
}
</style>


