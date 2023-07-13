<script setup>
import { inject } from 'vue'
import { reset } from '@formkit/vue';
import { useBarbersStore } from '../../stores/barbers';

const toast = inject('toast')

const barbers = useBarbersStore()

const handleSubmit = async ({ ...formData }) => {
  barbers.createBarber(formData)
  reset('createForm')
}

</script>


<template>
  <div style="margin: 0 auto; max-width: 800px;">
    <div style="text-align: center; margin-top: 50px;">
      <h2 style="display: inline-block;"><b>Crear nuevo barbero</b></h2>
      <hr style="display: inline-block; width: 70%; vertical-align: middle; margin-left: 10px;">
    </div>

    <div style="margin-top: 20px;">
      <FormKit id="createForm" type="form" :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">
        <table style="width: 100%;">
          <tbody>
            <tr>
              <th style="padding-right: 10px;">
                <label>Nombre:</label>
                <FormKit type="text" name="name" placeholder="Nombre del barbero" validation="required" :validation-messages="{
                  required: 'El nombre es obligatorio'
                }" />
              </th>
              <th style="padding-right: 10px;">
                <label>Apellido:</label>
                <FormKit type="text" name="lastName" placeholder="Apellido del barbero" validation="required" :validation-messages="{
                  required: 'El apellido es obligatorio'
                }" />
              </th>
            </tr>
            <tr>
              <th style="padding-right: 10px;">
                <label>Email:</label>
                <FormKit type="text" name="email" placeholder="Correo del barbero" validation="required" :validation-messages="{
                  required: 'El correo es obligatorio'
                }" />
              </th>
              <th style="padding-right: 10px;">
                <label>Teléfono:</label>
                <FormKit type="text" name="phone" placeholder="Teléfono del barbero" validation="required" :validation-messages="{
                  required: 'El teléfono es obligatorio'
                }" />
              </th>
            </tr>
            <tr>
              <th style="padding-right: 10px;">
                <label>Horario:</label>
                <FormKit type="text" name="scheduleStart" placeholder="Hora de entrada" validation="required" :validation-messages="{
                  required: 'La hora de entrada es obligatoria'
                }" />
              </th>
              <th style="padding-right: 10px;">
                <label></label>
                <FormKit type="text" name="scheduleEnd" placeholder="Hora de salida" validation="required" :validation-messages="{
                  required: 'La hora de salida es obligatoria'
                }" />
              </th>
            </tr>
          </tbody>
        </table>
        <div style="text-align: center; margin-top: 20px;">
          <FormKit style="display: inline-block;" type="submit">Crear barbero</FormKit>
        </div>
      </FormKit>
    </div>
  </div>
</template>
