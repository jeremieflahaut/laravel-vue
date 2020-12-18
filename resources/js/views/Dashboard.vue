<template>
    <div>

        <app-bar></app-bar>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>
<script>

export default {
    mounted() {
        this.$http.get('/user')
            .then(response => {
                this.user = response.data;
            })
            .catch(error => {
                this.$router.push({ name: 'Login'});
            })
    },
    data() {
        return {
            user: null,
        }
    },
    components: {
        AppBar: () => import(/* webpackChunkName: "js/chunks/components/Layout" */'../Layout/AppBar')
    }
};
</script>

