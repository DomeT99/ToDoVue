<!--Componente card univoco-->
<template>
  <v-container>
    <div style="padding-bottom: 15px" :key="item" v-for="item in items">
      <v-banner
        height="60"
        elevation="5"
        color="amber lighten-5 text-center"
        shaped
        icon="mdi-close-circle-outline"
        icon-color="amber"
        @click:icon="test"
      >
        {{ item.label }}
      </v-banner>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      id: String,
      label: String,
    },
    deleteItem: Function,
  },
  methods: {
    test() {
      alert("TES");
    },
  },
};
</script>
