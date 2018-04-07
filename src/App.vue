<template lang="pug">
  #wrapper
    common-header
    .l-container
      router-view(name="categoryNav")
    .l-container
      transition
        keep-alive
          router-view(name="items", :handleUpdating="handleUpdating")
    .l-container
      router-view(name="categoryNav")
    loading(:loading="loading")
</template>

<script>
import commonHeader from './components/Header.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'App',

  components: {
    commonHeader,
    Loading,
  },

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    handleUpdating(updating) {
      this.loading = updating;
    },
  },
};
</script>

<style lang="stylus">
  @import "variables.styl"
  @import "base.styl"

  .l-container
    margin: 0 auto
    max-width: 780px

  .site-title
    font-size: 1.8rem
    line-height: 1
    color: #fff

  .heading-1
    margin-top: 20px
    font-size: 2rem
    font-weight: bold
    line-height: 1
</style>
