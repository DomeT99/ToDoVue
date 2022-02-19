<template>
  <v-container>
    <banner :iconList="icona">Cosa farai oggi?</banner>
    <input-element @WriteItem="todos.push($event)"></input-element>
    <card :deleteItem="deleteItem" :items="todos"></card>
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
      todos: JSON.parse(localStorage.getItem("itemToDo")) || [],
    };
  },
  methods: {
    deleteItem(id) {
      const itemIndex = this.todos.findIndex(item => item.id === id);
      this.todos.splice(itemIndex, 1);
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("itemToDo", JSON.stringify(newValue));
      },
    },
  },
  components: {
    Banner,
    InputElement,
    Card,
  },
};
</script>
