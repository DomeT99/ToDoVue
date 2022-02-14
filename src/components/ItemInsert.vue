<template>
  <v-container>
    <v-card
      :key="item"
      v-for="item of items"
      height="50"
      shaped
      elevation="5"
      color="amber lighten-5"
      ><v-card-text>{{ item }}</v-card-text></v-card
    >
  </v-container>
</template>

<script>
export default {
  props: {
    items: String,
  },
};
</script>
