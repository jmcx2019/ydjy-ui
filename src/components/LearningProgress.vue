<template>
  <div id="learning-progress">
    <top-nav :clicked="clickedVal"></top-nav>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'

  export default {
    name: 'LearningProgress',
    data() {
      return {
        clickedVal: 'LearningProgress'
      }
    },
    components: { // 引入子组件
      TopNav
    }
  }
</script>

<style>

</style>
