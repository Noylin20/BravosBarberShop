import api from "../lib/axios";

export default {
    all(){
        return api.get('/services')
    },
    createService(data){
        return api.post('/services', data)
    },
    deleteService(id){
        return api.delete(`/services/${id}`)
    }
}
