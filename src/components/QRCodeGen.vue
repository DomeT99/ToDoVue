<template>
  <v-main>
    <div class="flex-center">
      <v-card class="mx-auto" max-width="344">
        <v-card-title>Il tuo QR Code</v-card-title>
        <v-card-text>{{ qrcode }}</v-card-text>
      </v-card>
    </div>
  </v-main>
</template>

<script>
export default {
  props: {
    qrcode: Object,
  },
};
</script>
