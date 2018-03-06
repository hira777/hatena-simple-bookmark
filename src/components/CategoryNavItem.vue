<template>
  <li class="category-nav-item" :class="{active: isActive}">
    <router-link :to="item.route | formatRoute">{{ item.category }}</router-link>
  </li>
</template>

<script>
  export default {

    name: 'CategoryNavItem',

    props: {
      item: Object
    },

    computed: {
      isActive() {
        return this.item.route === this.$route.params.category;
      }
    },

    filters: {
      formatRoute(route) {
        return `/hotentry/${route}`;
      }
    }

  }</script>

<style lang="stylus">
  .category-nav-item
    font-size 14px
    a
      display block
      padding 15px 0
      color #003ead
      font-weight bold
    &.active
      a
        color #000

  @media (max-width: 768px)
    .category-nav-item
      flex-basis 25%
      font-size 13px
      text-align center
</style>