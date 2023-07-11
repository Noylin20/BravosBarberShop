<script setup>
import { useServicesStore } from '../../stores/services'
const services = useServicesStore()

</script>

<template>
    <div style="position:relative;top:40px;">
        <div >
            <h2><b>Servicios disponibles</b></h2>
        </div>
        <br /><br />
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(service, index) in services.services">
                        <th scope="row"> {{ index }}</th>
                        <td contenteditable="true">{{ service.name }}</td>
                        <td contenteditable="true" style="height: 70px;">{{ service.description }}</td>
                        <td contenteditable="true">{{ service.price }}</td>
                        <td style="width: 10%;"><button type="button" class="btn btn-outline-danger"
                            @click="services.deleteService(service._id)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>