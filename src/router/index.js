import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ToDo",
    component: () => import("../views/ListToDo.vue"),
  },
  {
    path: "/tobuy",
    name: "ToBuy",
    component: () => import("../views/ListToBuy.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/notes",
    name: "Notes",
    component: () => import("../views/Notes.vue"),
  },
  {
    path: "/qrcode",
    name: "QR Code",
    component: () => import("../views/QrCode.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
