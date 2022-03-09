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
      <v-col class="d-flex justify-center" cols="6">
        <ButtonSave :saveElement="onSave">Salva</ButtonSave>
      </v-col>
      <v-col class="d-flex justify-center" cols="6">
        <ButtonSave :saveElement="onDelete">Cancella</ButtonSave>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import ButtonSave from "../components/NotesButtonSave.vue";
export default {
  props: {
    notes: String,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    onSave() {
      if (this.notes == "") {
        this.show = true;
        this.$emit("ShowAlert", this.show);
      } else {
        localStorage.setItem("Notes", this.notes);
      }
    },
    onDelete() {
      this.notes = "";
      localStorage.clear("Notes");
    },
  },
  components: {
    ButtonSave,
  },
};
</script>
