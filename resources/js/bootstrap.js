/* Import */
import Vue from 'vue'
import vuetify from './app/vuetify'
import router from './app/router'
import Api from './app/api'

/* Layout */
import App from './Layout/App'

window._ = require('lodash');
Vue.prototype.$http = Api

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    vuetify
});
