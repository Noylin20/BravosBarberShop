<script setup>
import { useServicesStore } from '../../stores/services'
import { formatCurrency } from '../../helpers';
const services = useServicesStore()

</script>

<template>
    <div style="position:relative;top:60px;" class="mi-div">
        <div style="text-align: center;">
            <h2><b>Servicios disponibles</b></h2>
        </div>
        <hr style="position: relative; width: 70%; margin-left: 15%;">
        <br /><br />
        <div>
      <button type="button" class="btn btn-outline-success createBtn" style="width: 150px; float: right; margin-right: 30px;" @click="$router.push({ name: 'newService' })">
        Crear
      </button>
    </div>
    <br>
    <br>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" style="text-align: left;">#</th>
                        <th scope="col" style="text-align: left;">Nombre</th>
                        <th scope="col" style="text-align: left;">Descripción</th>
                        <th scope="col" style="text-align: left;">Precio</th>
                        <th scope="col" style="text-align: left;">Duración</th>
                        <th scope="col" style="text-align: left;">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(service, index) in services.services" :key="service._id">
                        <th scope="row">{{ index }}</th>
                        <td contenteditable="true" @input="service.name = $event.target.textContent">{{ service.name }}</td>
                        <td contenteditable="true" style="height: 70px;"
                            @input="service.description = $event.target.textContent">{{ service.description }}</td>
                        <td contenteditable="true" @input="service.price = $event.target.textContent">{{
                            formatCurrency(service.price) }}</td>
                        <td contenteditable="true" @input="service.duration = $event.target.textContent">{{ service.duration
                        }} minutos</td>
                        <td>


                        <td style="width: 5%;"></td> <!-- Espacio agregado -->
                        <td style="width: 10%;">
                            <button type="button" class="btn btn-outline-info"
                                @click="services.updateService(service); updateTable(service)">
                                Editar
                            </button>
                        </td>
                        <td style="width: 5%;"></td> <!-- Espacio agregado -->
                        <td style="width: 10%;">
                            <button type="button" class="btn btn-outline-danger"
                                @click="services.deleteService(service._id)">
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

@media screen and (max-width: 767px) {
    .mi-div{
        width: 100%;
        margin-left: 1px;
    }
    .createBtn{
      position: relative;
      margin-right: 10px !important;
      font-size: 13px;
      width: 20% !important;
      height: 40px !important;
    }
}

</style>
