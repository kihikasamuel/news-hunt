import axios, { type AxiosInstance} from 'axios';
import NProgress from 'vue-nprogress-ts'

const http: AxiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        "Content-Type": "application/json",
        "Authorization": import.meta.env["VITE_NEWS_API_KEY"]
    },
    timeout: 10_000
});

const nprogress = new NProgress();

http.interceptors.request.use(config => {
    nprogress.start();
    return config;
});

http.interceptors.response.use(response => {
    return response
})

export default http