<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">
      <v-card height="200">
        <v-card-title class="text-h5">Attenzione </v-card-title>
        <v-card-text
          ><slot>{{ bodyText }}</slot></v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-row align-content-sm="center">
            <v-col class="d-flex justify-center" cols="4"
              ><v-btn color="amber lighten-2" text @click="trueFunc">
                Sì
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-center" cols="4">
              <v-btn color="amber lighten-2" text @click="closePopUp">
                No
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: {
    trueFunc: {
      type: Function,
      required: true,
    },
    dialog: {
      type: Boolean,
      required: true,
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
      this.$emit("CloseChoose", this.noShow);
    },
  },
};
</script>
