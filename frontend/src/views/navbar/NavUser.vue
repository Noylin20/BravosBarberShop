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
                            <h1 class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <i class="fas fa-cut"></i> Bravo´s Barbería</h1>
                        </RouterLink>
                        <!-- <img class="h-8 w-8" src="/logo.png" alt="Logo"> -->
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <RouterLink to="/reservaciones"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <i class="fas fa-list-alt mr-2"></i> Mis citas</RouterLink>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <RouterLink to="/reservaciones/nueva"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <i class="fas fa-calendar-plus mr-2"></i> Nueva cita</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="ml-10 flex items-baseline space-x-4">
                    <p class="text-white text-right"> <i class="fas fa-user mr-2"></i> {{ user.getUserName }}</p>
                    <button type="button" class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg" @click="user.logout">
                    <i class="fas fa-sign-out-alt"></i>
                    Cerrar sesión
                    </button>

                </div>
            </div>
        </div>
    </nav>
</template>