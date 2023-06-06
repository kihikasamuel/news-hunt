import axios, { type AxiosInstance} from 'axios';

const http: AxiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "dad5e5f7d8df46daad21459c765838aa"
    },
    // params: {
    //     apiKey: "dad5e5f7d8df46daad21459c765838aa"
    // }
});

export default http