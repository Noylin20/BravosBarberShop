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
console.log(varr)
varr.then((barberos) => {
  console.log('Mis barberos', barberos);
}).catch((error) => {
  console.log('Error al obtener la lista de barberos', error);
});

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
  <div class=" px-4 md:px-8 py-4">
    <!-- <h2 class="text-4xl font-extrabold text-black">Detalles y resumen de la cita</h2> -->
    <h1 class="text-2xl font-extrabold text-black mt-18 mb-6 text-left" style="text-align: center;">Servicios
      seleccionados</h1>
    <br><br>
    <p v-if="appointments.noServicesSelected" class="text-black text-2xl" style="text-align: center;">No hay servicios
      seleccionados</p>

    <div v-else class="grid gap-1 p-1">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-2" style="justify-content: center;">
        <SelectedServices v-for="service in appointments.services" :key="service._id" :service="service"
          class="col-span-1 text-sm" />

      </div>
      <br><br><br>
      <div class="flex">
        <div class="text-gray-700 text-lg font-bold mr-10" style="position: relative; top: 8px;">
          <i class="far fa-clock mr-1"></i> Duración estimada: {{ totalDuration }} minutos
        </div>
        <div class="flex mt-2">
          <div class="text-gray-700 text-lg font-bold mr-2">
            <i class="fas fa-coins mr-2"></i>Total a pagar:
          </div>
          <div class="flex items-center">
            <div class="text-gray-700 text-lg font-bold mr-2">
              {{ formatCurrency(appointments.totalAmount) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <br>
    <div>
      <br>
      <div class="space-y-8" v-if="!appointments.noServicesSelected">

        <div class="lg:flex gap-5 items-start" style="justify-content: center;">
          <div class="posit">
            <h3 class="text-3xl font-extrabold text-black"><i class="far fa-calendar-check mr-2"></i> Fecha y hora</h3>
            <br>
            <div class="w-full lg:w-96 flex justify-center rounded-lg">
              <VueTailwindDatepicker :disable-date="disableDate" i18n="es-cr" as-single no-input :formatter="formatter"
                v-model="appointments.date" class="dp__theme_dark" style="color: #2E4053;" />
            </div>
          </div>
          <br><br>
          <div v-if="appointments.isDateSelected" class="flex mt-4">
            <div class="posit" style="position: relative; margin-top: -23px;">
              <div class="text-gray-700 text-base font-bold mr-2">
                <h3 class="text-3xl font-extrabold text-black"> <i class="fas fa-user mr-2"></i>Barbero</h3>
              </div>
              <br>
              <div>
                <select v-model="selectedBarber" class="border border-gray-300 rounded-md px-3 py-2">
                  <option v-for="barber in barbers" :key="barber._id" :value="barber">
                    {{ barber.name }}{{ ' ' + barber.lastName }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <br><br>
          <div class="posit">
            
            <h3 class="text-3xl font-extrabold text-black"> <i class="fa-regular fa-clock"></i> Horas disponibles</h3>
            <br>
            <div v-if="appointments.isDateSelected" class="flex-2 grid grid-cols-2 xl:grid-cols-4 gap-3 mt-8 lg:mt-0">
              <button v-for="hour in availableHours"
                class="block colorTxtD rounded-lg text-xl font-black p-1 disabled:opacity-10"
                style="border: 2px solid gray;"
                :class="appointments.time === hour ? 'colorCS text-white' : 'bg-white'"
                @click="appointments.time = hour" :disabled="appointments.disableTime(hour) ? true : false">
                {{ hour }}
              </button>
            </div>
          </div>
        </div>


        <div v-if="appointments.isValidReservation" class="flex justify-center" style="position: relative; top: 70px;">
          <button class="w-full md:w-auto btn btn-outline-secondary p-3 rounded-lg uppercase font-black "
            @click="appointments.saveAppointment" onclick="this.disabled = true">
            Confirmar cita
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.posit {
  display: flex;
  flex-direction: column;
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

@media (max-width: 952px) {
  .enlace {
    padding-left: 20px;
  }

  * {
    font-size: 13px;
  }

}
</style>