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
    <div class="txtP">
      <FormKit id="createForm" type="form" :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">
        <table style="width: 60%; margin-left: 400px; margin-right: 400px !important;">
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
          <FormKit type="submit" style="background:none;">
            <button type="submit"
              class="btn btn-outline-primary btnT2">Crear barbero</button>
           </FormKit>
          <RouterLink :to="{ name: 'barbers-list' }"
            class="btn btn-outline-success btnT2"
            onclick="this.disabled = true">
            Regresar
          </RouterLink>
        </div>
      </FormKit>
    </div>
  </div>
</template>
<style>
.btnT2 {
  width: 220px;
  height: 55px;
}

@media screen and (max-width: 767px) {
  .txtP{
    font-size: 13px;
  }

  table {
    position: relative;
    width: 95% !important;
    margin-left: 22px !important;
    right: 12px !important;

  }

  .txtT {
    font-size: 13px !important;
  }

  .btnT2 {
    margin-top: -30px;
    font-size: 12px !important;
    width: 150px;
    height: 40px;
  }
}
</style>