<template>
  <v-main>
    <div class="flex-center">
      <v-card class="mx-auto" max-width="344">
        <vue-qr :text="txtQrcode" :size="200"></vue-qr>
      </v-card>
    </div>
  </v-main>
</template>

<script>
import VueQr from "vue-qr/src/packages/vue-qr.vue";

export default {
  props: {
    txtQrcode: String,
  },
  components: { VueQr },
};
</script>
