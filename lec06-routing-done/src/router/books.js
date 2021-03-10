const booksRoutes = [
  {
    path: "/magic-books",
    name: "magicBooks",
    component: () =>
      import(/* webpackChunkName: "magicBooks" */ "@/views/BooksList.vue"),
  },
  {
    path: "/book-details/:bookId",
    name: "bookDetails",
    component: () =>
      import(/* webpackChunkName: "bookDetails" */ "@/views/BookDetails.vue"),
  },

  {
    path: "/bookshelves",
    name: "bookshelves",
    redirect: {
      name: "bookshelves.favourites",
    },
    beforeEnter: (to, from, next) => {
      console.log("Notification - inside bookshelves");
      next();
    },
    component: () =>
      import(
        /* webpackChunkName: "bookDetails" */ "@/views/bookshelves/Bookshelves.vue"
      ),
    children: [
      {
        path: "favourites",
        name: "bookshelves.favourites",
        component: () =>
          import(
            /* webpackChunkName: "bookDetails" */ "@/views/bookshelves/components/Favourite.vue"
          ),
      },
      {
        path: "reading",
        name: "bookshelves.reading",
        component: () =>
          import(
            /* webpackChunkName: "bookDetails" */ "@/views/bookshelves/components/ReadingNow.vue"
          ),
      },
    ],
  },
];

export default booksRoutes;
