<template>
  <v-container>
    <banner :iconList="icona">Cosa comprerai oggi?</banner>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
export default {
  name: "ToBuy",
  data() {
    return {
      icona: "mdi-cart",
    };
  },
  components: {
    Banner,
  },
};
</script>
