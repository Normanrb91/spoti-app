import axios from 'axios';
import { BASE_URL } from '../constants';

export const spotiApi = axios.create({baseURL: BASE_URL})

spotiApi.interceptors.request.use(config => {
        const token = JSON.parse(localStorage.getItem('token')!)
        
        if(token ){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }
)
