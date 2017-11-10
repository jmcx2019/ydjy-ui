<template>
  <div id="train-class">
    <top-nav :clicked="clickedVal"></top-nav>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'

  export default {
    name: 'TrainClass',
    data() {
      return {
        clickedVal: 'TrainClass'
      }
    },
    components: { // 引入子组件
      TopNav
    }
  }
</script>

<style>

</style>
