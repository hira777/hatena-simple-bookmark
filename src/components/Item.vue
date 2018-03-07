<template>
  <article class="item">
    <a 
      :href="item.link" 
      target="blank">
      <h1 class="item-title">{{ item.title }}</h1>
      <div class="item-information">
        <span>
          <a 
            :href="item | createBookmarkEntry" 
            target="blank">
            <img
              :src="item | createBookmarkCountImage"
              class="item-hatebu-count" >
          </a>
        </span>
      </div>
      <div class="item-content">
        <div
          v-show="visibleItemImage"
          class="item-image"
          v-html="itemImage"/>
        <p class="item-description">{{ item.description }}</p>
      </div>
    </a>
  </article>
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
