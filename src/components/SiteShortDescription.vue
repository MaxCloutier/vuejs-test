<template v-if="site">
  <div class="content-wrapper">
    <div class="img-wrapper" :style="{ width: `${imgSize}px` }">
      <RoundImage :image="site.images[0]" :text="site.title" :size="imgSize" />
    </div>
    <div class="content">
      <h2 class="title">{{ site.title }}</h2>
      <p>{{ formatAddress(site.address) }}</p>
      <p>{{ formatContact(getMainContact(site.contacts)) }}</p>
    </div>
  </div>
</template>

<script>
import {
  formatAddress,
  formatContact,
  getMainContact,
} from "@/util/site.utils";
import RoundImage from "@/components/RoundImage";

export default {
  name: "SiteShortDescription",
  components: {
    RoundImage,
  },
  props: {
    site: {
      type: Object,
      required: true,
    },
    imgSize: {
      type: Number,
      required: false,
      default: 60,
    },
  },
  methods: {
    formatAddress,
    formatContact,
    getMainContact,
  },
};
</script>
<style lang="scss">
.img-wrapper {
  height: auto;
}

.content-wrapper {
  align-items: center;
  display: flex;
  flex-grow: 1;
}

.content {
  color: var(--mainDark);
  padding: 0 var(--spacing-xx-large);
  text-align: left;
  font-size: 14px;

  .title {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }

  p {
    margin: 0;
  }
}
</style>
