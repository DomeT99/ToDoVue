<template>
  <!-- SEZIONE COSE DA FARE -->
  <!-- Questa la sezione dedicata alle cose da fare
       Vengono richiamati alcuni componenti(vedere lo script sotto),che svolgono diverse funzioni  -->
  <v-container>
    <banner :iconList="icona">Cosa farai oggi?</banner>
    <pop-up-alert @CloseAlert="showPopup = $event" :dialog="showPopup"
      >Non è stato inserito alcun impegno</pop-up-alert
    >

    <input-element
      @ShowAlert="showPopup = $event"
      @WriteItem="todos.push($event)"
    ></input-element
    ><!-- Input element è sicuramente quello più importante, tramite questo viene inserita la voce -->
    <section v-if="showLoading">
      <loading-circle></loading-circle>
    </section>
    <section v-else>
      <card :deleteItem="deleteItem" :items="todos"></card
      ><!-- E la card è il "contenitore" della voce inserita -->
    </section>
  </v-container>
</template>
<script>
import Banner from "../components/common/Banner.vue";
import InputElement from "../components/common/InputElement.vue";
import Card from "../components/common/ItemInsert.vue";
import LoadingCircle from "../components/common/LoadingCircle.vue";
import PopUpAlert from "../components/common/PopUpAlert.vue";
export default {
  name: "ToDo",
  mounted() {
    setTimeout(() => {
      this.showLoading = false;
    }, 800);
  },
  data() {
    return {
      icona: "mdi-checkbox-marked-circle-outline",
      todos: JSON.parse(localStorage.getItem("itemToDo")) || [],
      showPopup: false,
      showLoading: true,
    };
  },
  methods: {
    deleteItem(id) {
      /* Funzione delete che viene passata come props alla card */
      /* Filtra in base all'indice gli elementi che hanno l'id uguale al parametro passato dalla funzione */
      const itemIndex = this.todos.findIndex((item) => item.id === id);
      this.todos.splice(itemIndex, 1);
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(newValue) {
        /* Il watch tiene conto di ciò che cambia quando vengono invocate le funzioni di eliminazione e scrittura */
        localStorage.setItem("itemToDo", JSON.stringify(newValue));
      },
    },
  },
  components: {
    Banner,
    InputElement,
    Card,
    PopUpAlert,
    LoadingCircle,
  },
};
</script>
