<script setup>
import { useServicesStore as useUsersStore } from '../../stores/users'
import { formatCurrency } from '../../helpers';
const users = useUsersStore()

</script>

<template>
  <div style="position:relative;top:60px;">
    <div style="text-align: center;">
      <h2><b>Lista de clientes</b></h2>
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

            <th scope="col" style="text-align: left;">Acciones</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users.users" :key="user._id">
            <th scope="row">{{ index }}</th>
            <td contenteditable="true" @input="user.name = $event.target.textContent">{{ user.name }}</td>
            <td contenteditable="true" @input="user.lastName = $event.target.textContent">{{ user.lastName }}</td>
            <td contenteditable="true" @input="user.email = $event.target.textContent">{{ user.email }}</td>
           

            <td style="width: 5%;"></td> <!-- Espacio agregado -->
            <td style="width: 10%;">
              <button type="button" class="btn btn-outline-info" @click="users.updateUser(user); updateTable(user)">
                Editar cliente
              </button>
            </td>
            <td style="width: 5%;"></td> <!-- Espacio agregado -->
            <td style="width: 10%;">
              <button type="button" class="btn btn-outline-danger" @click="users.deleteUser(user._id)">
                Eliminar cliente
              </button>
            </td>
          </tr>

          <td style="width: 15%; position: absolute; top: 0; right: 0;">
            <button type="button" class="btn btn-outline-success" @click="$router.push({ name: 'newService' })">
              Crear nuevo cliente
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
