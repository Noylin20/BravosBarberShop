<script setup>
import AdminUser from '../../components/AdminUser.vue';
import { useUserStore } from '../../stores/user'

const user = useUserStore()

</script>


<template>
    <p class="text-black text-lg mt-5">

        Lista de barberos 
    </p>
    <p v-if="user.loading" class="text-black text-2xl text-center mt-4">
        Cargando...
    </p>


    <div v-else>
        <div class="flex justify-end mb-4">
            <div class="mr-4">
    <RouterLink :to="{ name: 'admin-createBarber' }"
        class="p-2 text-black-200 uppercase text-xs font-black rounded-lg hover:bg-blue-500 hover:text-white no-underline border border-blue-500">
        Crear barbero
    </RouterLink>
</div>
<div class="mr-4">
    <RouterLink :to="{ name: 'admin-appointments' }"
        class="p-2 text-black-200 uppercase text-xs font-black rounded-lg hover:bg-blue-500 hover:text-white no-underline border border-blue-500">
        Regresar
    </RouterLink>
</div>

        </div>
        <div class="grid grid-cols-1 gap-5 mt-10">
            <AdminUser v-for="user in user.getUser" :key="user._id"
                :user="user" />
        </div>
    </div>
</template>