<script setup>
import { useUserStore } from '../../stores/user.js';

const user = useUserStore();
</script>

<template>
    <nav class="bg-gray-800">
        <div class=" mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <RouterLink to="/"
                            class="no-underline text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            <h1 class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bravo´s
                                Barbería</h1>
                        </RouterLink>
                        <!-- <img class="h-8 w-8" src="/logo.png" alt="Logo"> -->
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <!-- <RouterLink to="/"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio
                        </RouterLink> -->
                            <RouterLink to="/about"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Acerca
                                de nosotros
                            </RouterLink>
                            <RouterLink to="/contact"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Contacto</RouterLink>
                            <RouterLink to="/branch"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Sucursales</RouterLink>
                            <RouterLink to="/services"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Servicios</RouterLink>
                            <RouterLink to="/reservaciones"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Iniciar sesión</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="ml-10 flex items-baseline space-x-4" v-if="user.isLoggedIn">
                    <p class="text-white text-right">Hola: {{ user.getUserName }}</p>
                    <button type="button"
                        class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                        @click="user.logout">
                        Cerrar sesión
                    </button>
                </div>


            </div>
        </div>
    </nav>
</template>