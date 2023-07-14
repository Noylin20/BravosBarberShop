<template>
    <div style="margin-left: 100px; margin-right: 100px; margin-top: 60px;">
      <div style="text-align: center;">
        <h2><b>Barberos disponibles</b></h2>
      </div>
      <hr style="width: 70%; margin-left: 15%;">
      <br /><br />
      <div>
        <table class="table table-striped justify-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Hora de entrada</th>
              <th scope="col">Hora de salida</th>
              <th style="width: 25%;" scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(barber, index) in barbers.services" :key="barber._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>
                <template v-if="barber.editable">
                  <input v-model="barber.name" type="text" class="form-control" placeholder="Nombre">
                </template>
                <template v-else>
                  {{ barber.name }}
                </template>
              </td>
              <td>
                <template v-if="barber.editable">
                  <input v-model="barber.lastName" type="text" class="form-control" placeholder="Apellido">
                </template>
                <template v-else>
                  {{ barber.lastName }}
                </template>
              </td>
              <td>
                <template v-if="barber.editable">
                  <input v-model="barber.email" type="text" class="form-control" placeholder="Email">
                </template>
                <template v-else>
                  {{ barber.email }}
                </template>
              </td>
              <td>
                <template v-if="barber.editable">
                  <input v-model="barber.scheduleStart" type="text" class="form-control" placeholder="Hora de entrada">
                </template>
                <template v-else>
                  {{ barber.scheduleStart }}
                </template>
              </td>
              <td>
                <template v-if="barber.editable">
                  <input v-model="barber.scheduleEnd" type="text" class="form-control" placeholder="Hora de salida">
                </template>
                <template v-else>
                  {{ barber.scheduleEnd }}
                </template>
              </td>
              <td style="width: 10%;">
                <template v-if="barber.editable">
                  <button type="button" class="btn btn-outline-primary" @click="saveChanges(barber._id)">Guardar</button>
                  <button type="button" class="btn btn-outline-secondary" @click="cancelEdit(barber._id)">Cancelar</button>
                </template>
                <template v-else>
                  <button type="button" class="btn btn-outline-danger" style="margin-right: 10px;" @click="deleteBarber(barber._id)">Eliminar</button>
                  <button type="button" class="btn btn-outline-primary" @click="openEditPopup(barber._id)">Editar</button>
                </template>
              </td>
            </tr>
            <tr >
              <td></td>
              <td>
                <input v-model="formData.name" type="text" class="form-control" placeholder="Nombre" :disabled="editMode">
              </td>
              <td>
                <input v-model="formData.lastName" type="text" class="form-control" placeholder="Apellido" :disabled="editMode">
              </td>
              <td>
                <input v-model="formData.email" type="text" class="form-control" placeholder="Email" :disabled="editMode">
              </td>
              <td>
                <input v-model="formData.scheduleStart" type="text" class="form-control" placeholder="Hora de entrada" :disabled="editMode">
              </td>
              <td>
                <input v-model="formData.scheduleEnd" type="text" class="form-control" placeholder="Hora de salida" :disabled="editMode">
              </td>
              <td>
                <button type="button" class="btn btn-primary" @click="addOrUpdateBarber" :disabled="editMode">
                  {{ editMode ? 'Guardar cambios' : 'Agregar' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="showEditPopup" class="edit-popup">
        <h3>Editar Barbero</h3>
        <input v-model="formData.name" type="text" class="form-control" placeholder="Nombre">
        <input v-model="formData.lastName" type="text" class="form-control" placeholder="Apellido">
        <input v-model="formData.email" type="text" class="form-control" placeholder="Email">
        <input v-model="formData.scheduleStart" type="text" class="form-control" placeholder="Hora de entrada">
        <input v-model="formData.scheduleEnd" type="text" class="form-control" placeholder="Hora de salida">
        <button type="button" class="btn btn-primary" @click="saveChanges(editingBarberId)">Guardar</button>
        <button type="button" class="btn btn-secondary" @click="closeEditPopup">Cancelar</button>
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
  
  let editMode = false
  let editingBarberId = null
  let showEditPopup = false;
  
  const addOrUpdateBarber = () => {
    if (editMode) {
      // Modificar el barbero existente
      barbers.updateBarber(editingBarberId, {
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        scheduleStart: formData.scheduleStart,
        scheduleEnd: formData.scheduleEnd
      })
    } else {
      // Agregar el nuevo barbero a la lista
      barbers.createBarber({
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        scheduleStart: formData.scheduleStart,
        scheduleEnd: formData.scheduleEnd
      })
    }
  
    // Limpiar el formulario después de agregar o editar el barbero
    clearForm()
  }
  
  const startEdit = (barberId) => {
    const barber = barbers.getBarberById(barberId)
    barber.editable = true
  }
  
  const saveChanges = (barberId) => {
    const barber = barbers.getBarberById(barberId)
    barber.editable = false
    barbers.updateBarber(barberId, {
      name: barber.name,
      lastName: barber.lastName,
      email: barber.email,
      scheduleStart: barber.scheduleStart,
      scheduleEnd: barber.scheduleEnd
    })
    showEditPopup = false;
  }
  
  const cancelEdit = (barberId) => {
    const barber = barbers.getBarberById(barberId)
    barber.editable = false
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
  
    editMode = false
    editingBarberId = null
  }
  
  const openEditPopup = (barberId) => {
    showEditPopup = true;
    const barber = barbers.getBarberById(barberId);
    formData = {
      name: barber.name,
      lastName: barber.lastName,
      email: barber.email,
      scheduleStart: barber.scheduleStart,
      scheduleEnd: barber.scheduleEnd
    };
    editingBarberId = barberId;
  }
  
  const closeEditPopup = () => {
    showEditPopup = false;
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
  