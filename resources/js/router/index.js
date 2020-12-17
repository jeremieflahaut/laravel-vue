import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Dashboard from '../views/Dashboard'



Vue.use(Router)

const routes = [
    {
        path: "/",
        redirect: { name: 'Login' }
    },
    {
        path: "/login",
        name: 'Login',
        component: Login,
        meta: { guestOnly: true }
    },
    {
        path: "/dashboard",
        name: 'Dashboard',
        component: Dashboard,
        meta: { authOnly: true}
    }
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes

})

function isLoggedIn() {
    return localStorage.getItem('auth');
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isLoggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.guestOnly)) {
        if (isLoggedIn()) {
            next({
                path: '/dashboard',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    }
    else {
        next() // make sure to always call next()!
    }
});

export default router