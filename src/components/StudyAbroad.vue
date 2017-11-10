<template>
  <div id="study-abroad">
    <top-nav :clicked="clickedVal"></top-nav>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'

  export default {
    name: 'StudyAbroad',
    data() {
      return {
        clickedVal: 'StudyAbroad'
      }
    },
    components: { // 引入子组件
      TopNav
    }
  }
</script>

<style>

</style>
