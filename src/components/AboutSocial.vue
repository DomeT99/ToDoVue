<template>
  <v-footer class="scale-animation" elevation="5" padless>
    <v-card flat tile class="amber lighten-2 text-center text--black">
      <v-card-text>
        <v-btn
          :href="icon.link"
          v-for="icon in icons"
          :key="icon"
          class="mx-4 text--black"
          icon
        >
          <v-icon size="24px">
            {{ icon.icona }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="text--black pt-0">
        <h3>Hei tu!</h3>
        <p style="line-height: 30px">
          Grazie per aver utilizzato quest'app, spero che l'esperienza sia stata
          gradevole. Seguimi sui i miei social, trovi i bottoni esattamente nel
          box sopra! Se hai delle domande, richieste o devi semplicemente
          segnalare un bug non esitare a contattarmi.
        </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text--black">
        {{ new Date().getFullYear() }} — <strong>Domenico Tenace</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icona: "mdi-facebook",
        link: "https://www.facebook.com/domenico.tenace",
      },
      { icona: "mdi-twitter", link: "https://twitter.com/dome_tena99" },
      {
        icona: "mdi-linkedin",
        link: "https://www.linkedin.com/in/domenico-tenace-982ba51ab/",
      },
      { icona: "mdi-instagram", link: "https://www.instagram.com/dome_t99/" },
    ],
  }),
};
</script>
