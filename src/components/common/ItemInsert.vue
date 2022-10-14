<!--Componente card univoco-->
<template>
  <v-container>
    <div
      class="scale-animation"
      style="margin-bottom: 15px"
      :key="item"
      v-for="item in items"
    >
      <v-banner
        height="65"
        elevation="5"
        color="amber lighten-5 text-center"
        icon="mdi-close-circle-outline"
        icon-color="amber"
        :id="item.id"
        @click:icon="deleteItem(item.id)"
      >
        <p>{{ item.label }}</p>
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
};
</script>
