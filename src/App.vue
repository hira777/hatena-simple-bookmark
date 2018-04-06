<template>
  <div id="wrapper">
    <common-header/>

    <div class="l-container">
      <router-view name="categoryNav"/>
    </div>
      
    <div class="l-container">
      <transition>
        <keep-alive>
          <router-view name="items"/>
        </keep-alive>
      </transition>
    </div>

    <div class="l-container">
      <router-view name="categoryNav"/>
    </div>
  </header></div>
</template>

<script>
import commonHeader from './components/Header.vue';

export default {
  name: 'App',

  components: {
    commonHeader,
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
