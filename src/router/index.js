import Vue from "vue";
import VueRouter from "vue-router";
import SitesListI18n from "../views/SitesList/index.vue";

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
    component: () => import("../views/SiteDetails/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
