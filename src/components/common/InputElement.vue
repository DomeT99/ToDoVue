<template>
  <v-container class="m-top-20">
    <v-text-field
      background-color="amber lighten-2"
      color="black"
      solo
      v-model="label"
      append-icon="mdi-lead-pencil"
      clearable
      clear-icon="mdi-close-circle-outline"
      @click:append="writeItem"
    >
    </v-text-field>
  </v-container>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      label: "",
      show: false,
    };
  },
  methods: {
    writeItem() {
      if (this.label == "") {
        this.show = true;
        this.$emit("ShowAlert", this.show);
      } else {
        let todoObj = { id: _.uniqueId("item_"), label: this.label };
        this.$emit("WriteItem", todoObj);
        this.label = "";
      }
    },
  },
};
</script>
