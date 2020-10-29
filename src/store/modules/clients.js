import axios from "@/util/axios.util";

const defaultState = {
  clients: [],
};

const actions = {
  getClients: ({ commit, state }) => {
    if (!state.clients.length) {
      axios
        .get("clients")
        .then((response) => {
          commit("CLIENTS_UPDATED", response.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  },
};

const mutations = {
  CLIENTS_UPDATED: (state, clients) => {
    state.clients = clients;
  },
};

const getters = {
  clients: (state) => state.clients,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
