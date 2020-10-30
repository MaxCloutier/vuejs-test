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
          <UserAvatar />
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<script>
import UserAvatar from "@/components/UserAvatar";

export default {
  name: "Header",
  components: {
    UserAvatar,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
