<template>
  <v-container>
    <banner :iconList="icona">Cosa comprerai oggi?</banner>
    <pop-up-alert @CloseAlert="showPopup = $event" :dialog="showPopup"
      >Non è stato inserito nulla da comprare</pop-up-alert
    >
    <input-element
      @ShowAlert="showPopup = $event"
      @WriteItem="buys.push($event)"
    ></input-element>
    <card :deleteItem="deleteItem" :items="buys"></card>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import InputElement from "../components/InputElement.vue";
import Card from "../components/ItemInsert.vue";
import PopUpAlert from "../components/PopUpAlert.vue";
export default {
  name: "ToBuy",
  data() {
    return {
      icona: "mdi-cart",
      buys: JSON.parse(localStorage.getItem("itemToBuy")) || [],
      showPopup: false,
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
    PopUpAlert,
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
