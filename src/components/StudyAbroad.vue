<template>
  <div id="study-abroad">
    <top-nav :clicked="clickedVal"></top-nav>

    <div class="container">
      <div class="row bread-crumbs">
        <span>艺术升学</span>
        <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        <span>{{studyAbroadInfo[$route.query.child].pageName}}</span>
      </div>

      <div class="row art-exam-content">
        <div class="hidden-xs hidden-sm col-md-4 col-lg-3">
          <left-nav :clicked="studyAbroadInfo[$route.query.child].pageName"
                    :navList="studyAbroadInfo"></left-nav>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
          <component :is="'StudyAbroad' + studyAbroadInfo[$route.query.child].id"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'
  import LeftNav from "./Public/LeftNav"
  import StudyAbroadIntroduction from "./StudyAbroad/Introduction"

  export default {
    name: 'StudyAbroad',
    props: ['clicked'], // 引入到组件中的数据/变量
    data() {
      return {
        clickedVal: 'StudyAbroad',
        studyAbroadInfo: [
          {id: 'Introduction', routeName: 'StudyAbroadIntroduction', pageName: '项目简介'},
          {id: 'Advantage', routeName: 'StudyAbroadAdvantage', pageName: '项目优势'},
          {id: 'Country', routeName: 'StudyAbroadCountry', pageName: '目标国家简介'},
          {id: 'Art', routeName: 'StudyAbroadArt', pageName: '艺术游学'},
          {id: 'Exchange', routeName: 'StudyAbroadExchange', pageName: '国际交换生'},
          {id: 'Training', routeName: 'StudyAbroadTraining', pageName: '外语培训'}
        ]
      }
    },
    components: { // 引入子组件
      TopNav,
      LeftNav,
      StudyAbroadIntroduction
    }
  }
</script>

<style>

</style>
