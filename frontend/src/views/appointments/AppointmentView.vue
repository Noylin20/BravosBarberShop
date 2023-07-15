<script setup>
import { ref, computed } from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import SelectedServices from '../../components/SelectedServices.vue';
import { formatCurrency } from '../../helpers';
import { useAppointmentsStore } from '../../stores/appointments';
import { useBarbersStore } from '../../stores/barbers';

const appointments = useAppointmentsStore()
const barbersBD = useBarbersStore()

const formatter = ref({
  date: 'DD/MM/YYYY',
  month: 'MMM'
})

// Deshabilita fechas anteriores 
const disableDate = (date) => {
  const today = new Date()
  return date < today || date.getMonth() > today.getMonth() + 1
  //|| [0,6].includes(date.getDay()) para deshabilitar fines de semana 
}


const varr = barbersBD.getAllBarbers()
varr.then((barberos) => {
  console.log('Mis barberos', barberos);
}).catch((error) => {
  console.log('Error al obtener la lista de barberos', error);
});

// const barbers = ref([
//   { _id: '64a255030f365ff57693a25b', name: 'Juan Moya', entryTime: '09:00', exitTime: '11:00' },
//   { _id: '64ada381e123f4228ee57bc3', name: 'Manuel Perez', entryTime: '12:00', exitTime: '14:00' }
// ])
const barbers = ref([]);

barbersBD.getAllBarbers().then((barberos) => {
  barbers.value = barberos;

}).catch((error) => {
  console.log('Error al obtener la lista de barberos', error);
});

const selectedBarber = ref(null)



const availableHours = computed(() => {
  const hours = [];

  if (selectedBarber.value) {
    const timeStart = new Date(`01/01/2023 ${selectedBarber.value.scheduleStart}`);
    const entryTime = new Date(timeStart);

    const timeEnd = new Date(`01/01/2023 ${selectedBarber.value.scheduleEnd}`);
    const exitTime = new Date(timeEnd);

    console.log('Inicio ' + entryTime.toLocaleTimeString());
    console.log('Salida ' + exitTime.toLocaleTimeString());

    let currentHour = new Date(entryTime);

    while (currentHour <= exitTime) {
      hours.push(currentHour.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
      currentHour.setMinutes(currentHour.getMinutes() + 15);
    }
  }

  return hours;
});



const totalDuration = computed(() => {
  const minutes = appointments.services.reduce((total, service) => total + service.duration, 0);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}:${remainingMinutes.toString().padStart(2, '0')}`;
});

</script>

<template>
  <div class="mi-div px-4 md:px-8 py-4">
    <!-- <h2 class="text-4xl font-extrabold text-black">Detalles y resumen de la cita</h2> -->
    <h1 class="text-2xl font-extrabold text-black mt-18 mb-6 text-left">Servicios seleccionados</h1>

    <p v-if="appointments.noServicesSelected" class="text-black text-2xl">No hay servicios seleccionados</p>

    <div v-else class="grid gap-1 p-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
        <SelectedServices v-for="service in appointments.services" :key="service._id" :service="service"
          class="col-span-1 text-sm" />

      </div>
      <div class="text-gray-700 text-lg font-bold mr-2">
        <i class="far fa-clock mr-2"></i> Duración estimada: {{ totalDuration }} minutos
      </div>
      <div class="flex justify-end mt-2">
        <div class="text-gray-700 text-lg font-bold mr-2">
          <i class="fas fa-coins mr-2"></i>Total a pagar:
        </div>
        <div class="flex items-center">
          <div class="text-sm font-bold text-sm-gray-900">
            {{ formatCurrency(appointments.totalAmount) }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="appointments.isDateSelected" class="flex justify-start mt-4">
      <div class="text-gray-700 text-base font-bold mr-2">
        <i class="fas fa-user mr-2"></i> Barbero:
      </div>
      <div>
        <select v-model="selectedBarber" class="border border-gray-300 rounded-md px-3 py-2" style="font-size: 20px;">
          <option v-for="barber in barbers" :key="barber._id" :value="barber">
            {{ barber.name }}{{ ' ' + barber.lastName }}
          </option>
        </select>
      </div>
    </div>
    <br>
    <div class="space-y-8" v-if="!appointments.noServicesSelected">
      <h3 class="text-3xl font-extrabold text-black"><i class="far fa-calendar-check mr-2"></i> Fecha y hora</h3>
      <div class="lg:flex gap-5 items-start">
        <div class="w-full lg:w-96 bg-white flex justify-center rounded-lg">
          <VueTailwindDatepicker :disable-date="disableDate" i18n="es-cr" as-single no-input :formatter="formatter"
            v-model="appointments.date" />
        </div>
        <div v-if="appointments.isDateSelected" class="flex-2 grid grid-cols-2 xl:grid-cols-4 gap-3 mt-8 lg:mt-0">
          <button v-for="hour in availableHours"
            class="block text-blue-500 rounded-lg text-xl font-black p-1 disabled:opacity-10"
            style="border: 2px solid gray;" :class="appointments.time === hour ? 'bg-blue-500 text-white' : 'bg-white'"
            @click="appointments.time = hour" :disabled="appointments.disableTime(hour) ? true : false">
            {{ hour }}
          </button>
        </div>
      </div>

      <div v-if="appointments.isValidReservation" class="flex justify-end">
        <button class="w-full md:w-auto bg-blue-500 p-3 rounded-lg uppercase font-black text-white"
          @click="appointments.saveAppointment">
          Confirmar cita
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.mi-div {
  margin-left: 100px;
  margin-right: 100px;
}

.custom-option {
  font-family: Arial, sans-serif;
  /* Cambia el tipo de letra según tus preferencias */
  font-size: 20px;
  /* Cambia el tamaño de letra según tus preferencias */
}
</style>