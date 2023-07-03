<script setup>
import { inject } from 'vue'
import { reset } from '@formkit/vue';

import ServiceAPI from '../../api/ServicesAPI'

const toast = inject('toast')

const handleSubmit = async ({ ...formData }) => {
    try {
        const { data } = await ServiceAPI.createService(formData)
        toast.open({
            message: data.msg,
            type: 'success'
        })
        reset('createForm')

    } catch (error) {

        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
}

</script>

<template>
    <div style="position: relative; top:60px;">
        <div style="margin-left:100px;">
            <h2><b>Crear nuevo servicio</b></h2>
        </div>
        <br/><br/>
        <div style="position: relative; margin-left: 10%; width: 80%;" >
            <FormKit id="createForm" type="form" :actions="false"
                incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">
                <FormKit type="text" name="name" placeholder="Nombre" validation="required"
                    :validation-messages="{
                        required: 'El nombre es obligatorio'
                    }" />
                <FormKit type="text" name="description" placeholder="Descripción" validation="required"
                    :validation-messages="{
                        required: 'La descripción es obligatoria'
                    }" />
                <FormKit type="number" name="price" placeholder="Precio" validation="required"
                    :validation-messages="{
                        required: 'El precio es obligatorio'
                    }" />
                    <FormKit style="margin-left: 30%; width: 45%;" type="submit">Crear producto</FormKit>
            </FormKit>
        </div>
    </div>
</template>