
<script setup>
import ServiceItem from '../../components/ServiceItem.vue';
import {useServicesStore} from '../../stores/services'

const store = useServicesStore()

</script>


<template>
 <div class="mi-div">
  <br>
  <h2 class="text-2xl font-extrabold text-black mt-18 mb-6 text-left" style="text-align: center;">Seleccione los servicios que desea recibir</h2>
  <br>
</div>


 
<div class=" grid grid-cols-4 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 gap-3 mt-10 mi-div">
  
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


