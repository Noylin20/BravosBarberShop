<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../../stores/user';
const user = useUserStore()

</script>

<template>
    <div class="flex">
      <div class="w-1/4">
        <!-- Aquí se encuentra el menú -->
        <nav>
          <ul>
            <!-- <li>
              <RouterLink to="/my-appointments">Agenda</RouterLink>
            </li> -->
             <li>
              <RouterLink :to="{ name: 'admin-calendar' }">Calendario de citas</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'admin-listBarber' }">Administrar barberos</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'list-services' }">Administrar servicios</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'admin-appointments' }">Ver todas las citas</RouterLink>
            </li>
           
          </ul>
        </nav>
      </div>
      <div class="w-3/4">
        <!-- Aquí se encuentra el contenido principal -->
        <div class="flex justify-end">
          <div class="flex flex-col space-y-5">
            <div class="flex justify-end">
              <p class="text-black text-right mr-2">Hola: {{ user.getUserName }}</p>
              <button
                type="button"
                class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                @click="user.logout"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
        <main class="space-v-6">
          <router-view />
        </main>
      </div>
    </div>
  </template>
  