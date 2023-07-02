<template>
  <div class="contacto">
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
    </div>
    <div class="contacto-form">
      <h2  class="flex-1 text-center p-1 uppercase font-extrabold  hover:text-black">¡Contáctanos!</h2>
      <form>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" v-model="mensaje" required></textarea>
        </div>
        <button class="btn-enviar" @click.prevent="enviarMensaje">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
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
