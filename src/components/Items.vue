<template>
  <div class="items-view" :class="{loading: loading}">
    <item
      v-for="item in items"
      :item="item"
      :key="item.id">
    </item>
    <loading :loading="loading"></loading>
  </div>
</template>

<script>
  import store from '../store/index';
  import Item from './Item.vue';
  import Loading from './Loading.vue';

  export default {

    name: 'Items',

    components: {
      Item,
      Loading
    },

    data() {
      return {
        items: [],
        loading: true,
      }
    },

    created() {
      this.update();

      store.on('update', (items) => {
        this.items = items;
        this.loading = false;
      });
    },

    methods: {
      update() {
        const category = this.$route.params.category;
        this.loading = true;
        store.fetchItems(category);
      },
    },

    watch: {
      '$route.params.category': 'update',
    }

  }</script>
