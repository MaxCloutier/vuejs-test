<template>
  <div v-if="site" class="site-details">
    <SectionHeader>
      <router-link class="link-back" to="/"><BIconChevronLeft /></router-link>
      <div class="details-content-wrapper">
        <SiteShortDescription :site="site" />
      </div>
    </SectionHeader>
    <b-container>
      <Splide v-if="site.images" :options="options">
        <SplideSlide v-for="(image, index) in site.images" :key="index">
          <img :src="image" />
        </SplideSlide>
      </Splide>
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
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import SectionHeader from "@/components/SectionHeader";
import SiteShortDescription from "@/components/SiteShortDescription";

export default {
  name: "SiteDetailsI18n",
  components: {
    SectionHeader,
    SiteShortDescription,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        type: "loop",
        autoWidth: true,
        focus: "center",
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
<style lang="scss">
.site-details {
  .section-header .container {
    display: flex;
  }

  .content {
    .title {
      color: #fff;
    }
  }

  .link-back {
    flex-grow: 0;
  }

  .site-info .col {
    margin-top: var(--spacing-xx-large);
  }

  .info-icon {
    flex-grow: 0;
    margin-right: var(--spacing-large);

    svg {
      height: 30px;
      width: 30px;
      fill: var(--mainDark);
    }
  }

  .info-content {
    flex-grow: 1;
    font-size: 14px;
    line-height: 1.2;
    text-align: left;

    p {
      margin: 0;

      strong {
        font-weight: 600;
      }
    }
  }

  .details-content-wrapper {
    display: flex;
    justify-content: center;
    flex-grow: 1;

    .content-wrapper {
      flex-grow: initial;
    }
  }
}
</style>
