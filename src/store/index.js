import Vue from "vue";
import Vuex from "vuex";
import clientsModule from "./modules/clients";
import sitesModule from "./modules/sites";
import userModule from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    clients: clientsModule,
    sites: sitesModule,
    user: userModule,
  },
});
