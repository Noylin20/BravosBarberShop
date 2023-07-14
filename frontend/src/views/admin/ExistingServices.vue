<template>
    <div style="margin-left: 100px; margin-right: 100px; margin-top: 60px;">
      <div style="text-align: center;">
        <h2><b>Servicios disponibles</b></h2>
      </div>
      <hr style="width: 70%; margin-left: 15%;">
      <br /><br />
      <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Precio</th>
              <th scope="col">Duracion</th>
              <th style="width: 15%;" scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(service, index) in services.services" :key="service._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ service.name }}</td>
              <td>{{ service.description }}</td>
              <td>₡ {{ service.price }}</td>
              <td>{{ service.duration }} minutos</td>
              <td style="width: 10%;">
                <button type="button" class="btn btn-outline-danger" style="margin-right: 10px;" @click="deleteService(service._id)">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input v-model="formData.name" type="text" class="form-control" placeholder="Nombre del servicio">
              </td>
              <td>
                <input v-model="formData.description" type="text" class="form-control" placeholder="Descripción del servicio">
              </td>
              <td>
                <input v-model="formData.price" type="text" class="form-control" placeholder="Email">
              </td>
              <td>
                <input v-model="formData.duration" type="text" class="form-control" placeholder="Hora de entrada">
              </td>
              <td>
                <button type="button" class="btn btn-primary" @click="addService">
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
  import {  useServicesStore } from '../../stores/services'
  const services = useServicesStore()
  
  // Variables para el formulario
  let formData = {
    name: '',
    description: '',
    price: '',
    duration: '' 
  }
  
  const addService = () => {
    services.createService({
      name: formData.name,
      description: formData.description,
      price: formData.price,
      duration: formData.duration
    })
  
    // Limpiar el formulario después de agregar el servicio
    clearForm()
  }
  
  const deleteService = (serviceId) => {
    services.deleteService(serviceId)
  }
  
  const clearForm = () => {
    formData = {
      name: '',
      description: '',
      price: '',
      duration: ''
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
  