<template>
  <v-main app>
    <v-row>
      <v-col cols="12">
        <v-textarea
          solo
          label="Inizia a scrivere i tuoi appunti"
          no-resize
          height="250"
          v-model="notes"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row align-content-sm="center">
      <v-col class="d-flex justify-center" cols="12">
        <ButtonSave></ButtonSave>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import ButtonSave from "../components/NotesButtonSave.vue";
export default {
  data() {
    return {
      notes: "",
    };
  },
  components: {
    ButtonSave,
  },
};
</script>
