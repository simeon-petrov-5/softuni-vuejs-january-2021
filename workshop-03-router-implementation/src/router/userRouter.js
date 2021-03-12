const tutorialRoutes = [
  {
    path: "user",
    name: "user",
    component: () =>
      import(
        /* webpackChunkName: "user-profile" */ "../views/User/UserProfile.vue"
      ),
  },
  {
    path: "user/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "user-profile" */ "../views/User/UserLogin.vue"
      ),
  },
  {
    path: "user/register",
    name: "register",
    component: () =>
      import(
        /* webpackChunkName: "user-profile" */ "../views/User/UserRegister.vue"
      ),
  },
];

export default tutorialRoutes;
