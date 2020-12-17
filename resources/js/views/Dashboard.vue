<template>
    <div>
        <div v-if="user">
            <a class="" @click="logout">Logout</a>
            <span>Hello {{user.name}}</span>
        </div>
    </div>
</template>
<script>

import user from '../api/user';

export default {
    computed: {},
    data() {
        return {
            user: null
        }
    },
    mounted() {
        user.auth()
            .then(response => {
                this.user = response.data;
            })
            .catch(error => {
                this.$router.push({ name: 'Login'});
            })
    },

    methods: {
        logout() {
            user.logout().then(() => {
                localStorage.removeItem('auth');
                this.$router.push({ name: 'Login' })
            })
        }
    }
};
</script>