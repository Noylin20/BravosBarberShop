<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../../stores/user';
import NavU from '../navbar/NavUser.vue'
const user = useUserStore()

</script>


<template>
    <NavU />
    <main>

        <RouterView />
    </main>
</template>