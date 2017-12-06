<template>
  <div id="home-page">
    <top-nav :clicked="clickedVal"></top-nav>
    <banner></banner>
    <art-exam></art-exam>
    <students></students>
    <teachers></teachers>
    <class-table></class-table>
    <news></news>
    <contact></contact>
    <div class="homepage-footer">{{footerText}}</div>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'
  import Banner from './Banner'
  import ArtExam from './HomePage/ArtExam'
  import Students from './HomePage/Students'
  import Teachers from './HomePage/Teachers'
  import ClassTable from './HomePage/ClassTable'
  import News from './HomePage/News'
  import Contact from './HomePage/Contact'

  export default {
    name: 'HomePage',
    data() {
      return {
        clickedVal: 'HomePage',
        footerText: '版权所有 艺动教育 京ICP备案10011865号    京公网安备11010502022735号'
      }
    },
    components: { // 引入子组件
      TopNav,
      Banner,
      ArtExam,
      Students,
      Teachers,
      ClassTable,
      News,
      Contact
    }
  }
</script>

<style>
  .homepage-footer {
    height: 80px;
    line-height: 80px;
    background-color: #f6f6f6;
    color: #c7c7c7;
    text-align: center;
    font-size: 10px;
  }
</style>
