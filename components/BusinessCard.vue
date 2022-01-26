<template>
  <v-card class="business-card contentOverflow">
    <!-- City -->
    <v-chip class="px-2 business-city">
      <span>{{ city }}</span>
    </v-chip>
    <!-- Image -->
    <div class="business-image">
      <img
        :alt="business.title + ' image'"
        :src="
          business.preview_image ||
          require('@/static/images/fallback_preview.png')
        "
      />
    </div>
    <!-- Content -->
    <div class="business-content card-content flex-column elevation-3">
      <!-- Logo -->
      <business-logo
        :logo-info="{ logoFallback: business.title, logoPath: business.logo }"
        :style="logoSize"
      />
      <!-- Like -->
      <v-btn
        class="like-btn"
        color="white"
        fab
        @click="TOGGLE_LIKE(business.id)"
      >
        <v-icon large color="black">
          {{ business.is_liked ? 'mdi-heart' : 'mdi-heart-outline' }}
        </v-icon>
      </v-btn>
      <!-- Title -->
      <div class="pt-3 px-3 business-title headline-sm text-truncate">
        {{ business.title }}
      </div>
      <!-- Tags -->
      <div v-if="business.tags.length" class="px-3 d-flex align-center">
        <v-chip class="elevation-1 mr-4 white">
          <span class="text-truncate">{{ business.tags[0] }}</span>
        </v-chip>
        <span v-if="business.tags.length > 1" class="mb-1 tags-link">
          +{{ business.tags.length - 1 }} weitere
        </span>
      </div>
      <!-- Description -->
      <div
        :class="business.tags.length ? '' : 'tags-placeholder'"
        class="pt-1 px-3 pb-3"
      >
        <div class="business-description">
          {{ business.description }}
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'
import BusinessLogo from './BusinessLogo.vue'

export default {
  name: 'BusinessCard',

  components: {
    BusinessLogo,
  },

  props: {
    city: {
      type: String,
      default: '',
    },
    business: {
      type: Object,
      default: () => ({
        logo: '',
        title: '',
        tags: [],
        description: '',
        is_liked: false,
      }),
    },
  },

  data: () => ({
    logoSize: {
      width: '100px',
      height: '100px',
    },
  }),

  methods: {
    ...mapMutations({
      TOGGLE_LIKE: 'default/TOGGLE_LIKE',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables';
@import '@/assets/_breakpoints';

.business-card {
  background: $colorPrimaryWhite;
  width: 330px;
  height: 350px;
  display: inline-block;
  cursor: pointer;

  @include md-and-up {
    width: 500px;
  }

  .business-city {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: $colorPrimaryBlack !important;
    color: $colorPrimaryWhite !important;
  }

  .business-image {
    height: 250px;

    img {
      display: block;
      overflow: hidden;
      max-width: 100%;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
    }
  }

  .business-content {
    .like-btn {
      position: absolute;
      right: 28px;
      top: -28px;
    }
    .business-title {
      font-weight: 700;
    }
    .tags-link {
      color: $colorGrey2;
      font-size: 14px;
    }

    .business-description {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Space for the case with 0 tags */
    .tags-placeholder {
      padding-bottom: 78px !important;

      @include md-and-up {
        padding-bottom: 68px !important;
      }
    }
  }
}
</style>
