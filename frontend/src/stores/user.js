import { ref, onMounted, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import AuthAPI from '../api/AuthAPI';

export const useUserStore = defineStore('user', () => {
  const router = useRouter();
  const user = ref({});
  const isLoggedIn = ref(false); // Agregar propiedad isLoggedIn

  onMounted(async () => {
    try {
      const { data } = await AuthAPI.auth();
      user.value = data;
      isLoggedIn.value = true; // Actualizar el estado de isLoggedIn a true
    } catch (error) {
      console.log(error);
      isLoggedIn.value = false; // Actualizar el estado de isLoggedIn a false en caso de error
    }
  });

  function logout() {
    localStorage.removeItem('AUTH_TOKEN');
    user.value = {};
    isLoggedIn.value = false; // Actualizar el estado de isLoggedIn a false al cerrar sesión
    router.push({ name: 'login' });
  }

  const getUserName = computed(() => user.value?.name ? user.value?.name : '');

  return {
    user,
    logout,
    getUserName,
    isLoggedIn // Agregar la propiedad isLoggedIn a la devolución
  };
});
