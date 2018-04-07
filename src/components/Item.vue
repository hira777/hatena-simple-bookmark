<template lang="pug">
  article.item
    a(:href="item.link", target="blank")
      h1.item-title {{ item.title }}
      .item-information
        span
          a(:href="item | createBookmarkEntry", target="blank")
            img.item-hatebu-count(:src="item | createBookmarkCountImage")
      .item-content
        .item-image(v-show="visibleItemImage", v-html="itemImage")
        p.item-description {{ item.description }}
</template>

<script>
export default {
  name: 'Item',

  filters: {
    createBookmarkEntry(item) {
      return `//b.hatena.ne.jp/entry/${item.link}`;
    },
    createBookmarkCountImage(item) {
      return `//b.hatena.ne.jp/entry/image/${item.link}`;
    },
  },

  props: {
    item: {
      type: Object,
      default: null,
    },
  },

  computed: {
    visibleItemImage() {
      return typeof this.entryImage() !== 'undefined';
    },
    itemImage() {
      const entryImage = this.entryImage();

      if (typeof entryImage !== 'undefined') {
        entryImage.src = entryImage.src.replace('http://', '//');
        return entryImage.outerHTML;
      }
    },
  },

  methods: {
    entryImage() {
      const el = document.createElement('div');
      el.innerHTML = this.item.encoded;
      return el.getElementsByClassName('entry-image')[0];
    },
  },
};
</script>

<style lang="stylus">
  @import "../variables.styl"
  .item
    padding 15px 0
    border-bottom solid 1px #e8e8e8

    .item-title
      font-size 2rem
      font-weight bold

    .item-information
      margin-top 5px

    .item-content
      display flex
      margin-top 10px

    .item-image
      width 90px
      margin-right 10px

      img
        width 100%

    .item-description
      flex 1
      font-size 1.3rem
      color #000

    &:first-child
      border-top solid 1px #e8e8e8

    a:hover
      .item-title
        text-decoration: underline

  @media (max-width: 768px)
    .item
      padding 15px
</style>
