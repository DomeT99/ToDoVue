<template>
  <v-container class="m-top-20">
    <v-text-field
      background-color="amber lighten-2"
      color="black"
      solo
      v-model="itemInsert"
      append-icon="mdi-lead-pencil"
     
      clearable
      clear-icon="mdi-close-circle-outline"
    >
    </v-text-field>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemInsert: "",
    };
  },
 /*  methods: {
    writeItem() {
      //let item = this.itemInsert;
 
      
    },
  }, */
};
</script>
