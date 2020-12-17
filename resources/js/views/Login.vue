<template>
    <v-container>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="form.email" label="Email" required></v-text-field>
                        <v-alert dense outlined type="error" v-if="errors.email">{{ errors.email[0] }}</v-alert>
                        <v-text-field v-model="form.password" label="Password" required></v-text-field>
                        <v-alert dense outlined type="error" v-if="errors.password">{{ errors.password[0] }}</v-alert>
                        <v-btn @click="login" class="mr-4">Login</v-btn>
                        <v-btn @click="reset">Reset</v-btn>
                    </v-col>
                </v-row>
            </v-container>

        </v-form>
    </v-container>
</template>
<script>

export default {

    data() {
        return {
            valid: true,
            form: {
                email: '',
                password: ''
            },
            errors: []
        }
    },
    computed: {},
    methods: {
        login() {
            this.$http.post('/login', this.form)
                .then(() => {
                    localStorage.setItem('auth', 'true');
                    this.$router.push({name: 'Dashboard'});
                })
                .catch(error => {
                if(error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            })
        },
        reset() {
            this.form.email = ''
            this.form.password = ''
            this.errors = []
        }
    }
};
</script>