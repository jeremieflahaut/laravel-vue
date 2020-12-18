/* Import */
import Vue from 'vue'
import vuetify from './app/vuetify'
import router from './app/router'
import Api from './app/api'

window._ = require('lodash');
Vue.prototype.$http = Api

const app = new Vue({
    el: '#app',
    components: { App: () => import(/* webpackChunkName: "js/chunks/components/Layout" */'./Layout/App') },
    router,
    vuetify
});
