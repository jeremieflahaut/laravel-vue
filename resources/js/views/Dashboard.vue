<template>
    <div>
        <div v-if="user">
            <a class="" @click="logout">Logout</a>
            <span>Hello {{user.name}}</span>
        </div>
    </div>
</template>
<script>

export default {
    computed: {},
    data() {
        return {
            user: null
        }
    },
    mounted() {
        this.$http.get('/user')
            .then(response => {
                this.user = response.data;
            })
            .catch(error => {
                this.$router.push({ name: 'Login'});
            })
    },

    methods: {
        logout() {
            this.$http.post('/logout').then(() => {
                localStorage.removeItem('auth');
                this.$router.push({ name: 'Login' })
            })
        }
    }
};
</script>