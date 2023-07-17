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
  <div style="position: relative; top: 50px; overflow: hidden; ">
    <div style="text-align: center;">
      <h2><b>Crear nuevo barbero</b></h2>
      <hr style="position: relative; width: 70%; margin-left: 15%;">
    </div>
    <br>
    <div>
      <FormKit id="createForm" type="form" :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">
        <table style="width: 80%; display: grid; place-items: center; margin-left: 8%;">
          <tbody>
            <tr>
              <th style="padding-right: 10px; position: relative; bottom: 0px;">
                <label>Nombre:</label>
                <FormKit type="text" name="name" placeholder="Nombre del barbero" validation="required"
                  :validation-messages="{
                    required: 'El nombre es obligatorio'
                  }" />
              </th>
              <th style="padding-left: 10px; position: relative; bottom: 0px;">
                <label>Apellido:</label>
                <FormKit type="text" name="lastName" placeholder="Apellido del barbero" validation="required"
                  :validation-messages="{
                    required: 'El apellido es obligatorio'
                  }" />
              </th>
            </tr>
            <tr>
              <th style="padding-right: 10px; position: relative; bottom: 0px;">
                <label>Correo electrónico:</label>
                <FormKit type="text" name="email" placeholder="Correo electrónico" validation="required"
                  :validation-messages="{
                    required: 'El correo es obligatorio'
                  }" />

              </th>
              <th style="padding-left: 10px; position: relative; bottom: 0px;">
                <label>Teléfono:</label>
                <FormKit type="number" name="phone" placeholder="Número de teléfono" validation="required"
                  :validation-messages="{
                    required: 'El número de teléfono es obligatorio'
                  }" />

              </th>
            </tr>
            <tr>
              <th style="padding-right: 10px; position: relative; bottom: 0px;">
                <label>Horario del barbero:</label>
                <FormKit type="time" name="scheduleStart" placeholder="Horario de entrada" validation="required"
                  :validation-messages="{
                    required: 'La hora de inicio es obligatoria'
                  }" />
              </th>
              <th style="padding-left: 10px; position: relative; bottom: 0px;">
                <label>Hora de salida</label>
                <FormKit type="time" name="scheduleEnd" placeholder="Horario de salida" validation="required"
                  :validation-messages="{
                    required: 'La hora de salida es obligatoria'
                  }" />
              </th>
            </tr>

          </tbody>
        </table>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <FormKit type="submit"
            style="width: 100%; height: 60px; font-size: 20px; background: none; border: 1px solid #0780FF; color: #0780FF !important;">
            Crear barbero</FormKit>
          <RouterLink :to="{ name: 'barbers-list' }" style="width: 160px; height: 50px; margin-top: 1%;"
            class="btn btn-outline-success no-underline p-2 text-center font-extrabold uppercase text-xs rounded-lg "
            onclick="this.disabled = true">
            Regresar
          </RouterLink>
        </div>
      </FormKit>
    </div>
  </div>
</template>