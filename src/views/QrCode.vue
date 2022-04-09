<template>
  <v-container>
    <Banner>Genera un QR Code</Banner>
    <PopUpAlert @CloseAlert="showPopup = $event" :dialog="showPopup"
      >Non è stato inserito nessun testo da convertire</PopUpAlert
    >
    <section v-if="showLoading">
      <LoadingCircle />
    </section>
    <section v-else>
      <InputQrCode
        @ShowAlert="showPopup = $event"
        @GeneraQr="txtQr = $event"
      ></InputQrCode>
      <QRCodeGen :txtQrcode="txtQr"></QRCodeGen>
    </section>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import InputQrCode from "../components/InputQrCode.vue";
import QRCodeGen from "../components/QRCodeGen.vue";
import LoadingCircle from "../components/LoadingCircle.vue";
import PopUpAlert from "../components/PopUpAlert.vue";
export default {
  components: {
    Banner,
    InputQrCode,
    QRCodeGen,
    LoadingCircle,
    PopUpAlert,
  },
  data() {
    return {
      txtQr: "Ciao User!",
      showLoading: true,
      showPopup: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false;
    }, 800);
  },
};
</script>
