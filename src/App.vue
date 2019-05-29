<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-snackbar
      v-model="snackbar"
      bottom
      right
      :color="snack_color"
    >
      {{ snack_text }}
      <v-btn
        flat
        color="white"
        @click="snackbar = false"
        icon
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import {eventBus} from './main';

export default {
  name: 'App',
  data () {
    return {
      snackbar: false,
      snack_text: '',
      snack_color: 'success'
    }
  },
  created() {
    eventBus.$on('showSnackbar', (data) => {
      let text = data.text;
      let color = data.color;
      this.showSnackBar(text, color);
    });
  },
  methods: {
    showSnackBar(text, color) {
      this.snack_text = text;
      this.snack_color = color;
      this.snackbar = true;
    }
  }
}
</script>
