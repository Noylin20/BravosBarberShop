<script setup>
import { inject } from 'vue'

import { useRouter } from 'vue-router'
import AuthAPI from '../../api/AuthAPI'

const toast = inject('toast')
const router = useRouter()

const handleSubmit = async (formData) => {
  //el usuario inicia sesión, almacena el token y se redirige a sus citas
  try {
    const { data: { token } } = await AuthAPI.login(formData)
    localStorage.setItem('AUTH_TOKEN', token)
    router.push({ name: 'my-appointments' })
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
        <h1 class="text-5xl font-bold  text-center mt-10">INICIAR SESIÓN</h1>
        <p class="text-xl text-center my-3 ">Inicia sesión en Bravo´s Barbería</p>
      </div>
    </div>

    <div class="mx-auto  lg:w-3/12" style="position: relative;top:50px;">
      <FormKit id="loginForm" type="form" :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">

        <label><b>Correo:</b></label>
        <FormKit type="email" name="email" placeholder="Correo de usuario" validation="required||email" :validation-messages="{
          required: 'El email es obligatorio',
          email: 'Email no válido'
        }" />
        <br>
        <label><b>Contraseña:</b></label>
        <FormKit type="password" name="password" placeholder="Contraseña de usuario" validation="required"
          :validation-messages="{
            required: 'La contraseña es obligatoria'
          }" />

        <FormKit type="submit" style="background-color: #394A5A;">Iniciar sesión</FormKit>
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
