<script setup>
import Nav from '../views/navbar/Nav.vue'
</script>

<template>
  <Nav />
  <div class="image-section">
    <div class="image-item">
      <img src="../../public/img/ExteriorB1.jpeg" alt="Image 2"
        style="width: 800px; height: 350px; display: block; margin: 0 auto;">
      <div class="image-info">
        <br>
        <h2 class="flex-1 text-center p-1 uppercase font-extrabold hover:text-black">BRAVO´S SAN RAMÓN</h2>
        <div class="icon-info">
          <i class="fas fa-map-marker-alt"></i>
          <p class="text-center">175 oeste del Parque. San Ramón, Provincia de Alajuela, Costa Rica</p>
        </div>
        <div class="icon-info">
          <i class="fas fa-phone"></i>
          <p>Teléfono: 2445 0606</p>
        </div>
        <br>
        <router-link to="/SeeMore"
          class="p-2 text-black-200 uppercase text-xs font-black rounded-lg hover:bg-blue-500 hover:text-white no-underline border border-blue-500">
          Ver más</router-link>
      </div>
    </div>
  </div>
</template>



<style>
.image-section {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.image-item {
  text-align: center;
}

.image-item img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
}

.image-info {
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  margin-left: 10px;
}

.image-info h3 {
  font-weight: bold;
  margin-bottom: 5px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.icon-info {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 15%;
  margin-right: 20%;
}

.icon-info i {
  margin-right: 5px;
}

.btn-more {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-more:hover {
  background-color: #45a049;
}

.text-center {
  text-align: center;
}
</style>
