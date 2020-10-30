<template>
  <div class="user-menu-wrapper">
    <button v-if="user" class="user-menu-btn" @click="toggleUserMenu">
      <RoundImage :image="user.avatar" :text="user.givenName" />
    </button>
    <div v-if="showUserMenu" class="user-menu">
      <span class="label">{{ $t("changeAppLang") }}</span>
      <Select v-model="selectedLang" :options="languages" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import RoundImage from "@/components/RoundImage";
import Select from "@/components/Select";

export default {
  name: "Header",
  components: {
    RoundImage,
    Select,
  },
  data() {
    return {
      showUserMenu: false,
      selectedLang: null,
      languages: [
        { label: this.$t("english"), value: "en" },
        { label: this.$t("french"), value: "fr" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      userLang: "userLang",
      user: "user",
    }),
  },
  watch: {
    selectedLang: function (lang) {
      this.$store.dispatch("updateUserLang", { lang });
      // Not a great solution, but just solves the issue with labels not updating after changing lang
      this.languages = [
        { label: this.$t("english"), value: "en" },
        { label: this.$t("french"), value: "fr" },
      ];
    },
  },
  mounted() {
    this.selectedLang = this.userLang;
  },
  methods: {
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    },
  },
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
