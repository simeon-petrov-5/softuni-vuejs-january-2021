const tutorialRoutes = [
  {
    path: "/javascript/:name?",
    name: "tutorial",
    component: () =>
      import(
        /* webpackChunkName: "tutorial" */ "@/views/Tutorial/ListTutorials.vue"
      ),
    alias: ["/java/:name?", "/csharp/:name?", "/python/:name?"],
  },
];

export default tutorialRoutes;
