import http from '@/http-common';

class Service {
    getAll(param: string): Promise<any>{
        return http.get(`/everything?q=${param}`)
    }
}

export default new Service()