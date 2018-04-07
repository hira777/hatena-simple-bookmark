<template lang="pug">
  transition(name="fade")
    .spinner(v-show="loading", :class="{ active: loading }")
      .spinner-inner
        .rect1
        .rect2
        .rect3
        .rect4
        .rect5
</template>

<script>
export default {
  name: 'Loading',

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus">
  .spinner
    position fixed
    top 0
    left 0
    width 100vw
    height 100vh
    background rgba(255, 255, 255, 0.8)
    &.active
      .spinner-inner
        margin 50vh auto
        width 50px
        height 40px
        text-align center
        font-size 10px
        > div
          background-color #2c6dbd
          height 100%
          width 6px
          display inline-block
          -webkit-animation sk-stretchdelay 1.2s infinite ease-in-out
          animation sk-stretchdelay 1.2s infinite ease-in-out
        .rect2
          -webkit-animation-delay -1.1s
          animation-delay -1.1s
        .rect3
          -webkit-animation-delay -1.0s
          animation-delay -1.0s
        .rect4
          -webkit-animation-delay -0.9s
          animation-delay -0.9s
        .rect5
          -webkit-animation-delay -0.8s
          animation-delay -0.8s

  @-webkit-keyframes sk-stretchdelay{
    0%, 40%, 100%{
      -webkit-transform: scaleY(0.4)
    }
    20%{
      -webkit-transform: scaleY(1.0)
    }
  }

  @keyframes sk-stretchdelay{
    0%, 40%, 100%{
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20%{
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }

  .fade-enter-active, .fade-leave-active
    transition opacity .5s

  .fade-enter, .fade-leave-to
    opacity 0

</style>
