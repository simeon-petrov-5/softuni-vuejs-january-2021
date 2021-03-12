import Vue from "vue";
import VueRouter from "vue-router";
import tutorialRoutes from "./tutorialRoutes";
import userRouter from "./userRouter";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/javascript" },
  ...tutorialRoutes,
  ...userRouter,
  {
    path: "*",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
