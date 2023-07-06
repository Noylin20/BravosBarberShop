<script setup>
import {inject} from 'vue'
import AuthAPI from '../../api/AuthAPI';
import {reset} from '@formkit/core'


const toast = inject('toast')
const handleSubmit = async ({ email }) => {
    try {
        const { data } = await AuthAPI.forgotPassword({ email })
        toast.open({
        message: data.msg,
        type: 'success'
       })
       reset('forgotPassword')
    } catch (error) {
       toast.open({
        message: error.response.data.msg,
        type: 'error'
       })
    }
}
</script>
<template>
    <div>
        <h1 class="text-4xl font-extrabold text-black text-center mt-10">Olvide mi constraseña</h1>
        <p class="text-1xl text-black text-center my-3 ">Recupera el acceso a tu cuenta</p>

        <FormKit id="forgotPassword" type="form" :actions="false"
            incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">

            <FormKit type="email" name="email" placeholder="Correo de usuario" validation="required||email"
                :validation-messages="{
                    required: 'El email es obligatorio',
                    email: 'Email no válido'
                }" />
            <FormKit type="submit">Enviar instrucciones</FormKit>


        </FormKit>
    </div>
</template>