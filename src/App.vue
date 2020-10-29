<template>
  <div id="app">
    <Header :title="$t('scheduling')" />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header";

// Note: Only put getSites since both pages of the app require it,
//       would move to a more specific page if there were pages not needing that data
export default {
  name: "App",
  components: {
    Header,
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
  min-width: 350px;
  height: 100%;
  overflow: auto;
  padding-bottom: 20px;
}
</style>
