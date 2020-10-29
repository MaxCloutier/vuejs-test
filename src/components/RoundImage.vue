<template>
  <div class="img">
    <img v-if="image" :src="image" :height="size" :width="size" :alt="text" />
    <span
      v-else
      :style="{
        lineHeight: `${size + 2}px`,
        height: `${size}px`,
        width: `${size}px`,
      }"
      >{{ firstLetter(text) }}</span
    >
  </div>
</template>

<script>
import {
  formatAddress,
  formatContact,
  getMainContact,
} from "@/util/site.utils";

export default {
  name: "RoundImage",
  props: {
    image: {
      type: String,
      required: false,
      default: "",
    },
    size: {
      type: Number,
      required: false,
      default: 40,
    },
    text: {
      type: String,
      required: true,
    },
  },
  mounted() {},
  methods: {
    formatAddress,
    formatContact,
    getMainContact,
    firstLetter(value) {
      if (!value) return "";
      return value.slice(0, 1).toUpperCase();
    },
  },
};
</script>
<style lang="scss">
.img {
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  height: 0;
  padding-top: 100%;

  span {
    background: #f1f2f3;
    color: var(--mainDark);
    font-size: 30px;
  }

  img,
  span {
    border-radius: 50%;
    bottom: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
