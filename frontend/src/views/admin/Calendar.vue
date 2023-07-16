import { useAppointmentsStore } from 'module';
<template>
  <div class="calendar">
    <h2>Calendario de Citas</h2>
    <div class="calendar-header">
      <button @click="mostrarSemana = true">Ver por Semana</button>
      <button @click="mostrarSemana = false">Ver por Día</button>
      <div v-if="mostrarSemana">
        <button @click="semanaAnterior">&lt;</button>
        <h3>{{ semanaActual }}</h3>
        <button @click="semanaSiguiente">&gt;</button>
      </div>
      <div v-else>
        <input type="date" v-model="fechaSeleccionada" @change="verCitasPorDia" />
      </div>
    </div>
    <div class="calendar-days" v-if="mostrarSemana">
      <div v-for="dia in diasSemana" :key="dia" class="calendar-day">{{ dia }}</div>
    </div>
    <div class="calendar-grid" v-if="mostrarSemana">
      <div v-for="(semana, index) in gridItems" :key="index" class="calendar-grid-week">
        <div v-for="(item, itemIndex) in semana" :key="itemIndex" class="calendar-grid-item" :class="{ 'has-citas': item.citas.length > 0, 'current-day': isCurrentDay(item.date) }">
          <div class="grid-item-date" v-if="item.date !== ''">
            {{ item.date }} ({{ item.diaSemana }})
          </div>
          <div class="grid-item-citas" v-if="item.citas.length > 0">
            <div v-for="cita in item.citas" :key="cita.id" class="grid-item-cita" :class="{ 'active': citaVisible === cita.id }" @click="seleccionarCita(cita.id)">
              <p class="cita-time">Hora: {{ cita.hora }}</p>
              <p class="cita-nombre">Nombre: {{ cita.nombre }}</p>
              <p class="cita-nombre">Barbero: {{ cita.barbero }}</p>
            </div>
          </div>
          <div class="grid-item-sin-citas" v-else>
            <p>Sin citas</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="cita in citasDiaSeleccionado" :key="cita.id" class="cita">
        <p class="cita-time">{{ cita.hora }}</p>
        <p class="cita-nombre">{{ cita.nombre }}</p>
        <p class="cita-nombre">{{ cita.barbero }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import { useAppointmentsStore } from '../../stores/loadAppointments'
import { ref } from 'vue';
const appointmentsBD = useAppointmentsStore()


//const list = varr.getAll()

appointmentsBD.getAllAppointments()
  .then((data) => {
    console.log('Datos obtenidos:', data);
    console.log('Datos nombre:', name);
  })
  .catch((error) => {
    console.log('Error al obtener los datos:', error);
  });

 const varr = appointmentsBD.getAllAppointments()
console.log(varr)
varr.then((users) => {
  console.log('Mis usuarios ', users);
}).catch((error) => {
  console.log('Error al obtener la lista de usuarios ', error);
});

const appointments = ref([]);

appointmentsBD.getAllAppointments().then((barberos) => {
  appointments.value = barberos;
  
}).catch((error) => {
  console.log('Error al obtener la lista de barberos', error);
});

// const varriable = appointments.getAllAppointments()

export default {
  data() {
    return {
      fechaActual: new Date(),
      semanaActual: '',
      diasSemana: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      gridItems: [],
      citaVisible: null,
      mostrarSemana: true,
      fechaSeleccionada: null,
      citasDiaSeleccionado: []
    };
  },
  mounted() {
    this.obtenerCalendario();
  },
  methods: {
    obtenerCalendario() {
      const primerDia = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), this.fechaActual.getDate() - this.fechaActual.getDay() + 1);
      const ultimoDia = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), this.fechaActual.getDate() - this.fechaActual.getDay() + 7);
      this.semanaActual = this.obtenerNombreMes(primerDia.getMonth()) + ' ' + primerDia.getDate() + ' - ' + this.obtenerNombreMes(ultimoDia.getMonth()) + ' ' + ultimoDia.getDate();

      const calendario = [];
      let contadorDia = primerDia.getDate();
      let semana = [];

      for (let i = 0; i < 7; i++) {
        const fecha = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), contadorDia);
        const nombreDia = this.obtenerNombreDiaSemana(fecha);
        const citasDia = this.obtenerCitasPorDia(fecha);

        semana.push({ date: contadorDia, diaSemana: nombreDia, citas: citasDia });

        contadorDia++;
      }

      calendario.push(semana);

      this.gridItems = calendario;
    },
    semanaAnterior() {
      this.fechaActual.setDate(this.fechaActual.getDate() - 7);
      this.obtenerCalendario();
    },
    semanaSiguiente() {
      this.fechaActual.setDate(this.fechaActual.getDate() + 7);
      this.obtenerCalendario();
    },
    obtenerCitasPorDia(fecha) {
      // Lógica para obtener las citas por día desde la base de datos
      // Puedes utilizar una librería como Axios para hacer la petición HTTP

      // Ejemplo de datos
      const citas = [
        { id: 1, fecha: '2023-07-04', nombre: 'Andrey Castro', hora: '10:00', barbero: 'Pedro Nuñez' },
        { id: 2, fecha: '2023-07-04', nombre: 'Victor Aguirre', hora: '15:30' },
        { id: 3, fecha: '2023-07-10', nombre: 'Samuel Castillo', hora: '09:00' , barbero: 'Javier Gónzalez' },
        { id: 4, fecha: '2023-07-13', nombre: 'Ariel Rojas', hora: '16:15', barbero: 'Alberto Suarez' },
        { id: 5, fecha: '2023-07-13', nombre: 'Greivin Esquivel', hora: '13:15', barbero: 'Pedro Nuñez' },
        { id: 6, fecha: '2023-07-14', nombre: 'Hugo Vega', hora: '12:15' , barbero: 'Alberto Suarez' },
        { id: 7, fecha: '2023-07-13', nombre: 'Anthony Villalobos', hora: '15:15', barbero: 'Alberto Suarez' },
        { id: 7, fecha: '2023-07-14', nombre: 'Sebastián Vargas', hora: '16:15', barbero: 'Alberto Suarez' },
        { id: 7, fecha: '2023-07-13', nombre: 'Mauricio Salas', hora: '10:15', barbero: 'Pedro Nuñez' },
        { id: 7, fecha: '2023-07-14', nombre: 'Tyron Villalobos', hora: '11:15', barbero: 'Javier Gónzalez' },
        { id: 7, fecha: '2023-07-18', nombre: 'Saúl Villegas', hora: '10:15', barbero: 'Alberto Suarez' },
        { id: 7, fecha: '2023-07-13', nombre: 'Saúl Villegas', hora: '10:15', barbero: 'Pedro Nuñez' },
        { id: 7, fecha: '2023-07-13', nombre: 'Saúl Villegas', hora: '10:15' , barbero: 'Javier Gónzalez' },
        { id: 7, fecha: '2023-07-13', nombre: 'Saúl Villegas', hora: '10:15', barbero: 'Alberto Suarez' },
        { id: 7, fecha: '2023-07-14', nombre: 'Saúl Villegas', hora: '10:15', barbero: 'Pedro Nuñez' },
        { id: 7, fecha: '2023-07-13', nombre: 'Saúl Villegas', hora: '13:15', barbero: 'Javier Gónzalez' }

        // ...
      ];

      const citasOrdenadas = citas.filter(cita => cita.fecha === fecha.toISOString().split('T')[0])
        .sort((a, b) => a.hora.localeCompare(b.hora));

      return citasOrdenadas;
    },
    seleccionarCita(id) {
      this.citaVisible = id;
    },
    isCurrentDay(date) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate();
      return (
        currentYear === this.fechaActual.getFullYear() &&
        currentMonth === this.fechaActual.getMonth() &&
        currentDay === date
      );
    },
    verCitasPorDia() {
      const fechaSeleccionada = new Date(this.fechaSeleccionada);
      const citasDia = this.obtenerCitasPorDia(fechaSeleccionada);
      this.citasDiaSeleccionado = citasDia;
    },
    obtenerNombreMes(numeroMes) {
      const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ];
      return meses[numeroMes];
    },
    obtenerNombreDiaSemana(fecha) {
      const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
      const numeroDia = fecha.getDay();
      return diasSemana[numeroDia];
    }
  }
};
</script>

