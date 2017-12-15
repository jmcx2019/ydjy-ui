<template>
  <div id="learning-progress">
    <top-nav :clicked="clickedVal"></top-nav>

    <div class="container">
      <img style="display: block; width: 100%; height: 100%;" src="../assets/img/coming-soon.png">
    </div>
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
