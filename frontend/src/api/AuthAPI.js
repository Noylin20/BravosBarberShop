import api from '../lib/axios';
const AUTH_TOKEN = 'AUTH_TOKEN';

export default {
    register(data){
        return api.post('/auth/register', data)
    },
    verifyAccount(token){
       return api.get(`/auth/verify/${token}`)
    },
    login(data){
       return api.post('/auth/login', data)
    },
    auth(){
        console.log('probando ' + localStorage.getItem('AUTH_TOKEN'));

        const token = localStorage.getItem('AUTH_TOKEN')
       console.log('este es el token' + token)
        return api.get('/auth/user', {
            headers:{
                
                Authorization: `Bearer ${token}`
            }
          
        })
    }
}
