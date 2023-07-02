<script setup>
import ServiceList from '../components/ServiceList.vue';
import { useServicesStore } from '../stores/services';

const store = useServicesStore();
</script>

<template>
  <h2 class="text-4xl font-extrabold text-black mt-18">Nuestros servicios</h2>
  <p class="text-black text-lg mt-5">A continuación se muestran los servicios disponibles en nuestra barbería</p>

  <div class="grid grid-cols-2 gap-5 mt-5">
    <ServiceList
      v-for="service in store.services"
      :key="service._id"
      :service="service"
      :disabled="true"
    />
  </div>
</template>
