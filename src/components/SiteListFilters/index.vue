<template>
  <div class="section-filters">
    <b-container>
      <div class="left">
        <Select
          v-model="clientId"
          :placeholder="$t('allSites')"
          :options="clients"
        />
      </div>
      <div class="right">
        <div class="search">
          <button
            class="search-btn hidden visible-xs visible-sm"
            @click="toggleSearch()"
          >
            <BIconSearch />
          </button>
          <input
            v-model="search"
            class="hidden visible-md visible-lg visible-xl"
            type="text"
            :placeholder="$t('searchSite')"
          />
        </div>
      </div>
    </b-container>

    <b-container v-if="showSearch" class="visible-xs visible-sm">
      <input
        v-model="search"
        class="mobile-search"
        type="text"
        :placeholder="$t('searchSite')"
      />
    </b-container>
  </div>
</template>
<script>
import Select from "@/components/Select";
import { mapGetters } from "vuex";
// TODO add filtering by tags

export default {
  name: "SiteListFilters",
  components: {
    Select,
  },
  data() {
    return {
      search: "",
      clientId: null,
      showSearch: false,
    };
  },
  computed: {
    ...mapGetters({
      clients: "clientsAsOptions",
      filters: "filters",
    }),
  },
  watch: {
    search(value) {
      this.$store.dispatch("updateFilters", {
        ...this.filters,
        search: value,
      });
    },
    clientId(value) {
      this.$store.dispatch("updateFilters", {
        ...this.filters,
        client: value,
      });
    },
  },
  mounted() {
    this.$store.dispatch("getClients");
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
