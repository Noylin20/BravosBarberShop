<script setup>
import { useUserStore } from '../../stores/user'
const user = useUserStore()
</script>

<template>
    <h2 class="text-4xl font-extrabold text-black mt-18">Mis citas</h2>
<p class="text-black text-lg mt-5">A continuación podrás administrar tus próximas citas</p>
</template>