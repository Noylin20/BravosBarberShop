<template>
    <div class="calendar">
      <h2>Calendario de Citas</h2>
      <div class="calendar-header">
        <button @click="mostrarMes = true">Ver por Mes</button>
        <button @click="mostrarMes = false">Ver por Día</button>
        <div v-if="mostrarMes">
          <button @click="mesAnterior">&lt;</button>
          <h3>{{ mesActual }}</h3>
          <button @click="mesSiguiente">&gt;</button>
        </div>
        <div v-else>
          <input type="date" v-model="fechaSeleccionada" @change="verCitasPorDia" />
        </div>
      </div>
      <div class="calendar-days">
        <div v-for="dia in diasSemana" :key="dia" class="calendar-day">{{ dia }}</div>
      </div>
      <div class="calendar-grid" v-if="mostrarMes">
        <div
          v-for="(semana, index) in gridItems"
          :key="index"
          class="calendar-grid-week"
        >
          <div
            v-for="(item, itemIndex) in semana"
            :key="itemIndex"
            class="calendar-grid-item"
            :class="{ 'has-citas': item.citas.length > 0, 'current-day': isCurrentDay(item.date) }"
          >
            <div class="grid-item-date" v-if="item.date !== ''">{{ item.date }}</div>
            <div class="grid-item-citas" v-if="item.citas.length > 0">
              <div
                v-for="cita in item.citas"
                :key="cita.id"
                class="grid-item-cita"
                :class="{ 'active': citaVisible === cita.id }"
                @click="seleccionarCita(cita.id)"
              >
                <p class="cita-time">{{ cita.hora }}</p>
                <p class="cita-nombre">{{ cita.nombre }}</p>
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
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fechaActual: new Date(),
        mesActual: '',
        diasSemana: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        gridItems: [],
        citaVisible: null,
        mostrarMes: true,
        fechaSeleccionada: null,
        citasDiaSeleccionado: []
      };
    },
    mounted() {
      this.obtenerCalendario();
    },
    methods: {
      obtenerCalendario() {
        const primerDia = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), 1);
        const ultimoDia = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1, 0);
        const primerDiaSemana = primerDia.getDay();
  
        this.mesActual = this.obtenerNombreMes(this.fechaActual.getMonth()) + ' ' + this.fechaActual.getFullYear();
  
        const calendario = [];
        let contadorDia = 1;
        let semana = [];
  
        for (let i = 0; i < primerDiaSemana; i++) {
          semana.push({ date: '', citas: [] });
        }
  
        for (let i = 1; i <= ultimoDia.getDate(); i++) {
          const fecha = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), contadorDia);
          const citasDia = this.obtenerCitasPorDia(fecha);
  
          semana.push({ date: contadorDia, citas: citasDia });
  
          if (semana.length === 7) {
            calendario.push(semana);
            semana = [];
          }
  
          contadorDia++;
        }
  
        if (semana.length > 0) {
          while (semana.length < 7) {
            semana.push({ date: '', citas: [] });
          }
  
          calendario.push(semana);
        }
  
        this.gridItems = calendario;
      },
      mesAnterior() {
        const nuevoMes = this.fechaActual.getMonth() - 1;
        this.fechaActual.setMonth(nuevoMes);
        this.obtenerCalendario();
      },
      mesSiguiente() {
        const nuevoMes = this.fechaActual.getMonth() + 1;
        this.fechaActual.setMonth(nuevoMes);
        this.obtenerCalendario();
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
      obtenerCitasPorDia(fecha) {
        // Lógica para obtener las citas por día desde la base de datos
        // Puedes utilizar una librería como Axios para hacer la petición HTTP
  
        // Ejemplo de datos
        const citas = [
          { id: 1, fecha: '2023-07-04', nombre: 'Cita 1', hora: '10:00' },
          { id: 2, fecha: '2023-07-04', nombre: 'Cita 2', hora: '15:30' },
          { id: 3, fecha: '2023-07-10', nombre: 'Cita 3', hora: '09:00' },
          { id: 4, fecha: '2023-07-15', nombre: 'Cita 4', hora: '14:15' },
          // ...
        ];
  
        return citas.filter(cita => cita.fecha === fecha.toISOString().split('T')[0]);
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
    color: #fff;
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
  