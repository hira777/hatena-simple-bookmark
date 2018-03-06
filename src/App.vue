<template>
  <div id="wrapper">
    <header class="header">
      <div class="l-container">
        <a class="site-title" href="#/">Hatena::SimpleBookmark</a>
      </div>
    </header>

    <div class="l-container">
      <router-view name="categoryNav"></router-view>
    </div>

    <div class="l-container">
      <transition>
        <keep-alive>
          <router-view name="items"></router-view>
        </keep-alive>
      </transition>
    </div>

    <div class="l-container">
      <router-view name="categoryNav"></router-view>
    </div>
  </div>
</template>

<style lang="stylus">
  @import "variables.styl"
  @import "base.styl"

  .l-container
    margin: 0 auto
    max-width: 780px

  .header
    padding: 10px 15px
    background: #2c6dbd
    a
      color: #fff
      text-decoration: none

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