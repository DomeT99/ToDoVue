<template>
  <v-btn @click="saveElement" color="amber"><slot>{{label}}</slot></v-btn>
</template>

<script>
export default {
  props:{
    saveElement:Function,
    label:String
  }
};
</script>
