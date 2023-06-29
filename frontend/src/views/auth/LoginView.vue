<script setup>
  import {inject} from 'vue'
  import AuthAPI from '../../api/AuthAPI'

  const toast = inject('toast')

  const handleSubmit = async(formData)=>{
    try{

      const{data}= await AuthAPI.login(formData)
      console.log(data)
    }catch (error){
      message: error.response.data.msg
      type: 'error'
  }
}
</script>
  

  <template>
    <h1 class="text-4xl font-extrabold text-black text-center mt-10">Iniciar sesión</h1>
    <p class="text-1xl text-black text-center my-3 ">Inicia sesión en Barbería Bravo´s</p>

    <FormKit id="registerForm" type="form" :actions="false" incomplete-message="No se pudo enviar, revisa las notificaciones"
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
