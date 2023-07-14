<template>
  <div style="margin-left: 200px; margin-right: 200px; margin-top: 60px;">
    <div style="text-align: center;">
      <h2><b>Barberos disponibles</b></h2>
    </div>
    <hr style="width: 70%; margin-left: 15%;">
    <br /><br />
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Correo</th>
            <th scope="col">Hora de entrada</th>
            <th scope="col">Hora de salida</th>
            <th style="width: 15%;" scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(barbers, index) in barbers.barbers" :key="barbers._id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ barbers.name }}</td>
            <td>{{ barbers.lastName }}</td>
            <td>{{ barbers.email }} </td>
            <td>{{ barbers.scheduleStart }} </td>
            <td>{{ barbers.scheduleEnd }} </td>
            <td style="width: 10%;">
              <button type="button" class="btn btn-outline-danger" style="margin-right: 10px;"
                @click="barbers.deleteBarber(barbers._id)">Eliminar</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input v-model="formData.name" type="text" class="form-control" placeholder="Nombre">
            </td>
            <td>
              <input v-model="formData.lastName" type="text" class="form-control" placeholder="Apellidos">
            </td>
            <td>
              <input v-model="formData.email" type="text" class="form-control" placeholder="Correo">
            </td>
            <td>
              <input v-model="formData.scheduleStart" type="text" class="form-control" placeholder="Hora de entrada">
            </td>
            <td>
              <input v-model="formData.scheduleEnd" type="text" class="form-control" placeholder="Hora de salida">
            </td>
            <td>
              <button type="button" class="btn btn-primary" @click="barbers.admin - createBarber(formData); clearForm()">
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
import { useServicesStore as useBarbersStore } from '../../stores/barbers'
const barbers = useBarbersStore()

// Variables para el formulario
let formData = {
  name: '',
  lastName: '',
  email: '',
  scheduleStart: '',
  scheduleEnd: ''
}

const clearForm = () => {
  formData = {
    name: '',
    lastName: '',
    email: '',
    scheduleStart: '',
    scheduleEnd: ''
  }
}
</script>


 
