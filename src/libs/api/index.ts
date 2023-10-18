import axios from 'axios';
import { base_url } from '../constants';

export const spotiApi = axios.create({baseURL: base_url})

spotiApi.interceptors.request.use(config => {
        const token = JSON.parse(localStorage.getItem('token')!)
        
        if(token ){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }
)
