<script setup>
  import {inject} from 'vue'
  import {useRouter} from 'vue-router'
  import AuthAPI from '../../api/AuthAPI'

  const toast = inject('toast')
  const router = useRouter()

  const handleSubmit = async(formData)=>{
    //el usuario inicia sesión, almacena el token y se redirige a sus citas
    try{
      //console.log(formData)

     const{data:{token}}= await AuthAPI.login(formData)
     localStorage.setItem('AUTH_TOKEN', token)
     router.push({name: 'my-appointments'})
    }catch (error){
      message: error.response.data.msg
      type: 'error'
    }
  }




</script>
  

  <template>

     <h1 class="text-4xl font-extrabold text-black text-center mt-10">Iniciar sesión</h1>
      <p class="text-1xl text-black text-center my-3 ">Inicia sesión en Barbería Bravo´s</p>

      <FormKit id="loginForm" type="form" :actions="false" incomplete-message="No se pudo enviar, revisa las notificaciones"
         @submit="handleSubmit">

        
          <FormKit type="email" name="email" placeholder="Correo de usuario" validation="required||email"
              :validation-messages="{
                  required: 'El email es obligatorio',
                 email: 'Email no válido'
             }" />

          <FormKit type="password" name="password" placeholder="Constraseña de usuario"
             validation="required" :validation-messages="{
                  required: 'La contraseña es obligatoria'
              }" />

          <FormKit type="submit">Iniciar Sesión</FormKit>
      </FormKit>
</template>
