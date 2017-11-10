<template>
  <div id="about-company">
    <top-nav :clicked="clickedVal"></top-nav>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'

  export default {
    name: 'AboutCompany',
    data() {
      return {
        clickedVal: 'AboutCompany'
      }
    },
    components: { // 引入子组件
      TopNav
    }
  }
</script>

<style>

</style>
