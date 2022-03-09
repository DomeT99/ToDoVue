<template>
  <v-container>
    <banner>Prendi nota</banner>
    <pop-up-alert
      @CloseAlert="showPopup = $event"
      :dialog="showPopup"
    ></pop-up-alert>
    <text-area @ShowAlert="showPopup = $event" :notes="notesViews"></text-area>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import TextArea from "../components/NotesTextArea.vue";
import PopUpAlert from "../components/PopUpAlert.vue";
export default {
  components: {
    Banner,
    TextArea,
    PopUpAlert,
  },
  data() {
    return {
      notesViews: localStorage.getItem("Notes") || "",
      showPopup: false,
    };
  },
};
</script>
