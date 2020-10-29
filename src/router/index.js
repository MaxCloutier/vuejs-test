import Vue from "vue";
import VueRouter from "vue-router";
import SitesListI18n from "../views/SitesListI18n.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SitesList",
    component: SitesListI18n,
  },
  {
    path: "/site/:id",
    name: "SiteDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SiteDetailsI18n.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
