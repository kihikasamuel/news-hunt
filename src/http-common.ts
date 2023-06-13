import axios, { type AxiosInstance} from 'axios';

const http: AxiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2",
    headers: {
        "Content-Type": "application/json",
        "Authorization": import.meta.env["VITE_NEWS_API_KEY"]
    },
});

export default http