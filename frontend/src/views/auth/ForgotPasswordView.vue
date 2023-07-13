<script setup>
import { inject } from 'vue'
import AuthAPI from '../../api/AuthAPI';
import { reset } from '@formkit/core'


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
    <div class="fsize">
        <div class="img_AU">
            <div class="center_Txt">
                <h1 class="text-5xl font-bold  text-center mt-10">OLVIDÉ MI CONTRASEÑA</h1>
                <p class="text-xl text-center my-3">Recupera el acceso a tu cuenta</p>
            </div>
        </div>
        <div class="mx-auto  lg:w-3/12" style="position: relative;top:50px;">
            <FormKit id="forgotPassword" type="form" :actions="false"
                incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">

                <label><b>Correo:</b></label>
                <FormKit type="email" name="email" placeholder="Correo de usuario" validation="required||email"
                    :validation-messages="{
                        required: 'El email es obligatorio',
                        email: 'Email no válido'
                    }" />
                <FormKit type="submit" style="background-color: #394A5A;">Enviar instrucciones</FormKit>

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
</style>