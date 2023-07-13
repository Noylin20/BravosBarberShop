import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthLayout from '../views/auth/AuthLayout.vue'

import AppointmentsLayout from '../views/appointments/AppointmentsLayout.vue'
import AuthAPI from '../api/AuthAPI'
import ServicesLayout from '../views/servicesManagement/ServicesLayout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      meta: { requiresAdmin: true },
      children: [
        {
          path: '',
          name: 'admin-appointments',
          component: () => import('../views/admin/AppointmentsView.vue'),

        },///////PRUEBA
        {
          path: '/users',
          name: 'users',
          component: () => import('../views/admin/AppointmentsView.vue')
        },
        {
          path: '',
          name: 'admin-createBarber',
          component: () => import('../views/admin/NewBarberView.vue'),

        },
        {
          path: '',
          name: 'admin-listBarber',
          component: () => import('../views/admin/AdminUserListView.vue'),

        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/branch',
      name: 'branch',
      component: () => import('../views/Branch.vue')
    },
    {
      path: '/seeMore',
      name: 'seeMore',
      component: () => import('../views/SeeMore.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/reservaciones',
      name: 'appointments',
      component: AppointmentsLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'my-appointments',
          component: () => import('../views/appointments/MyAppointmentsView.vue')
        },
        {
          path: 'nueva',
          component: () => import('../views/appointments/NewAppointmentLayout.vue'),
          children: [
            {
              path: '',
              name: 'new-appointment',
              component: () => import('../views/appointments/ServicesView.vue')

            },
            {
              path: 'detalles',
              name: 'appointment-details',
              component: () => import('../views/appointments/AppointmentView.vue')
            },
          ]
        },
        {
          path: ':id/editar',
          component: () => import('../views/appointments/EditAppoinmentLayout.vue'),
          children: [
            {
              path: '',
              name: 'edit-appointment',
              component: () => import('../views/appointments/ServicesView.vue')

            },
            {
              path: 'detalles',
              name: 'edit-appointment-details',
              component: () => import('../views/appointments/AppointmentView.vue')
            },
          ]
        }
      ]
    },



    ///
    //Todo lo relacionado con la autenticación 

    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/AuthLayout.vue'),
      children: [
        {
          path: 'registro',
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue'),

        },
        {
          path: 'confirmar-cuenta/:token',
          name: 'confirm-account',
          component: () => import('../views/auth/ConfirmAccountView.vue'),

        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue'),

        },
        {
          path: 'olvide-password',
          name: 'forgot-password',
          component: () => import('../views/auth/ForgotPasswordView.vue'),

        },
        {
          path: 'olvide-password/:token',
          name: 'new-password',
          component: () => import('../views/auth/NewPasswordView.vue'),

        }
      ]
    },
    //Vistas de los servicios para los administradores 
    {
      path: '/servicesManagement',
      name: 'servicesM',
      component: () => ServicesLayout,
      children: [
        {
          path: '',
          name: 'services-list',
          component: () => import('../views/servicesManagement/ExistingServices.vue'),
        },
        {
          path: '',
          name: 'create-service',
          component: () => import('../views/servicesManagement/NewServiceLayout.vue'),
        }
      ]
    }

  ]
})


//Maneja logica de autenticación y rol del usuario 
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth);

  if (requiresAuth) {
    // console.log('requiresAuth' + AuthAPI.auth())

    try {
      const { data } = await AuthAPI.auth();
      if (data.admin) {
        next({ name: 'admin' })
      } else {
        next()
      }
    } catch (error) {
      next({ name: 'login' })
    }
  } else {
    next()
  }
});//antes de mostrar información, verificar que se inició sesión

//Previene el acceso hacia el panel de administrador 
router.beforeEach(async (to, from, next) => {
  const requiresAdmin = to.matched.some(url => url.meta.requiresAdmin);

  if (requiresAdmin) {
    try {
      await AuthAPI.admin()
      next()
    } catch (error) {
      next({ name: 'login' })
    }

  } else {
    next()
  }
});

export default router
