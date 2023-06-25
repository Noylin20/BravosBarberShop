
<script setup>
import { inject } from 'vue'
import { reset } from '@formkit/vue';

import AuthAPI from '../../api/AuthAPI'

const toast = inject('toast')

const handleSubmit = async ({ password_confirm, ...formData }) => {
    try {
        const { data } = await AuthAPI.register(formData)
        toast.open({
            message: data.msg,
            type: 'success'
        })
        reset('registerForm')

    } catch (error) {

        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
}

</script>


<template>
    <h1 class="text-4xl font-extrabold text-black text-center mt-10">Crea una cuenta</h1>
    <p class="text-1xl text-black text-center my-3 ">Crea una cuenta en Barbería Bravo´s</p>

    <FormKit id="registerForm" type="form" :actions="false" incomplete-message="No se pudo enviar, revisa las notificaciones"
        @submit="handleSubmit">
        <FormKit type="text" name="name" placeholder="Tu nombre" validation="required||length:3" :validation-messages="{
            required: 'El nombre es obligatorio',
            length: 'El nombre es muy corto'
        }" />

        <FormKit type="text" name="lastName" placeholder="Tus apellidos" validation="required" :validation-messages="{
            required: 'El apellido es obligatorio'
        }" />

        <FormKit type="email" name="email" placeholder="Correo de registro" validation="required||email"
            :validation-messages="{
                required: 'El email es obligatorio',
                email: 'Email no válido'
            }" />

        <FormKit type="password" name="password" placeholder="Constraseña de usuario - Min 8 caracteres"
            validation="required||length:8" :validation-messages="{
                required: 'La contraseña es obligatoria',
                email: 'La contraseña debe contener al menos 8 caracteres'
            }" />

        <FormKit type="password" name="password_confirm" placeholder="Repite tu contraseña" validation="required||confirm"
            :validation-messages="{
                required: 'La contraseña es obligatoria',
                confirm: 'Las contraseñas son diferentes'
            }" />
        <FormKit type="submit">Crear cuenta</FormKit>
    </FormKit>
</template>