import api from "../lib/axios";

export default {
    all(){
        return api.get('/users')
    },
    createUser(data){
        return api.post('/users', data)
    }
}
