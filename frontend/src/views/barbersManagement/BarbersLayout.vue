<script setup>
import { useBarbersStore } from '../../stores/barbers'
import { RouterLink } from 'vue-router';
const store = useBarbersStore()

</script>

<template>

        <div>
            <nav class="flex gap-2 items-center justify-end">
                <RouterLink :to="{ name: 'barbers-list' }"
                    class="p-2 text-black-200 uppercase text-xs font-black rounded-lg">
                    Lista de barberos
                </RouterLink>

                <RouterLink :to="{ name: 'create-barber' }"
                style="border: 1px solid; border-color: blue;"
                    class="p-2 text-black-200 uppercase text-xs font-black rounded-lg ">
                    Crear barbero
                </RouterLink>
            </nav>
        </div>
    <main>
        <RouterView />
    </main>
</template>
