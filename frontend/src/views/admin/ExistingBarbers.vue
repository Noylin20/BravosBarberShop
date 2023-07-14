<script setup>
import { useBarbersStore } from '../../stores/barbers'
const barbers = useBarbersStore()

</script>

<template>
  <div style="position:relative;top:60px;">
    <div style="text-align: center;">
      <h2><b>Barberos disponibles</b></h2>
    </div>
    <hr style="position: relative; width: 70%; margin-left: 15%;">
    <br /><br />
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col" style="text-align: left;">#</th>
            <th scope="col" style="text-align: left;">Nombre</th>
            <th scope="col" style="text-align: left;">Apellidos</th>
            <th scope="col" style="text-align: left;">Correo</th>
            <th scope="col" style="text-align: left;">Número de teléfono</th>
            <th scope="col" style="text-align: left;">Hora de entrada</th>
            <th scope="col" style="text-align: left;">Hora de entrada</th>
            <th scope="col" style="text-align: left;">Acciones</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(barber, index) in barbers.barbers" :key="barber._id">
            <th scope="row">{{ index }}</th>
            <td contenteditable="true" @input="barber.name = $event.target.textContent">{{ barber.name }}</td>
            <td contenteditable="true" style="height: 70px;" @input="barber.lastName = $event.target.textContent">{{
              barber.lastName }}</td>
            <td contenteditable="true" style="height: 70px;" @input="barber.email = $event.target.textContent">{{
              barber.email }}</td>
            <td contenteditable="true" style="height: 70px;" @input="barber.phone = $event.target.textContent">{{
              barber.phone }}</td>
            <td contenteditable="true" style="height: 70px;" @input="barber.scheduleStart = $event.target.textContent">{{
              barber.scheduleStart }}</td>
            <td contenteditable="true" style="height: 70px;" @input="barber.scheduleEnd = $event.target.textContent">{{
              barber.scheduleEnd }}</td>

            <td>


            <td style="width: 5%;"></td> <!-- Espacio agregado -->
            <td style="width: 10%;">
              <button type="button" class="btn btn-outline-info"
                @click="barbers.updateBarber(barber); updateTable(barber)">
                Editar
              </button>
            </td>
            <td style="width: 5%;"></td> <!-- Espacio agregado -->
            <td style="width: 10%;">
              <button type="button" class="btn btn-outline-danger" @click="barbers.deleteBarber(barber._id)">
                Eliminar
              </button>
            </td>


            </td>
          </tr>
          <td style="width: 15%; position: absolute; top: 0; right: 0;">
            <button type="button" class="btn btn-outline-success" @click="$router.push({ name: 'newBarber' })">
              Crear
            </button>
          </td>

        </tbody>
      </table>

    </div>
  </div>
</template>

<style>
.mi-div {
  margin-left: 100px;
  margin-right: 100px;
}
</style>
