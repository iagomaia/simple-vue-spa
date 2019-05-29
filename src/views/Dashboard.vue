<template>
  <v-content>
    <v-toolbar>
      <v-toolbar-title>
        {{$store.state.user.name}}
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          icon
          @click="logout()"
        >
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <ul>
      <li v-for="u in $store.state.users" :key="u.id">
        {{u.id}} - {{u.name}} - {{u.login}} - {{u.created_at | formatDate}}
      </li>
    </ul>
  </v-content>
</template>

<script>
export default {
  filters: {
    formatDate(date) {
      let formattedDate = '';
      formattedDate = date.substr(0, 10).split('-').reverse().join('/') + ' ' + date.substr(11, 8);
      return formattedDate;
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout');
    }
  },
  created() {
    this.$store.dispatch('fetchUsers');
  }
}
</script>