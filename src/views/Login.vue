<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 class="px-3">
        <v-card class="elevation-12">
          <v-toolbar dark color="success">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
                v-model="login_form.login">
              </v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Senha"
                type="password"
                v-model="login_form.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm8 md4 class="px-3">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Cadastrar</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="cadastro_form.login"
                type="text"
                label="Login"
              ></v-text-field>
              <v-text-field
                v-model="cadastro_form.password"
                type="password"
                label="Senha"
              ></v-text-field>
              <v-text-field
                v-model="cadastro_form.password_confirmation"
                type="password"
                label="Confirme a Senha"
              ></v-text-field>
              <v-text-field
                v-model="cadastro_form.name"
                type="text"
                label="Nome"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="cadastrar()">Cadastrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { eventBus } from '../main';

export default {
  data() {
    return {
      login_form: {
        login: '',
        password: ''
      },
      cadastro_form: {
        login: '',
        password: '',
        password_confirmation: '',
        name: ''
      }
    }
  },
  methods: {
    cadastrar() {
      this.$store.dispatch('register', this.cadastro_form);
    },
    login() {
      this.$store.dispatch('login', this.login_form);
    }
  }
}
</script>
