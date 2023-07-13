
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
    <div class="fsize">
        <div class="img_AU">
            <div class="center_Txt">
                <h1 class="text-5xl font-bold  text-center mt-10">CREA UNA CUENTA</h1>
                <p class="text-xl text-center my-3">Crea una cuenta en Barbería Bravo´s</p>
            </div>
        </div>

        <div class="mx-auto  lg:w-3/12" style="position: relative;top:50px;">
            <FormKit id="registerForm" type="form" :actions="false"
                incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">
                <label><b>Nombre:</b></label>
                <FormKit type="text" name="name" placeholder="Tu nombre" validation="required||length:3"
                    :validation-messages="{
                        required: 'El nombre es obligatorio',
                        length: 'El nombre es muy corto'
                    }" />

                <label><b>Apellidos:</b></label>
                <FormKit type="text" name="lastName" placeholder="Tus apellidos" validation="required" :validation-messages="{
                    required: 'El apellido es obligatorio'
                }" />

                <label><b>Correo:</b></label>
                <FormKit type="email" name="email" placeholder="Correo de registro" validation="required||email"
                    :validation-messages="{
                        required: 'El email es obligatorio',
                        email: 'Email no válido'
                    }" />

                <label><b>Contraseña:</b></label>
                <FormKit type="password" name="password" placeholder="Constraseña de usuario - Min 8 caracteres"
                    validation="required||length:8" :validation-messages="{
                        required: 'La contraseña es obligatoria',
                        email: 'La contraseña debe contener al menos 8 caracteres'
                    }" />
                <label><b>Confirmar contraseña:</b></label>
                <FormKit type="password" name="password_confirm" placeholder="Repite tu contraseña"
                    validation="required||confirm" :validation-messages="{
                        required: 'La contraseña es obligatoria',
                        confirm: 'Las contraseñas son diferentes'
                    }" />
                <FormKit type="submit" style="background-color: #394A5A;">Crear cuenta</FormKit>
            </FormKit>
        </div>
    </div>
</template>

<style>
.img_AU {
    position: relative;
    top: -40px;
    width: 100%;
    height: 350px;
    background-image: url('/img/ExteriorIB.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.center_Txt {
    top: 30%;
    text-align: center;
    position: relative;
    padding-left: 50px;
    padding-right: 50px;
    color: white;
    font-size: 3.4rem;
}
.fsize{
  font-size: large;
}
</style>