<style scoped>
.calendar {
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-top: 0;
  text-align: center;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.calendar-header button {
  background-color: #6495ed;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.calendar-header button:hover {
  background-color: #4787d3;
}

.calendar-days {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.calendar-day {
  flex-basis: calc(100% / 7);
  text-align: center;
  font-weight: bold;
  color: #777;
  display: none;
}

.calendar-grid {
  display: grid;
  grid-gap: 10px;
}

.calendar-grid-week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-grid-item {
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.calendar-grid-item.has-citas {
  background-color: #f3f3f3;
}

.calendar-grid-item.current-day {
  background-color: #6495ed;
  color: #4e1818;
}

.grid-item-date {
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.grid-item-citas {
  margin-top: 5px;
}

.grid-item-cita {
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.grid-item-cita:hover {
  background-color: #ebebeb;
}

.grid-item-cita.active {
  background-color: #6495ed;
  color: #fff;
}

.grid-item-sin-citas {
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 5px;
}

.cita {
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.cita .cita-time {
  font-weight: bold;
  margin-bottom: 5px;
}

.cita .cita-nombre {
  margin: 0;
}

/* Estilos responsivos */
@media screen and (max-width: 767px) {
  .calendar {
    max-width: 100%;
    padding: 10px;
  }

  .calendar-header {
    margin-bottom: 10px;
  }

  .calendar-header button {
    font-size: 14px;
    padding: 6px 10px;
  }

  .calendar-days {
    margin-bottom: 5px;
  }

  .calendar-day {
    font-size: 12px;
  }

  .grid-item-date {
    font-size: 14px;
  }

  .grid-item-cita {
    padding: 5px;
    font-size: 12px;
  }

  .cita-time {
    font-size: 12px;
  }

  .cita-nombre {
    font-size: 10px;
  }
}
</style>
