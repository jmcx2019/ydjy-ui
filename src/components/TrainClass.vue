<template>
  <div id="train-class">
    <top-nav :clicked="clickedVal"></top-nav>

    <div class="container">
      <div class="row bread-crumbs">
        <span>培训课程</span>
        <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        <span>{{$route.query.name}}</span>
      </div>

      <div class="row train-class-content">
        <div class="hidden-xs hidden-sm col-md-4 col-lg-3">
          <left-nav :clicked="$route.query.name" :navList="navList"></left-nav>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
          <component :is="$route.query.id"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'
  import LeftNav from "./Public/LeftNav"
  import Art from './TrainClass/Art'
  import Media from './TrainClass/Media'

  export default {
    name: 'TrainClass',
    data() {
      return {
        clickedVal: 'TrainClass',
        navList: [
          {id: 'media', routeName: 'TrainClassMedia', pageName: '传媒培训'},
          {id: 'art', routeName: 'TrainClassArt', pageName: '美术培训'}
        ]
      }
    },
    components: { // 引入子组件
      TopNav,
      LeftNav,
      Art,
      Media
    }
  }
</script>

<style>
  .bread-crumbs {
    margin-top: 24px;
    color: #868686;
    font-size: 11px;
    padding-left: 15px;
  }
  .train-class-content {
    margin-top: 20px;
  }
</style>
