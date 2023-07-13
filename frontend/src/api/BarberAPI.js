import api from "../lib/axios";

export default {
    all(){
        return api.get('/barbers')
    },
    createBarber(data){
        return api.post('/barbers', data)
    },
    deleteBarber(id){
        return api.delete(`/barbers/${id}`)
    },getBarberById(id){
        return api.get(`/barbers/${id}`)
    }

}
