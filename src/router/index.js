import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../components/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import("../views/Faq.vue")
  },
  {
    path: "/apply",
    name: "Apply",
    component: () => import("../views/Apply.vue")
  },
  {
    path: "/mechanics",
    name: "Mechanics",
    component: () => import("../views/Mechanics.vue")
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   next();
// });

export default router;
