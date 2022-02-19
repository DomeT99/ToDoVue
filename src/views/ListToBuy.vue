<template>
  <v-container>
    <banner :iconList="icona">Cosa comprerai oggi?</banner>
    <input-element @WriteItem="buys.push($event)"></input-element>
    <card :deleteItem="deleteItem" :items="buys"></card>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import InputElement from "../components/InputElement.vue";
import Card from "../components/ItemInsert.vue";
export default {
  name: "ToBuy",
  data() {
    return {
      icona: "mdi-cart",
      buys: JSON.parse(localStorage.getItem("itemToBuy")) || [],
    };
  },
  methods: {
    deleteItem(id) {
      const itemIndex = this.buys.findIndex((item) => item.id === id);
      this.buys.splice(itemIndex, 1);
    },
  },
  components: {
    Banner,
    InputElement,
    Card,
  },
  watch: {
    buys: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("itemToBuy", JSON.stringify(newValue));
      },
    },
  },
};
</script>
