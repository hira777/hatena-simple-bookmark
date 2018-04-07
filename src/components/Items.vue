<template lang="pug">
  .items-view(:class="{loading: loading}")
    item(v-for="item in items", :item="item", :key="item.id")
</template>

<script>
import store from '../store/index';
import Item from './Item.vue';

export default {
  name: 'Items',

  components: {
    Item,
  },

  props: {
    handleUpdating: {
      type: Function,
      default: null,
    },
  },

  data() {
    return {
      items: [],
      loading: true,
    };
  },

  watch: {
    '$route.params.category': 'update',
  },

  created() {
    this.update();

    store.on('update', items => {
      this.items = items;
      this.handleUpdating && this.handleUpdating(false);
    });
  },

  methods: {
    update() {
      const category = this.$route.params.category;
      this.handleUpdating && this.handleUpdating(true);
      store.fetchItems(category);
    },
  },
};
</script>
