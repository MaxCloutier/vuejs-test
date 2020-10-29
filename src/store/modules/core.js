const defaultState = {
  showMenu: false,
};

const actions = {
  toggleMenu: ({ commit, state }) => {
    commit("SHOW_MENU_UPDATED", !state.showMenu);
  },
};

const mutations = {
  SHOW_MENU_UPDATED: (state, showMenu) => {
    state.showMenu = showMenu;
  },
};

const getters = {
  showMenu: (state) => state.showMenu,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
