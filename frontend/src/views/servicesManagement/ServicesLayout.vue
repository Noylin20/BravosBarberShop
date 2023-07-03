<script setup>
import { useServicesStore } from '../../stores/services'
import { RouterLink } from 'vue-router';
const store = useServicesStore()

</script>

<template>

        <div>
            <nav class="flex gap-2 items-center justify-end">
                <RouterLink :to="{ name: 'services-list' }"
                    class="p-2 text-black-200 uppercase text-xs font-black rounded-lg">
                    Lista de servicios
                </RouterLink>

                <RouterLink :to="{ name: 'create-service' }"
                style="border: 1px solid; border-color: blue;"
                    class="p-2 text-black-200 uppercase text-xs font-black rounded-lg ">
                    Crear Servicios
                </RouterLink>
            </nav>
        </div>
    <main>
        <RouterView />
    </main>
</template>
