<template lang="pug">
  nav.category-nav
    ul.category-nav-list
      item(v-for="item in items", :item="item", :key="item.id")
</template>

<script>
import Item from './CategoryNavItem.vue';

export default {
  name: 'CategoryNav',

  components: {
    Item,
  },

  data() {
    return {
      items: [
        {
          category: '世の中',
          route: 'social',
        },
        {
          category: '政治と経済',
          route: 'economics',
        },
        {
          category: '暮らし',
          route: 'life',
        },
        {
          category: '学び',
          route: 'knowledge',
        },
        {
          category: 'テクノロジー',
          route: 'it',
        },
        {
          category: 'エンタメ',
          route: 'entertainment',
        },
        {
          category: 'アニメとゲーム',
          route: 'game',
        },
        {
          category: 'おもしろ',
          route: 'fun',
        },
      ],
    };
  },
};
</script>

<style lang="stylus">
  .category-nav-list
    display flex
    justify-content space-around
    flex-wrap wrap
</style>
