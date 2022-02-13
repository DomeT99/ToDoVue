<template>
  <v-container>
    <banner :iconList="icona">Cosa farai oggi?</banner>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
export default {
  name: "ToDo",
  data() {
    return {
      icona: "mdi-checkbox-marked-circle-outline"
    };
  },
  components: {
    Banner,
  },
};
</script>
