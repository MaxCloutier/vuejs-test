<template>
  <div class="sites-list">
    <SectionHeader>
      <h1 class="section-title">{{ $t("sites") }}</h1>
    </SectionHeader>
    <div class="container">
      <SiteListFilters />
      <p v-if="!sites || sites.length === 0" class="empty">
        {{ $t("noSites") }}
      </p>
      <SiteListElement
        v-for="site in sites.slice(0, 50)"
        :key="site.id"
        :site="site"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import SectionHeader from "@/components/SectionHeader";
import SiteListFilters from "@/components/SiteListFilters";
import SiteListElement from "@/components/SiteListElement";

export default {
  name: "SitesListI18n",
  components: {
    SectionHeader,
    SiteListElement,
    SiteListFilters,
  },
  computed: {
    ...mapGetters({
      sites: "filteredSites",
    }),
  },
};
</script>
<style lang="scss">
.sites-list {
  .section-header .container {
    justify-content: center;
  }
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.empty {
  text-align: center;
}
</style>
