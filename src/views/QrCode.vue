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
      <QRCodeGen class="mb-8" :txtQrcode="txtQr"></QRCodeGen>
      <div class="d-flex justify-center">
        <ButtonSave :saveElement="downloadFile">Salva</ButtonSave>
      </div>
    </section>
  </v-container>
</template>

<script>
import Banner from "../components/Banner.vue";
import InputQrCode from "../components/InputQrCode.vue";
import QRCodeGen from "../components/QRCodeGen.vue";
import LoadingCircle from "../components/LoadingCircle.vue";
import PopUpAlert from "../components/PopUpAlert.vue";
import ButtonSave from "../components/NotesButtonSave.vue";
export default {
  components: {
    Banner,
    InputQrCode,
    QRCodeGen,
    LoadingCircle,
    PopUpAlert,
    ButtonSave,
  },
  data() {
    return {
      txtQr: "Ciao User!",
      showLoading: true,
      showPopup: false,
    };
  },
  methods: {
    downloadFile() {
      if (this.txtQr != "Ciao User!" && this.txtQr != "") {
        const image = document.querySelector("img").src;

        let newFile = this.dataURLtoFile(image, "image");

        const blob = new Blob([newFile], { type: "image/png" });
        const href = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement("a"), {
          href,
          style: "display:none",
          download: "QrCode.png",
        });
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(href);
        a.remove();
      } else {
        this.showPopup = true;
      }
    },
    //Converte la base64 in file
    dataURLtoFile(dataurl, filename) {
      debugger;
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
    },
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false;
    }, 800);
  },
};
</script>
