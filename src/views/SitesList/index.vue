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

// TODO implement infinite scroll instead of only showing first 50 results

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
<style lang="scss" src="./style.scss"></style>
