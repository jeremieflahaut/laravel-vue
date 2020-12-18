<template>
    <v-app-bar dense>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click.prevent="sidebar = !sidebar"></v-app-bar-nav-icon>
        <v-navigation-drawer v-model="sidebar" app hide-overlay temporary>
            <v-list>
                <v-list-item v-for="(item, i) in menuItems" exact :key="i" :to="item.path">{{item.title}}</v-list-item>
                <v-list-item @click.prevent="logout">Logout </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar-title>Jarvis</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text v-for="item in menuItems" :key="item.title">
                <router-link tag="li" :to="item.path">{{item.title}}</router-link>
            </v-btn>
            <v-btn text @click.prevent="logout">Logout</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            sidebar: false,
            menuItems: [
                { path: "/dashboard/covid-19", name: "covid-19", title: "Covid-19" },
            ]
        }
    },
    methods: {
        logout() {
            this.$http.post('/logout').then(() => {
                localStorage.removeItem('auth');
                this.$router.push({ name: 'Login' })
            })
        }
    }
}
</script>

<style scoped>

li {
    list-style-type: none;
    text-decoration: none;
}

</style>