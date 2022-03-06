<template>
  <v-container>
    <banner>Prendi nota</banner>
    <text-area></text-area>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import TextArea from "../components/NotesTextArea.vue";
export default {
  components: {
    Banner,
    TextArea,
  },
};
</script>
