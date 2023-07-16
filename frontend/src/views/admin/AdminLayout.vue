<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../../stores/user';
import NavA from '../navbar/NavAdmin.vue'
const user = useUserStore()

</script>

<template>
        <NavA />
  <div class="flex">
    <!-- <div class="w-1/9">
      Aquí se encuentra el menú

      <nav>
        <div class="bg-gray-300 rounded-lg border p-6">
          <ul class="space-y-4">
            <li>
                    <RouterLink to="/my-appointments" class="text-blue-200 hover:text-blue-600">Agenda</RouterLink>
                  </li>
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

    </div> -->
    <div class="w-3/4 p-8">

      <main class="space-v-6">
        <Router-view />
      </main>
    </div>
  </div>
</template>
  