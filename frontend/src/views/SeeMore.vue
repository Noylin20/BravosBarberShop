<template>
  <Nav />
  <div class="contacto grid grid-cols-1 gap-3 mt-10" style="background-color: rgba(0,0,0,0.1); border-radius: 5px;">
    <div class="contacto-info">
      <div class="contacto-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>Dirección: 175 oeste del Parque. San Ramón, Provincia de Alajuela, Costa Rica</span>
      </div>
      <div class="contacto-item">
        <i class="fas fa-phone"></i>
        <span>Teléfono: 2445 0606</span>
      </div>
      <div class="contacto-item">
        <i class="fas fa-envelope"></i>
        <span>Email: bravosbarberiasr@gmail.com</span>
      </div>
      <div class="contacto-item">
  <i class="fas fa-clock"></i>
  <span>Horario de atención: Lunes a Viernes, de 8:00 am a 05:00 pm</span>
</div>

    </div>
    
  </div>
</template>

<script>
import Nav from '../views/navbar/Nav.vue'
export default {
  name: 'Contacto',
  data() {
    return {
      nombre: '',
      email: '',
      mensaje: ''
    };
  },
  methods: {
    enviarMensaje() {
      // Lógica para enviar el mensaje de contacto
      // Puedes agregar aquí tu implementación para enviar el formulario
      console.log('Mensaje enviado');
    }
  }
}
</script>

<style scoped>
.contacto {
  text-align: center;
  padding: 20px;
}

.contacto h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.contacto-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.contacto-item {
  display: flex;
  align-items: center;
  margin: 10px;
}

.contacto-item i {
  margin-right: 10px;
}

.contacto-form {
  max-width: 400px;
  margin: 0 auto;
}

.contacto-form h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button.btn-enviar {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style>
