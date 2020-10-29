import axios from "@/util/axios.util";
import vueI18n from "@/i18n";

const defaultState = {
  user: null,
  userLang: localStorage.userLang || process.env.VUE_APP_I18N_LOCALE || "en",
};

const actions = {
  getCurrentUser: ({ commit, state }) => {
    if (!state.user) {
      axios
        .get("me")
        .then((response) => {
          commit("USER_UPDATED", response.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  },
  updateUserLang: ({ commit }, { lang }) => {
    localStorage.userLang = lang;
    vueI18n.locale = lang;
    commit("USER_LANG_UPDATED", lang);
  },
};

const mutations = {
  USER_UPDATED: (state, user) => {
    state.user = user;
  },
  USER_LANG_UPDATED: (state, lang) => {
    state.userLang = lang;
  },
};

const getters = {
  user: (state) => state.user,
  userLang: (state) => state.userLang,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
