import axios from "@/util/axios.util";
import router from "@/router";

const defaultState = {
  sites: [],
  siteDetails: null,
  filters: {
    search: "",
  },
};

const actions = {
  getSites: ({ commit, state }) => {
    if (!state.sites.length) {
      axios
        .get("sites")
        .then((response) => {
          commit("SITES_UPDATED", response.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  },
  updateFilters: ({ commit }, filters) => {
    commit("SITES_FILTERS_UPDATED", filters);
  },
};

const mutations = {
  SITES_UPDATED: (state, sites) => {
    state.sites = sites;
  },
  SITES_FILTERS_UPDATED: (state, filters) => {
    state.filters = filters;
  },
  SITE_DETAILS_UPDATED: (state, siteDetails) => {
    state.siteDetails = siteDetails;
  },
};

const getters = {
  sites: (state) => state.sites,
  filteredSites: (state) => {
    const { client, search } = state.filters;
    return state.sites.filter(
      ({ title, clientId }) =>
        title &&
        title.toLowerCase().includes(search.toLowerCase()) &&
        (!client || clientId === client)
    );
  },
  filters: (state) => state.filters,
  siteDetails: (state) =>
    state.sites.find((site) => site.id === router.currentRoute.params.id),
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
