
<script setup>
import { onMounted, inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import AuthAPI from '../../api/AuthAPI';

const toast = inject('toast')
const router = useRouter()
const route = useRoute()
const { token } = route.params

const validToken = ref(false)

onMounted(async () => {
    try {
        const { data } = await AuthAPI.verifyPasswordResetToken(token)
        validToken.value = true
    } catch (error) {
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
})

const handleSubmit = async ({ password }) => {
    try {
        const { data } = await AuthAPI.updatePassword(token, { password })
        validToken.value = true
        toast.open({
            message: data.msg,
            type: 'success'
        })
        setTimeout(() => {
            router.push({ name: 'login' })
        }, 3000)
    } catch (error) {
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
}
</script>
<template>
    <div v-if="validToken">
        <h1 class="text-4xl font-extrabold text-black text-center mt-10">Nueva contraseña</h1>
        <p class="text-1xl text-black text-center my-3 ">Escriba su nueva contraseña</p>

        <FormKit id="newPasswordForm" type="form" :actions="false"
            incomplete-message="No se pudo enviar, revisa las notificaciones" @submit="handleSubmit">

            <FormKit type="password" name="password" placeholder="Constraseña de usuario - Min 8 caracteres"
                validation="required||length:8" :validation-messages="{
                    required: 'La contraseña es obligatoria',
                    email: 'La contraseña debe contener al menos 8 caracteres'
                }" />

            <FormKit type="submit">Guardar nueva contraseña</FormKit>


        </FormKit>
    </div>

    <p v-else class="text-center text-2xl font-black text-black">Token no válido</p>
</template>