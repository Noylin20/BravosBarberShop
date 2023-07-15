<script setup>
import { useRoute } from 'vue-router'
import Nav from '../navbar/Nav.vue'

const route = useRoute()

const authRoutes = [
    { name: 'register', text: 'Crear una cuenta' },
    { name: 'login', text: 'Iniciar sesión' },
    { name: 'forgot-password', text: 'Olvide mi contraseña' }
]
</script>


<template>
    <Nav />
    <div >
        <RouterView />

        <div class="mt-10 flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0 mx-auto  lg:w-3/12"
            style="position: relative;top: 50px; background: none;">
            <RouterLink v-for="authRoute in authRoutes" class="uppercase font-bold text-black" :to="{ name: authRoute.name }"
                :class="{ 'hidden': route.name === authRoute.name }">{{ authRoute.text }}</RouterLink>
    </div>
    </div>
</template>