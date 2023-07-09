<script setup>
//import { RouterLink } from 'vue-router';
import { useUserStore } from '../../stores/user';
const user = useUserStore()

</script>


<template>
    <div class="flex justify-between">

        <!-- <h1 class="text-2xl lg:text-6xl font-black text-black">Barbería Bravos</h1> -->
       <!-- <div class="flex justify-end"> <div class="flex flex-col space-y-5">
            <div class="flex gap-2 items-center">
               

                <p class="text-black text-right">Hola: {{ user.getUserName }}</p>

                <button type="button"
                    class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                    @click="user.logout">
                    Cerrar sesión
                </button>
            </div></div>



        </div> -->
    </div>
    <main class="space-v-6">

        <RouterView />
    </main>
</template>