
<script setup>
import ServiceItem from '../../components/ServiceItem.vue';
import {useServicesStore} from '../../stores/services'

const store = useServicesStore()

</script>


<template>
 <div class="mi-div">
  <h2 class="text-2xl font-extrabold text-black mt-18 mb-6 text-left">Seleccione los servicios que desea recibir</h2>

</div>


 
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4">
   <ServiceItem
    v-for="service in store.services"
    :key="service._id"
    :service="service"
    class="text-sm-bold col-span-2"
  /> 
</div>


</template>
<style>

.mi-div {
  margin-left: 100px;
  margin-right: 100px;
}
</style>


