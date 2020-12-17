import axios from 'axios';

let api = axios.create({
    baseURL: 'http://localhost/api'
});

api.defaults.withCredentials = true;

export default api;