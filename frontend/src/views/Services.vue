<script setup>
import ServiceList from '../components/ServiceList.vue';
import { useServicesStore } from '../stores/services';
import Nav from '../views/navbar/Nav.vue'

const store = useServicesStore();
</script>

<template>
  <Nav />
  <div class="textcenter">
    <h3 class="flex-1 text-center p-4 uppercase font-extrabold hover:text-black">Nuestros servicios</h3>
    <hr>
    <p class="text-black text-lg mt-5">A continuación se muestran los servicios disponibles en nuestra barbería</p>
  </div>
  <div class="grid grid-cols-2 gap-3 mt-5" style="background-color: rgba(0,0,0,0.1); border-radius: 5px;">
    <ServiceList v-for="service in store.services" :key="service._id" :service="service" :disabled="true" />
  </div>
</template>
<style>
.textcenter {
  position: relative;
  text-align: center;
}
</style>