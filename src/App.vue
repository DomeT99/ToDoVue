<template>
  <v-app>
    <v-main> 
      <app-nav-bar></app-nav-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavBar from "./components/AppNavBar.vue";
export default {
  name: "App",
  components: { AppNavBar },
};
AppNavBar;
</script>
