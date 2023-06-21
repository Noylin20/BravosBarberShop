<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="md:flex h-screen">
    <div class="h-64 md:h-auto bg-cover bg-center md:w-1/3"></div>
    <RouterView/>
  </div>
</template>
