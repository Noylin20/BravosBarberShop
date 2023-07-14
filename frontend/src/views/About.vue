<script setup>
import Nav from '../views/navbar/Nav.vue'
</script>

<template>
  <Nav />
  <div class="about-us">
    <h2  class="flex-1 text-center p-1 uppercase font-extrabold  hover:text-black">¡Somos Bravo´s Barbería!</h2>
    <hr>
    <div class="about-us-content">
      <br><br>
      <h2><b>¿Quiénes somos?</b></h2>
      <p>Somos una barbería especializada en ofrecer servicios de calidad para hombres. Nuestro objetivo es brindar una experiencia única de cuidado personal y estilo.</p>
      <br>
      <h2><b>¿Qué ofrecemos?</b></h2>
      <p>Contamos con un equipo de barberos profesionales altamente capacitados que están comprometidos en brindar cortes de cabello y afeitados excepcionales.</p>
      <br>
      <h2><b>¡Visitanos!</b></h2>
      <p>Nos enorgullece crear un ambiente acogedor y relajante para nuestros clientes, donde puedan disfrutar de un excelente servicio y sentirse renovados.</p>
    </div>
  </div>
</template>

<style>
.about-us {
  text-align: center;
  margin-left: 8%;
  margin-right: 3%;
  margin-top: 50px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-us-content {
  margin: 0 auto;
  margin-left: 40px;
  margin-right: 40px;
}

.about-us-content p {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
</style>
