const tutorialRoutes = [
  {
    path: "/javascript/:name?",
    name: "javascript",
    component: () =>
      import(
        /* webpackChunkName: "tutorial" */ "../views/Tutorial/ListTutorials.vue"
      ),
  },
  {
    path: "/java/:name?",
    name: "java",
    component: () =>
      import(
        /* webpackChunkName: "tutorial" */ "../views/Tutorial/ListTutorials.vue"
      ),
  },
  {
    path: "/csharp/:name?",
    name: "csharp",
    component: () =>
      import(
        /* webpackChunkName: "tutorial" */ "../views/Tutorial/ListTutorials.vue"
      ),
  },
  {
    path: "/python/:name?",
    name: "python",
    component: () =>
      import(
        /* webpackChunkName: "tutorial" */ "../views/Tutorial/ListTutorials.vue"
      ),
  },
];

export default tutorialRoutes;
