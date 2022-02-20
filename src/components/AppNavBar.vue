<template>
  <v-main>
    <v-app-bar elevation="5" color="amber " app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>ToDoList</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-icon>mdi-lead-pencil</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      class="amber lighten-3 roboto"
      v-model="drawer"
      temporary
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon>mdi-face-man</v-icon>
        </v-list-item-avatar>

        <v-list-item-title>Hello User!</v-list-item-title>
        <v-btn icon @click.stop="drawer = !drawer">
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
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "List to do", icon: "mdi-format-list-checks", path: "/" },
        { title: "List to buy", icon: "mdi-basket-plus", path: "/tobuy" },
        { title: "About", icon: "mdi-information-variant", path: "/about" },
      ],
    };
  },
};
</script>
