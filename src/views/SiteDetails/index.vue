<template>
  <div v-if="site" class="site-details">
    <SectionHeader>
      <router-link class="link-back" to="/"><BIconChevronLeft /></router-link>
      <div class="details-content-wrapper">
        <SiteShortDescription :site="site" />
      </div>
    </SectionHeader>
    <b-container class="main-content">
      <div
        v-if="site.images"
        class="main-img"
        :style="{ backgroundImage: `url(${site.images[0]})` }"
      ></div>
      <b-row v-if="mainContact" class="site-info">
        <b-col class="col align-content-center" cols="12" md="6">
          <div class="info-icon">
            <BIconPersonFill />
          </div>
          <div class="info-content">
            <p>
              <strong>{{ formatContact(mainContact) }}</strong>
            </p>
            <p>{{ mainContact.jobTitle }}</p>
          </div>
        </b-col>
        <b-col
          v-if="mainContact.phoneNumber"
          class="col align-content-center"
          cols="12"
          md="6"
        >
          <div class="info-icon">
            <BIconTelephoneFill />
          </div>
          <div class="info-content">
            <a :href="`tel:${mainContact.phoneNumber}`">{{
              mainContact.phoneNumber
            }}</a>
          </div>
        </b-col>
        <b-col
          v-if="mainContact.email"
          class="col align-content-center"
          cols="12"
          md="6"
        >
          <div class="info-icon">
            <BIconEnvelopeFill />
          </div>
          <div class="info-content">
            <a :href="`mailto:${mainContact.email}`">{{ mainContact.email }}</a>
          </div>
        </b-col>
        <b-col class="col align-content-center" cols="12" md="6">
          <div class="info-icon">
            <BIconGeoFill />
          </div>
          <div class="info-content">
            <p>{{ formatAddress(mainContact.address) }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {
  formatAddress,
  formatContact,
  getMainContact,
} from "@/util/site.utils";
import { mapGetters } from "vuex";
import SectionHeader from "@/components/SectionHeader";
import SiteShortDescription from "@/components/SiteShortDescription";

export default {
  name: "SiteDetailsI18n",
  components: {
    SectionHeader,
    SiteShortDescription,
  },
  data() {
    return {
      options: {
        type: "loop",
        autoWidth: true,
        gap: "1em",
        height: "240px",
      },
    };
  },
  computed: {
    ...mapGetters({
      site: "siteDetails",
    }),
    mainContact: function () {
      return getMainContact(this.site.contacts);
    },
  },
  methods: {
    formatAddress,
    formatContact,
    getMainContact,
  },
};
</script>
<style lang="scss" src="./style.scss"></style>
