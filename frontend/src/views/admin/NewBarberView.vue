
<script setup>
import { inject } from 'vue'
import { reset } from '@formkit/vue';

import AuthAPI from '../../api/AuthAPI'

const toast = inject('toast')

const handleSubmit = async ({ password_confirm, ...formData }) => {
    try {
        const updatedFormData = {
            ...formData,
            validateAdmin: true
        };

        const { data } = await AuthAPI.register(updatedFormData);

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
  <div class="flex justify-end">
    <div class="mr-4"><br>
        <RouterLink :to="{ name: 'admin-appointments' }" style="border: 1px solid; border-color: blue;"
        class="p-2 text-black-200 uppercase text-xs font-black rounded-lg hover:bg-blue-500 hover:text-white no-underline border border-blue-500">
            Regresar
        </RouterLink>
    </div>
</div> 

    <h1 class="text-4xl font-extrabold text-black text-center mt-10">Crea un barbero</h1>
    <p class="text-1xl text-black text-center my-3 ">Crear cuenta para un barbero</p>
   
    <FormKit id="registerForm" type="form" :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">


        <div class="flex justify-center">


            <div class="w-2/3">
                <div class="flex mb-4">

                    <div class="w-1/2 mr-2">
                        <FormKit type="text" name="name" placeholder="Nombre barbero" validation="required||length:3"
                            :validation-messages="{
                                required: 'el nombre es obligatorio',
                                length: 'El nombre es muy corto'
                            }" />
                    </div>
                    <div class="w-1/2">
                        <FormKit type="text" name="lastName" placeholder="Apellidos" validation="required"
                            :validation-messages="{
                                required: 'el apellido es obligatorio'
                            }" />
                    </div>
                </div>
                <div class="flex mb-4">
                    <div class="w-1/2 mr-2">
                        <FormKit type="password" name="password" placeholder="Contraseña - Min 8 caracteres"
                            validation="required||length:8" :validation-messages="{
                                required: 'la contraseña es obligatoria',
                                length: 'La contraseña debe contener al menos 8 caracteres'
                            }" />
                    </div>
                    <div class="w-1/2">
                        <FormKit type="password" name="password_confirm" placeholder="Repite la contraseña"
                            validation="required||confirm" :validation-messages="{
                                required: 'la contraseña es obligatoria',
                                confirm: 'Las contraseñas son diferentes'
                            }" />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <div class="w-2/3">
                <div class="mb-4">
                    <FormKit type="email" name="email" placeholder="Correo de registro" validation="required||email"
                        :validation-messages="{
                            required: 'el email es obligatorio',
                            email: 'Email no válido'
                        }" />
                </div>
                <p class="text-1xl text-black text-center my-3 ">Ingrese el horario</p>
                <div class="flex mb-4">

                    <div class="w-1/2 mr-2">

                        <FormKit type="text" name="horarioE" placeholder="Entrada - formato 00:00 am" validation="required"
                            :validation-messages="{
                                required: 'el horario es obligatorio'
                            }" />
                    </div>
                    <div class="w-1/2">
                        <FormKit type="text" name="horarioS" placeholder="Salida - formato 00:00 pm" validation="required"
                            :validation-messages="{
                                required: 'el horario es obligatorio'
                            }" />
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <FormKit type="submit">Crear cuenta para barbero</FormKit>
        </div>
    </FormKit>
</template>


  