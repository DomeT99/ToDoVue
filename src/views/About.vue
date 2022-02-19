<template>
  <v-container>
    <about-social></about-social>
  </v-container>
</template>

<script>
import AboutSocial from "../components/AboutSocial.vue";
export default {
  name: "About",
  data() {
    return {
      portfolio: "https://domet99.github.io/",
    };
  },
  components: { AboutSocial },
  methods: {
    openPortfolio() {
      window.open(this.portfolio);
    },
  },
};
</script>
