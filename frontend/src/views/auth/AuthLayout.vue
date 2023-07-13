


<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const authRoutes = [
    { name: 'register', text: 'Crear una cuenta' },
    { name: 'login', text: 'Iniciar sesión' },
    { name: 'forgot-password', text: 'Olvide mi contraseña' }
]
</script>


<template>
    <div class="mx-auto ">
        <RouterView />

        <nav class="mt-10 flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0 mx-auto  lg:w-3/12"
            style="position: relative;top: 50px;">
            <RouterLink v-for="authRoute in authRoutes" class="uppercase font-bold text-black" :to="{ name: authRoute.name }"
                :class="{ 'hidden': route.name === authRoute.name }">{{ authRoute.text }}</RouterLink>
        </nav>
    </div>
</template>