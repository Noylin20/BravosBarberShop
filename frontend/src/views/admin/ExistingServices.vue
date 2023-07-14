
<template>
  <div style="margin-left: 200px; margin-right: 200px; margin-top: 10px;">
    <div style="text-align: center;">
      <h2><b>Servicios  disponibles</b></h2>
    </div>
    <hr style="width: 70%; margin-left: 15%;">
    <br /><br />
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Duración</th>
            <th style="width: 15%;" scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(services, index) in services.services" :key="services._id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ services.name }}</td>
            <td>{{ services.description }}</td>
            <td>{{ formatCurrency(services.price) }}</td>
            <td>{{ services.duration }} minutos</td>
            <td style="width: 10%;">
              <button type="button" class="btn btn-outline-danger" style="margin-right: 10px;" @click="services.deleteService(services._id)">Eliminar</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input v-model="formData.name" type="text" class="form-control" placeholder="Nombre">
            </td>
            <td>
              <input v-model="formData.description" type="text" class="form-control" placeholder="Descripción">
            </td>
            <td>
              <input v-model="formData.price" type="text" class="form-control" placeholder="Precio">
            </td>
            <td>
              <input v-model="formData.duration" type="text" class="form-control" placeholder="Duración">
            </td>
           
            <td>
              <button type="button" class="btn btn-primary" @click="services.createService(formData);  clearForm()">
                Agregar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useServicesStore } from '../../stores/services'
import { formatCurrency } from '../../helpers';
const services = useServicesStore()

// Variables para el formulario
let formData = {
  name: '',
  drescripcion: '',
  price: '',
  duration: '',
}

const clearForm = () => {
  formData = {
    name: '',
  drescripcion: '',
  price: '',
  duration: '',
  }
}
</script>

