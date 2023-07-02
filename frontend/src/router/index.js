import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppointmentsLayout from '../views/appointments/AppointmentsLayout.vue'
import AuthAPI from '../api/AuthAPI'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/contact',
      name:'contact',
      component:()=> import('../views/Contact.vue')
    },
    {
      path:'/about',
      name:'about',
      component:()=> import('../views/About.vue')
    },
    {
      path:'/branch',
      name:'branch',
      component:()=> import('../views/Branch.vue')
    },
    {
      path:'/seeMore',
      name:'seeMore',
      component:()=> import('../views/SeeMore.vue')
    },
    {
      path:'/services',
      name:'services',
      component:()=> import('../views/Services.vue')
    },
    {
      path: '/reservaciones',
      name: 'appointments',
      component: AppointmentsLayout,
      meta:{requiresAuth:true},
      children: [
        {
          path:'',
          name:'my-appointments',
          component:()=> import('../views/appointments/MyAppointmentsView.vue')
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
        }
      ]
    },
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
    
        }
      ]
    }

  ]
})

router.beforeEach(async (to, from, next)=>{
  const requiresAuth = to.matched.some(url =>url.meta.requiresAuth)
  if(requiresAuth){
    try {

      await AuthAPI.auth()
      next()
              
    } catch (error) {
      next({name:'login'})
      console.log('++++++++++++')
    }
  }else{
    next()
  }
  

  
})//antes de mostrar información, verificar que se inició sesión

export default router
