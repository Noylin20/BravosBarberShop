import { ref, onMounted, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import AuthAPI from '../api/AuthAPI';
import AppointmentAPI from '../api/AppointmentAPI';
import UserAPI from '../api/UserAPI';

export const useUserStore = defineStore('user', () => {
  const router = useRouter();
  const user = ref({});
  const userAppointments = ref([])
  const userAdmins = ref([])
  const loading = ref(true)
  const isLoggedIn = ref(false); // Agregar propiedad isLoggedIn
  
  // const isPageLoaded = ref(false); // Variable para controlar si la página ya se cargó una vez

  onMounted(async () => {
    try {
      const { data } = await AuthAPI.auth();
      user.value = data;
      await getUserAppointments();
      await getUser();
      isLoggedIn.value = true; // Actualizar el estado de isLoggedIn a true
      console.log(isLoggedIn)
  
      // if (!isPageLoaded.value) {
      //   isPageLoaded.value = true; // Marcar la página como cargada
      //   router.push(router.currentRoute.value); // Redirigir a la misma ruta para que se actualice la página
      // }
    } catch (error) {
      console.log(error);
      isLoggedIn.value = false; // Actualizar el estado de isLoggedIn a false en caso de error
    } finally {
      loading.value = false;
    }
  });

async function getUserAppointments(){
  const {data} = await AppointmentAPI.getUserAppointments(user.value._id)
  userAppointments.value = data
}

async function getUser(){
  const {data} = await UserAPI.getUser()
  userAdmins.value = data
}

  function logout() {
    localStorage.removeItem('AUTH_TOKEN');
    user.value = {};
    isLoggedIn.value = false; // Actualizar el estado de isLoggedIn a false al cerrar sesión
    console.log(isLoggedIn)
    router.push({ name: 'login' });
  }

  const getUserName = computed(() => user.value?.name ? user.value?.name : '');
  const noAppointments = computed(() => userAppointments.value.length === 0)
  return {
    
    user,
    userAppointments,
    getUserAppointments,
    loading,
    logout,
    userAdmins,
    getUser,
    getUserName,
    isLoggedIn, // Agregar la propiedad isLoggedIn a la devolución
    noAppointments
  };
});
