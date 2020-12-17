import Vue from 'vue'
import router from './app/router'
import vuetify from './app/vuetify'
import Api from './app/api'

import App from './app.vue'

window._ = require('lodash');

Vue.prototype.$http = Api

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    vuetify
});
