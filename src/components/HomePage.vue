<template>
  <div id="home-page">
    <top-nav :clicked="clickedVal"></top-nav>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'

  export default {
    name: 'HomePage',
    data() {
      return {
        clickedVal: 'HomePage'
      }
    },
    components: { // 引入子组件
      TopNav
    }
  }
</script>

<style>

</style>
