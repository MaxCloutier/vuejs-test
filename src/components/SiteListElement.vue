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
<style lang="scss">
.wrapper {
  align-items: center;
  background: #fff;
  border: 1px solid var(--mainLight);
  display: flex;
  padding: var(--spacing-medium) var(--spacing-large);
  transition: background 0.3s;

  &:hover {
    background: #f6f6f6;
    text-decoration: none;
  }

  & + .wrapper {
    border-top: 0;
  }
}

.chevron {
  fill: var(--main-dark);
  height: 20px;
  width: 20px;
}
</style>
