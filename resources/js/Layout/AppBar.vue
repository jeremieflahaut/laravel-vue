<template>
    <v-app-bar dense dark color="primary">
        <v-app-bar-nav-icon class="" @click.prevent="sidebar = !sidebar"></v-app-bar-nav-icon>
        <v-navigation-drawer v-model="sidebar" app hide-overlay temporary light>
            <v-list-item class="text-center">
                <v-list-item-content>
                    <v-list-item-title>{{ name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item exact to="/dashboard">
                    <v-list-item-title>Accueil</v-list-item-title>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-group>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>Divers</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item exact to="/dashboard/covid-19">
                        <v-list-item-icon>
                            <v-icon>mdi-hospital-box-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Covid-19</v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block @click.prevent="logout" color="primary">Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-toolbar-title>Jarvis</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    created() {
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
            sidebar: false,
            user: {},
        }
    },
    computed: {
        name() {
            return this.user.name ? this.user.name : '';
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