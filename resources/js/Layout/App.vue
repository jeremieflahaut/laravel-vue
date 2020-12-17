<template>
    <v-app>
        <v-main>
            <v-toolbar dark>
                <v-toolbar-title>Jarvis</v-toolbar-title>
            </v-toolbar>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </v-main>
    </v-app>
</template>
<script>

export default {
    computed: {},
    data() {
        return {}
    }
};
</script>