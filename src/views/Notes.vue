<template>
  <v-container>
    <banner>Prendi nota</banner>
    <pop-up-alert @CloseAlert="showPopup = $event" :dialog="showPopup">
      La sezione note è vuota</pop-up-alert
    >
    <pop-up-choose
      :trueFunc="onDelete"
      @CloseChoose="showChoose = $event"
      :dialog="showChoose"
      >Sei sicuro di voler eliminare gli appunti?</pop-up-choose
    >
    <section v-if="showLoading">
      <loading-circle></loading-circle>
    </section>
    <section v-else>
      <text-area
        @showLoad="onShowLoad"
        @OpenPop="showChoose = $event"
        @ShowAlert="showPopup = $event"
        :notes="notesViews"
      >
      </text-area>
    </section>
  </v-container>
</template>

<script>
import Banner from "../components/common/Banner.vue";
import TextArea from "../components/common/NotesTextArea.vue";
import PopUpAlert from "../components/common/PopUpAlert.vue";
import LoadingCircle from "../components/common/LoadingCircle.vue";
import PopUpChoose from "../components/common/PopUpChoose.vue";
import Vue from "vue";

export default {
  components: {
    Banner,
    TextArea,
    PopUpAlert,
    LoadingCircle,
    PopUpChoose,
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false;
    }, 500);
  },
  data() {
    return {
      notesViews: localStorage.getItem("Notes") || "",
      showPopup: false,
      showLoading: true,
      showChoose: false,
      openSnack: false,
    };
  },
  methods: {
    onDelete() {
      this.showChoose = false;
      localStorage.clear("Notes");
      this.notesViews = "";
    },
    onShowLoad(val) {
      this.showLoading = val;
      setTimeout(() => {
        this.showLoading = false;
      }, 500);
      Vue.nextTick(() => {
        this.notesViews = localStorage.getItem("Notes");
      });
    },
  },
};
</script>
