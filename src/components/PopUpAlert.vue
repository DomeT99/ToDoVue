<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5">Attenzione </v-card-title>
        <v-card-text
          ><slot>{{ bodyText }}</slot></v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="amber lighten-2" text @click="closePopUp"> Ok </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
    },
    bodyText: {
      type: String,
    },
  },
  data() {
    return {
      noShow: false,
    };
  },
  methods: {
    closePopUp() {
      this.noShow = false;
      this.$emit("CloseAlert", this.noShow);
    },
  },
};
</script>
