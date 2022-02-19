<template>
  <v-banner
    sticky
    class="amber lighten-5 text-center f-size-17 text-uppercase"
    elevation="4"
    :icon="iconList"
    app
    ><slot>{{ textBanner }}</slot></v-banner
  >
</template>

<script>
export default {
  props: {
    textBanner: String,
    iconList: String,
  },
};
</script>
