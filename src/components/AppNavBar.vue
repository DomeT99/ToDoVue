<template>
  <v-navigation-drawer
    class="amber roboto"
    permanent
    v-model="drawer"
    :mini-variant.sync="mini"
    fixed
    app
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-icon>mdi-face-man</v-icon>
      </v-list-item-avatar>

      <v-list-item-title>Hello User!</v-list-item-title>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <router-link :to="item.path">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "List to do", icon: "mdi-format-list-checks", path: "/" },
        { title: "List to buy", icon: "mdi-basket-plus", path: "/tobuy" },
        { title: "About", icon: "mdi-information-variant", path: "/about" },
      ],
      mini: true,
    };
  },
};
</script>
