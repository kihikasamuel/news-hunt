import http from '@/http-common';

class Service {
    getAll(query: string, page_size: number, page_number: number, sort_term: string): Promise<any>{
        return http.get(`/everything?q=${query}&pageSize=${page_size}&page=${page_number}&sortBy=${sort_term}`)
    }
}

export default new Service()