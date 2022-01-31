<template>
  <div class="elevation-3 business-logo">
    <img
      :alt="logoInfo.logoFallback"
      :src="logoInfo.logoPath || require('@/static/images/fallback_logo.jpg')"
    />
  </div>
</template>

<script>
export default {
  name: 'BusinessLogo',

  props: {
    logoInfo: {
      type: Object,
      default: () => ({
        logoFallback: '',
        logoPath: '',
      }),
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables';
@import '@/assets/_breakpoints';
.business-logo {
  background-color: $colorPrimaryWhite;
  border-radius: 25%;

  img {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 25%;
  }
}
</style>
