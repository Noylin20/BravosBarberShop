<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../../stores/user';
const user = useUserStore()

</script>

<template>
    <div class="flex">
      <div class="w-1/9">
        <!-- Aquí se encuentra el menú -->
       
       



        <nav>
          <div class="bg-gray-300 rounded-lg border p-6">
                <ul class="space-y-4">
                  <!-- <li>
                    <RouterLink to="/my-appointments" class="text-blue-200 hover:text-blue-600">Agenda</RouterLink>
                  </li> -->
                  <li>
                    <RouterLink :to="{ name: 'admin-calendar' }" class="text-blue-500 hover:text-blue-800">
                      <i class="fas fa-calendar-alt mr-2"></i>Calendario de citas
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'admin-listBarber' }" class="text-blue-500 hover:text-blue-800">
                      <i class="fas fa-users mr-2"></i>Administrar barberos
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'list-services' }" class="text-blue-500 hover:text-blue-800">
                      <i class="fas fa-cogs mr-2"></i>Administrar servicios
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'admin-appointments' }" class="text-blue-500 hover:text-blue-800">
                      <i class="fas fa-list-alt mr-2"></i>Ver todas las citas
                    </RouterLink>
                  </li>
                </ul>
           </div>
        </nav>







      </div>
      <div class="w-3/4 p-8">
        <!-- Aquí se encuentra el contenido principal -->
        <div class="flex justify-end ">
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
  