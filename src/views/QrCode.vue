<template>
  <v-container>
    <Banner>Genera un QR Code</Banner>
    <InputQrCode @GeneraQr="txtQr = $event"></InputQrCode>

    <QRCodeGen :txtQrcode="txtQr"></QRCodeGen>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import InputQrCode from "../components/InputQrCode.vue";
import QRCodeGen from "../components/QRCodeGen.vue";
export default {
  components: {
    Banner,
    InputQrCode,
    QRCodeGen,
  },
  data() {
    return {
      txtQr: "Ciao User!",
    };
  },
};
</script>
