<script setup>
import AdminAppointment from '../../components/AdminAppointment.vue';
import { useUserStore } from '../../stores/user'

const user = useUserStore()
</script>

<template>

<div style="margin-left: 100px; margin-right: 100px; margin-top: 30px;">
     
    <div style="text-align: center;">
        <h2><b>Citas agendadas</b></h2>
      </div>

      <hr style="width: 70%; margin-left: 15%;">
      <br /><br />
      
    <p v-if="user.loading" class="text-black text-2xl text-center mt-4">
        Cargando...
    </p>

    <div v-else>
        <div class="flex justify-end mb-4">
            <div class="mr-4">
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <AdminAppointment
                    v-for="appointment in user.userAppointments"
                    :key="appointment._id"
                    :appointment="appointment"
                    class="bg-white rounded-md shadow-md p-6"
                />
            </div>
    </div>

</div>
</template>
