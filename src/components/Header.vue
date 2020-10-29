<template>
  <header class="header">
    <b-container>
      <b-row align-content="center">
        <b-col cols="auto" sm="3" md="2">
          <button class="menu icon-btn visible-sm visible-xs hidden">
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

<style lang="scss">
.header {
  background: var(--mainBlue);
  border-bottom: 1px solid var(--mainDark);
  padding: var(--spacing-medium) 0;
}

.page-title {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.user-menu-btn {
  border-radius: 50%;
  border: 1px solid var(--mainDark);
  height: 42px;
  overflow: hidden;
  width: 42px;
  transition: border 0.3s;

  &:hover {
    border-color: #22467d;
  }
}

.icon-btn {
  border-radius: 50%;
  height: 42px;
  margin-right: var(--spacing-medium);
  position: relative;
  transition: background 0.3s;
  width: 42px;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  svg {
    bottom: 50%;
    fill: var(--mainDark);
    height: 28px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 28px;
  }
}
</style>
