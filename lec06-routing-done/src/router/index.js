import Vue from "vue";
import VueRouter from "vue-router";
import booksRoutes from "./books";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import(/* webpackChunkName: "form" */ "@/views/Form.vue"),
  },
  ...booksRoutes,
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

import { getUser } from "../utils/authUtils";
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  const user = getUser();
  if (to.name === "home" || user.isAuth) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
