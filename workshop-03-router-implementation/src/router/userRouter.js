const tutorialRoutes = [
  {
    path: "/user",
    name: "user",
    redirect: "/user/login",
  },
  {
    path: "/user/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "user-profile" */ "../views/User/UserLogin.vue"
      ),
  },
  {
    path: "/user/register",
    name: "register",
    component: () =>
      import(
        /* webpackChunkName: "user-profile" */ "../views/User/UserRegister.vue"
      ),
  },
  {
    path: "/user/profile",
    name: "profile",
    component: () =>
      import(
        /* webpackChunkName: "user-profile" */ "../views/User/UserProfile.vue"
      ),
  },
];

export default tutorialRoutes;
