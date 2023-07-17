<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../../stores/user';
import NavA from '../navbar/NavAdmin.vue'
const user = useUserStore()

</script>

<template>
        <NavA />
  <div class="">
    <div class="">

      <main>
        <Router-view />
      </main>
    </div>
  </div>
</template>
  