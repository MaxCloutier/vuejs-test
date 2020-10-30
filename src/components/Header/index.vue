<template>
  <header class="header">
    <b-container>
      <b-row align-content="center">
        <b-col cols="auto" sm="3" md="2">
          <button
            class="menu icon-btn visible-sm visible-xs hidden"
            @click="$store.dispatch('toggleMenu')"
          >
            <BIconList />
          </button>
        </b-col>
        <b-col class="grow" cols="auto" sm="6" md="8">
          <h1 class="page-title">{{ title }}</h1>
        </b-col>

        <b-col
          cols="auto"
          align-self="end"
          class="align-content-center justify-content-end"
          sm="3"
          md="2"
        >
          <button class="icon-btn">
            <BIconGrid3x3GapFill />
          </button>
          <button v-if="user" class="user-menu-btn">
            <RoundImage :image="user.avatar" :text="user.givenName" />
          </button>
          <!--button
            v-for="lang in languages.filter(lang => lang !== this.userLang)"
            :key="lang"
            v-on:click="updateUserLang(lang)"
          >{{ lang }}</button-->
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import RoundImage from "@/components/RoundImage";

export default {
  name: "Header",
  components: {
    RoundImage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      languages: ["en", "fr"],
    };
  },
  computed: {
    ...mapGetters({
      userLang: "userLang",
      user: "user",
    }),
  },
  methods: {
    updateUserLang(lang) {
      this.$store.dispatch("updateUserLang", { lang });
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
