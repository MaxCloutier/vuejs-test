<template v-if="site">
  <router-link
    :to="{ name: 'SiteDetails', params: { id: site.id } }"
    class="wrapper"
  >
    <SiteShortDescription :site="site" :img-size="100" />
    <BIconChevronRight class="chevron" />
  </router-link>
</template>

<script>
import SiteShortDescription from "@/components/SiteShortDescription";

export default {
  name: "SiteListElement",
  components: {
    SiteShortDescription,
  },
  props: {
    site: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
