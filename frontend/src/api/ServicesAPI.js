import api from "../lib/axios";

export default {
    all(){
        return api.get('/services')
    },
    createService(data){
        return api.post('/services', data)
    }
}
