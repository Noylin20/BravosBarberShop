<script setup>
import { useUserStore } from '../../stores/user.js';

const user = useUserStore();
</script>

<!-- <template>
    <nav class="bg-gray-800">
        <div class=" mx-auto px-4 sm:px-6 lg:px-8 position">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <RouterLink to="/"
                            class="no-underline text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            <img class="img2" src="../../../public/img/logoD.png"> -->
                            <!-- <h1 class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" style="position: relative; top: 5px;">Bravo´s
                                Barbería</h1> -->
                        <!-- </RouterLink>
                    </div>
                    <div class="hidden md:block" style="position: relative; left: -20px;">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <RouterLink to="/about"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Acerca
                                de nosotros
                            </RouterLink>
                            <RouterLink to="/contact"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Contacto</RouterLink>
                            <RouterLink to="/branch"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Sucursales</RouterLink>
                            <RouterLink to="/services"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Servicios</RouterLink>
                            <RouterLink to="/reservaciones"
                                class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Iniciar sesión</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="ml-10 flex items-baseline space-x-4" v-if="user.isLoggedIn">
                    <p class="text-white text-right">Hola: {{ user.getUserName }}</p>
                    <button type="button"
                        class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                        @click="user.logout">
                        Cerrar sesión
                    </button>
                </div>


            </div>
        </div>
    </nav>
</template> -->
<template>
    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <a href="#" class="enlace">
            <img class="logo imgNR" src="../../../public/img/logoD.png">
        </a>
        <ul>
            <li><a class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/about">Acerca de nosotros</a></li>
            <li><a class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/contact">Contacto</a></li>
            <li><a class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/branch">Sucursales</a></li>
            <li><a class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/services">Servicios</a></li>
            <li><a class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/reservaciones">Iniciar sesión</a></li>
        </ul>

    </nav>
</template>
<style>
.format {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

nav {
    background: #283747;
    height: 90px;
    width: 100%;
}

.enlace {
    position: absolute;
    padding: 20px 10px;
}

.position {
    position: relative;
    text-align: center;
    align-items: center;
    top: 5px;
    left: 25%;
    right: 40%;
}

.logo {
    height: 150px;
    width: 350px;
    margin-left: -60px;
    margin-top: -51px;
}

nav ul {
    float: right;
    margin-right: 20px;
}

nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 15px;
}

nav ul li a {
    color: #EFEFEF;
    font-size: 16px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
}

li a.active,
li a:hover {
    background: #17202A;
    transition: .5s;
}

.checkbtn {
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}

#check {
    display: none;
}

@media (max-width: 952px) {
    .enlace {
        padding-left: 20px;
    }

    nav ul li a {
        font-size: 16px;
    }
}

@media (max-width: 858px) {
    .checkbtn {
        display: block;
    }

    ul {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #283747;
        top: 80px;
        left: 100%;
        text-align: center;
        transition: all .5s;
    }

    nav ul li {
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }

    nav ul li a {
        font-size: 20px;
    }

    li a:hover,
    li a.active {
        background: none;
        color: black;
    }

    #check:checked~ul {
        left: 0;
    }
    .imgNR{
    position: relative;
    left: -90px !important;
      width: 280px !important;
      height: 150px !important;
      margin-left: 1px !important;
   }
}

.img2 {
    position: absolute;
    display: block;
    margin: auto;
    width: 250px;
    margin-top: -55px;
    margin-left: -150px;
}
</style>