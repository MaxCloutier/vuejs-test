// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/bootstrap_custom.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/default.scss";
import i18n from "./i18n";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
