<template>
  <div class="mt-5 ml-3">
    <!-- Header -->
    <h2 class="headline-lg">
      Einzigartige <b>{{ type }}</b> aus <b>{{ city }}</b>
    </h2>
    <div v-swiper="swiperOptions" class="overflow-visible">
      <!-- Swipe Buttons -->
      <div class="d-flex list-buttons">
        <v-btn icon class="swiper-button-next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn icon class="swiper-button-prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
      <!-- List -->
      <div class="swiper-wrapper">
        <business-card
          v-for="business in getFirstBusinesses(numberOfBusinesses)"
          :key="business.id"
          :city="city"
          :business="business"
          class="swiper-slide"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
import BusinessCard from './BusinessCard.vue'

export default {
  name: 'BusinessList',

  components: {
    BusinessCard,
  },

  directives: {
    swiper: directive,
  },

  data: () => ({
    numberOfBusinesses: 5,
    type: 'Arbeitgeber',
    city: 'Passau',
    swiperOptions: {
      spaceBetween: 30,
      slidesPerView: 'auto',
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    },
    breakpoint: {
      640: {
        slidesPerView: 'auto',
      },
      320: {
        slidesPerView: 1,
      },
    },
  }),

  computed: {
    ...mapGetters({
      getFirstBusinesses: 'default/getFirstBusinesses',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/_breakpoints';

.list-buttons {
  position: absolute;
  top: -30px;
  right: 50px;
  width: 80px;

  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: '';
  }
}
</style>
