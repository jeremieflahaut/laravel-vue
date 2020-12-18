<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="4" md="4">
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Jarvis Sign In</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-text-field
                                v-model="form.email"
                                label="Email"
                                required
                            ></v-text-field>
                            <v-alert dense outlined type="error" v-if="errors.email">{{ errors.email[0] }}</v-alert>

                            <v-text-field
                                :type="show ? 'text' : 'password'"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="show = !show"
                                v-model="form.password"
                                label="Password"
                                required
                            ></v-text-field>
                            <v-alert dense outlined type="error" v-if="errors.password">{{ errors.password[0] }}</v-alert>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="primary" @click.prevent="login" class="mr-4">Login</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn text @click.prevent="reset">Reset</v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>

        </v-row>
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
            errors: [],
            show: false
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