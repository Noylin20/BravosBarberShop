<script setup>
import { RouterLink } from 'vue-router';
import{useUserStore} from '../../stores/user';
const user = useUserStore()

</script>


<template>

    
    <div class="flex justify-between">
    
        <!-- <h1 class="text-2xl lg:text-6xl font-black text-black">Barbería Bravos</h1> -->
        <div class="flex flex-col space-y-5">
            <!-- <div class="flex gap-2 items-center">
                <div class="flex justify-end">
             
                <p class="text-black text-right">Hola: {{ user.getUserName }}</p>

                <button
                type="button"
                class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                @click="user.logout">
                Cerrar sesión
                </button>
            </div> </div> -->

             <nav class="flex gap-2 items-center justify-end">
                <RouterLink
                :to="{name:'my-appointments'}"
                class="p-2 text-black-200 uppercase text-xs font-black rounded-lg bg-blue-300">
                    Mis citas
                </RouterLink>

                <RouterLink
                :to="{name:'new-appointment'}"
                class="p-2 text-black-200 uppercase text-xs font-black rounded-lg bg-blue-300">
                Nueva cita</RouterLink>

            </nav>

         </div>
    </div>
    <main>

        <RouterView/>
    </main>
</template>