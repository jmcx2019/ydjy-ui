<template>
  <div id="art-exam">
    <top-nav :clicked="clickedVal"></top-nav>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'

  export default {
    name: 'ArtExam',
    data() {
      return {
        clickedVal: 'ArtExam'
      }
    },
    components: { // 引入子组件
      TopNav
    }
  }
</script>

<style>

</style>
