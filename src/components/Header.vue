<template lang="pug">
  header.header
    .l-container
      a.site-title(href="#/") Hatena::SimpleBookmark
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="stylus">
  .header
    padding: 10px 15px
    background: #2c6dbd
    a
      color: #fff
      text-decoration: none
      &:visited
        color: #fff
</style>
