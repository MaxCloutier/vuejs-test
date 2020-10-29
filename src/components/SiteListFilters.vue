<template>
  <div class="section-filters">
    <b-container>
      <div class="left">
        <div class="select-wrapper">
          <div class="select-wrapper-2">
            <select v-model="client">
              <option :value="null">{{ $t("allSites") }}</option>
              <option v-for="c in clients" :key="c.id" :value="c.id">
                {{ c.givenName }}
              </option>
            </select>
          </div>
          <BIconCaretDown />
        </div>
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
import { mapGetters } from "vuex";
// TODO add filtering by tags

export default {
  name: "SiteListFilters",
  data() {
    return {
      search: "",
      client: null,
      showSearch: false,
    };
  },
  computed: {
    ...mapGetters({
      clients: "clients",
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
    client(value) {
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

<style lang="scss">
.section-filters {
  background: #fff;
  border: 1px solid var(--mainLight);
  border-bottom: none;
  padding: var(--spacing-small);

  @media (max-width: var(--mobileViewWidth)) {
    padding: var(--spacing-medium) var(--spacing-large);
  }

  .mobile-search {
    margin-top: var(--spacing-medium);
    width: 100%;
  }

  .search-btn {
    width: 30px;
    height: 30px;
  }

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: var(--spacing-medium) var(--spacing-large);
  }

  .left {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
  }

  .right {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }

  .search {
    align-items: center;
    display: flex;
  }

  input {
    border-radius: 4px;
    border: 1px solid var(--secondaryDark);
    color: var(--mainGray);
    padding: var(--spacing-small) var(--spacing-medium);
    transition: border 0.3s;

    &:focus {
      border-color: var(--mainBlue);
      outline: none;
    }
  }

  .select-wrapper {
    align-items: center;
    border-radius: 4px;
    border: 1px solid var(--secondaryDark);
    display: flex;
    justify-content: space-between;
    position: relative;
    transition: border 0.3s;

    svg {
      fill: var(--secondaryDark);
      margin-right: var(--spacing-small);
      transition: fill 0.3s;
    }

    &:focus-within {
      border-color: var(--mainBlue);

      svg {
        fill: var(--mainBlue);
      }
    }
  }

  .select-wrapper-2 {
    overflow: hidden;
  }

  select {
    margin-right: -19px;
    padding: var(--spacing-small) var(--spacing-medium);
    margin-left: 0;
    color: var(--mainGray);
    border: none;
    background: none;
    margin-bottom: 1px;
    margin-top: 1px;
    min-width: 200px;

    &:focus {
      outline: none;
    }
  }
}
</style>
