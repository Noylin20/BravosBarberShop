<script setup>
import { useBarbersStore } from '../../stores/barbers'
const barbers = useBarbersStore()

</script>

<template>
  <div style="position:relative;top:60px; overflow: hidden;" class="mi-div">
    <div style="text-align: center;">
      <h2><b>Barberos disponibles</b></h2>
    </div>
    <hr style="position: relative; width: 80%; margin-left: 10%;">
    <br /><br />
    <div>
      <button type="button" class="btn btn-outline-success createBtn" style="width: 150px; float: right; margin-right: 30px;" @click="$router.push({ name: 'newBarber' })">
        Crear
      </button>
    </div>
    <br>
    <br>
    <div class="table-responsive">
      <table class="table  table-striped txtS" >
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
              barber.scheduleStart }} AM</td>
            <td contenteditable="true" style="height: 70px;" @input="barber.scheduleEnd = $event.target.textContent">{{
              barber.scheduleEnd }} PM</td>

            <td>


            <td style="width: 5%;"></td> <!-- Espacio agregado -->
            <td style="width: 10%;">
              <button type="button" class="btn btn-outline-info btnT"
                @click="barbers.updateBarber(barber); updateTable(barber)" onclick="this.disabled = true" disabled="true">
                Editar
              </button>
            </td>
            <td style="width: 5%;"></td> <!-- Espacio agregado -->
            <td style="width: 10%;">
              <button type="button" class="btn btn-outline-danger btnT" @click="barbers.deleteBarber(barber._id)" onclick="this.disabled = true">
                Eliminar
              </button>
            </td>


            </td>
          </tr>

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

.btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary:visited, .btn-outline-secondary:focus {
    border-color: #2E4053;
    color: #2E4053;
    background-color: white;
}

.btn-outline-secondary:hover {
  background-color: #2E4053;
  cursor: pointer;
}

@media screen and (max-width: 767px) {
    .mi-div{
        width: 100%;
        margin-left: 1px;
    }
    .createBtn{
      position: relative;
      margin-right: 10px !important;
      font-size: 13px;
      width: 14% !important;
      height: 4% !important;
    }
    .txtS{
        font-size: 12px;
    }
    .btnT{
      font-size: 12px;
    }
}

</style>
