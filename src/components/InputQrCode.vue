<template>
  <v-main>
    <v-row>
      <v-col cols="8">
        <v-text-field
          background-color="amber lighten-4"
          color="black"
          solo
          v-model="label"
          clearable
        >
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn
          background-color="amber lighten-4"
          color="amber lighten-2"
          min-height="48"
          elevation="4"
          @click="generaQrcode"
          >Genera</v-btn
        >
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      label: "",
      qrCode: {},
    };
  },
  methods: {},
};
</script>
