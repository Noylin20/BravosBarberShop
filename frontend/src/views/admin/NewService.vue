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
    <div style="text-align: center;">
      <h2><b>Crear nuevo servicio</b></h2>
      <hr style="position: relative; width: 70%; margin-left: 15%;">
    </div>

    <div>
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
          <FormKit
            style="width: 100%; height: 60px; font-size: 20px; background: none; border: 1px solid #0780FF; color: #0780FF !important;"
            type="submit" class="btnT">Crear servicio</FormKit>
          <RouterLink :to="{ name: 'list-services' }" style="width: 160px; height: 50px; margin-top: 1%;"
            class="btn btn-outline-success no-underline p-2 text-center text-black-200 uppercase text-xs font-black rounded-lg btnT"
            onclick="this.disabled = true">
            Regresar
          </RouterLink>
        </div>
      </FormKit>

    </div>
  </div>
</template>

<style>
@media screen and (max-width: 767px) {
    table{
        position: relative;
        width: 95% !important;
        margin-left: 22px !important;
        right: 12px !important;

    }
}
</style>

