<template>
  <div id="app">
    <Header :title="$t('scheduling')" />
    <div class="main-content-wrapper">
      <MainMenu
        :class="[{ 'hidden visible-md visible-lg visible-xl': !showMenu }]"
      />
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header";
import MainMenu from "@/components/MainMenu";

// Note: Only put getSites since both pages of the app require it,
//       would move to a more specific page if there were pages not needing that data
export default {
  name: "App",
  components: {
    Header,
    MainMenu,
  },
  computed: {
    ...mapGetters({
      showMenu: "showMenu",
    }),
  },
  mounted() {
    this.$store.dispatch("getSites");
    this.$store.dispatch("getCurrentUser");
  },
};
</script>

<style lang="scss">
#app {
  background: #f1f2f3;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 350px;
  overflow: auto;
}

.main-content-wrapper {
  display: flex;
  flex-grow: 1;
}

.main-content {
  flex-grow: 1;
}
</style>
