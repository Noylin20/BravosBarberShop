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
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Hora de entrada</th>
            <th scope="col">Hora de salida</th>
            <th style="width: 15%;" scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(barber, index) in barbers.services" :key="barber._id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ barber.name }}</td>
            <td>{{ barber.lastName }}</td>
            <td>{{ barber.email }}</td>
            <td>{{ barber.scheduleStart }}</td>
            <td>{{ barber.scheduleEnd }}</td>
            <td style="width: 10%;">
              <button type="button" class="btn btn-outline-danger" style="margin-right: 10px;" @click="deleteBarber(barber._id)">Eliminar</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input v-model="formData.name" type="text" class="form-control" placeholder="Nombre">
            </td>
            <td>
              <input v-model="formData.lastName" type="text" class="form-control" placeholder="Apellido">
            </td>
            <td>
              <input v-model="formData.email" type="text" class="form-control" placeholder="Email">
            </td>
            <td>
              <input v-model="formData.scheduleStart" type="text" class="form-control" placeholder="Hora de entrada">
            </td>
            <td>
              <input v-model="formData.scheduleEnd" type="text" class="form-control" placeholder="Hora de salida">
            </td>
            <td>
              <button type="button" class="btn btn-primary" @click="addBarber">
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
import { useBarbersStore } from '../../stores/barbers'
const barbers = useBarbersStore()

// Variables para el formulario
let formData = {
  name: '',
  lastName: '',
  email: '',
  scheduleStart: '',
  scheduleEnd: ''
}

const addBarber = () => {
  barbers.createBarber({
    name: formData.name,
    lastName: formData.lastName,
    email: formData.email,
    scheduleStart: formData.scheduleStart,
    scheduleEnd: formData.scheduleEnd
  })

  // Limpiar el formulario después de agregar el barbero
  clearForm()
}

const deleteBarber = (barberId) => {
  barbers.deleteBarber(barberId)
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

<style>
.edit-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: white;
  border: 1px solid black;
  padding: 20px;
}
</style>
