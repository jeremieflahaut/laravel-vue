import Vue from 'vue';
import axios from 'axios';
import Cookie from 'js-cookie'

const Api = new Vue({
    created() {
        this.api = axios.create({
            baseURL: 'http://localhost/api'
        });
        this.api.defaults.withCredentials = true;
    },
    data() {
        return {
            api: null,
        }
    },
    methods: {
        async get(url) {
            await this.getCookie();
            return this.api.get(url);
        },
        async post(url, data) {
            await this.getCookie();
            return this.api.post(url, data);
        },
        async put(url, data) {
            await this.getCookie();
            return this.api.put(url, data);

        },
        getCookie() {
            let token = Cookie.get('XSRF-TOKEN');

            if(token) {
                return new Promise(resolve => {
                    resolve(token);
                })
            }

            return this.api.get('/csrf-cookie');
        }

    }
});

export default Api;