<script setup>
import { useUserStore } from '../../stores/user.js';

const user = useUserStore();
</script>

<!-- <template>
    <nav class="bg-gray-800">
        <div class=" mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <RouterLink to="/"
                            class="no-underline text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            <h1 class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <i class="fas fa-cut"></i> Bravo´s Barbería</h1>
                        </RouterLink>
                    </div>

                    <RouterLink :to="{ name: 'admin-calendar' }"  class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <i class="fas fa-calendar-alt mr-2"></i>Calendario de citas
                    </RouterLink>

                    <RouterLink :to="{ name: 'admin-listBarber' }"  class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <i class="fas fa-users mr-2"></i>Administrar barberos
                    </RouterLink>

                    <RouterLink :to="{ name: 'list-services' }"  class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <i class="fas fa-cogs mr-2"></i>Administrar servicios
                    </RouterLink>

                    <RouterLink :to="{ name: 'admin-appointments' }"  class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <i class="fas fa-list-alt mr-2"></i>Ver todas las citas
                    </RouterLink>

                </div>

                <div class="ml-10 flex items-baseline space-x-4">
                    <p class="text-white text-right"> <i class="fas fa-user mr-2"></i> {{ user.getUserName }}</p>
                    <button type="button"
                        class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                        @click="user.logout"> <i class="fas fa-sign-out-alt"></i>
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
            <li><a class="format rounded-md text-md font-medium text-gray-300" href="#">
                    <RouterLink :to="{ name: 'admin-calendar' }"
                        class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <i class="fas fa-calendar-alt mr-2"></i>Calendario de citas
                    </RouterLink>
                </a></li>
            <li><a class="format rounded-md text-md font-medium text-gray-300" href="#">
                    <RouterLink :to="{ name: 'admin-listBarber' }"
                        class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <i class="fas fa-users mr-2"></i>Administrar barberos
                    </RouterLink>
                </a></li>
            <li><a class="format rounded-md text-md font-medium text-gray-300" href="#">
                    <RouterLink :to="{ name: 'list-services' }"
                        class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <i class="fas fa-cogs mr-2"></i>Administrar servicios
                    </RouterLink>
                </a></li>
            <li><a class="format rounded-md text-md font-medium text-gray-300" href="#">
                    <RouterLink :to="{ name: 'admin-appointments' }"
                        class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <i class="fas fa-list-alt mr-2"></i>Ver todas las citas
                    </RouterLink>
                </a></li>
            <li><a class="no-underline text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <i class="fas fa-user mr-2"></i>
                    ¡Bienvenido! 
                    <!-- {{ user.getUserName }} -->
                </a></li>
            <li><a> <button type="button"
                        class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
                        @click="user.logout">
                        Cerrar sesión
                    </button></a></li>
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
    height: 80px;
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
    margin-top: -55px;
}

nav ul {
    float: right;
    margin-right: 20px;
}

nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
}

nav ul li a {
    color: #EFEFEF;
    font-size: 16px;
    padding: 7px 5px;
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