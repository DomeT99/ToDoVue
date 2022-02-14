<template>
  <v-container>
    <banner :iconList="icona">Cosa farai oggi?</banner>
    <input-element></input-element>
    <card></card>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import InputElement from "../components/InputElement.vue";
import Card from "../components/ItemInsert.vue";
export default {
  name: "ToDo",
  data() {
    return {
      icona: "mdi-checkbox-marked-circle-outline",
      
    };
  },
  components: {
    Banner,
    InputElement,
    Card,
  },
};
</script>
