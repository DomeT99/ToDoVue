<template>
  <!-- App.vue è il cuore dell'applicazione, da qua viene gestito principalmente l'instradamento(vedi router)
       e si occupa di visualizzare le varie viste a seconda della path scelta tramite i bottoni -->
  <v-app>
    <v-main>
      <app-nav-bar></app-nav-bar><!-- Questo è il componente navbar che viene richiamato nello script e tramite questo è possibile navigare -->
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
