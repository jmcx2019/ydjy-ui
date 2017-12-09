<template>
  <div id="introduction">
    <div class="about-company-advantage-div">
      <img src="../../../assets/img/about-company/advantage.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Introduction'
  }
</script>

<style>
  /* start: 背景图按宽高比自适应div的最大宽度，填充图自适应背景图 */
  .about-company-advantage-div {
    margin: 0 -15px;
    background: url("../../../assets/img/about-company/advantage-bg.png") center no-repeat;
    background-size: 100%;
  }
  .about-company-advantage-div > img {
    height: 100%;
    width: 100%;
  }
  /* end: 背景图按宽高比自适应div的最大宽度，填充图自适应背景图 */
</style>
