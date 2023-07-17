<script setup>
import { inject } from 'vue'
import { reset } from '@formkit/vue';
import { useServicesStore } from '../../stores/services';

const toast = inject('toast')

const services = useServicesStore()

const handleSubmit = async ({ ...formData }) => {
  services.createService(formData)
  reset('createForm')
}

</script>


<template>
  <div style="position: relative; top: 50px; overflow: hidden;">
    <div style="text-align: center;" class="txtT">
      <h2><b>Crear nuevo servicio</b></h2>
      <hr style="position: relative; width: 70%; margin-left: 15%;">
    </div>

    <div class="txtP">
      <FormKit id="createForm" type="form" :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">
        <table style="width: 60%; margin-left: 400px; margin-right: 400px !important;">
          <tbody>
            <tr>
              <th>
                <label>Nombre:</label>
                <FormKit type="text" name="name" placeholder="Nombre del servicio" validation="required"
                  :validation-messages="{
                    required: 'El nombre es obligatorio'
                  }" />
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th style="position: relative; top: 60px;">
                <label>Descripción:</label>
                <FormKit type="textarea" rows="6" cols="35" name="description"
                  placeholder="Introduzca la descripción del servicio" validation="required" :validation-messages="{
                    required: 'La descripción es obligatoria'
                  }" />
              </th>
            </tr>
            <tr>
              <th style="position: relative; bottom: 50px;">
                <label>Precio:</label>
                <FormKit type="number" name="price" placeholder="Precio establecido al servicio" validation="required"
                  :validation-messages="{
                    required: 'El precio es obligatorio'
                  }" />

              </th>
            </tr>
            <tr>
              <th style="position: relative; bottom: 50px;">
                <label>Duración:</label>
                <FormKit type="number" name="duration" placeholder="Duración estimada en minutos del servicio"
                  validation="required" :validation-messages="{
                    required: 'La duración del servicio es obligatoria'
                  }" />

              </th>
            </tr>
          </tbody>
        </table>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <FormKit style="background: none;" type="submit"><button type="submit"
              class="btn btn-outline-primary btnT2">Crear servicio</button></FormKit>
          <RouterLink :to="{ name: 'list-services' }" class="btn btn-outline-success btnT2"
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

