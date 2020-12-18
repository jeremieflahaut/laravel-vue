<template>
    <div>
        <app-bar></app-bar>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    components: {
        AppBar: () => import(/* webpackChunkName: "js/chunks/components/Layout" */'./AppBar')
    }
};
</script>

