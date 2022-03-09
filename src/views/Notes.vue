<template>
  <v-container>
    <banner>Prendi nota</banner>
    <pop-up-alert @CloseAlert="showPopup = $event" :dialog="showPopup">
      La sezione note è vuota</pop-up-alert
    >
    <section v-if="showLoading">
      <loading-circle></loading-circle>
    </section>
    <section v-else>
      <text-area @ShowAlert="showPopup = $event" :notes="notesViews">
      </text-area>
    </section>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import TextArea from "../components/NotesTextArea.vue";
import PopUpAlert from "../components/PopUpAlert.vue";
import LoadingCircle from "../components/LoadingCircle.vue";
export default {
  components: {
    Banner,
    TextArea,
    PopUpAlert,
    LoadingCircle,
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false;
    },500);
  },
  data() {
    return {
      notesViews: localStorage.getItem("Notes") || "",
      showPopup: false,
      showLoading: true,
    };
  },
};
</script>
