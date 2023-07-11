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
  <div style="position: relative; top: 50px;">
    <div>
      <h2><b>Crear nuevo servicio</b></h2>
    </div>

    <div>
      <FormKit id="createForm" type="form" :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">
        <table style="width: 100%;">
          <tbody>
            <tr>
              <th>
                <label>Nombre:</label>
                <FormKit type="text" name="name" placeholder="Nombre del servicio" validation="required" :validation-messages="{
                  required: 'El nombre es obligatorio'
                }" />
              </th>
              <th></th><th></th><th></th>
              <th style="position: relative; top: 60px;">
                <label>Descripción:</label>
                <FormKit type="textarea" rows="6" cols="35" name="description" placeholder="Introduzca la descripción del servicio" validation="required"
                  :validation-messages="{
                    required: 'La descripción es obligatoria'
                  }" />
              </th>
            </tr>
            <tr>
              <th style="position: relative; bottom: 50px;">
                <label>Precio:</label>
                <FormKit type="number" name="price" placeholder="Precio establecido al servicio" validation="required" :validation-messages="{
                  required: 'El precio es obligatorio'
                }" />
              </th>
            </tr>
          </tbody>
        </table>
        <FormKit style="margin-left: 30%; width: 45%;" type="submit">Crear producto</FormKit>
      </FormKit>
    </div>
  </div>
</template>