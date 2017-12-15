<template>
  <div id="about-company">
    <top-nav :clicked="clickedVal"></top-nav>

    <div class="container">
      <div class="row bread-crumbs">
        <span>关于艺动</span>
        <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        <span>{{$route.query.name}}</span>
      </div>

      <div class="row about-company-content">
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
  import Introduction from "./AboutCompany/Introduction"
  import Advantage from "./AboutCompany/Advantage"
  import Teacher from "./AboutCompany/Teacher"
  import Student from "./AboutCompany/Student"
  import Classroom from "./AboutCompany/Classroom"
  import Contact from "./AboutCompany/Contact"

  export default {
    name: 'AboutCompany',
    data() {
      return {
        clickedVal: 'AboutCompany',
        navList: [
          {id: 'introduction', routeName: 'AboutCompanyIntroduction', pageName: '艺动简介'},
          {id: 'advantage', routeName: 'AboutCompanyAdvantage', pageName: '艺动优势'},
          {id: 'teacher', routeName: 'AboutCompanyTeacher', pageName: '师资团队'},
          {id: 'student', routeName: 'AboutCompanyStudent', pageName: '学员风采'},
          {id: 'classroom', routeName: 'AboutCompanyClassroom', pageName: '教学环境'},
          {id: 'contact', routeName: 'AboutCompanyContact', pageName: '联系我们'}
        ]
      }
    },
    components: { // 引入子组件
      TopNav,
      LeftNav,
      Introduction,
      Advantage,
      Teacher,
      Student,
      Classroom,
      Contact
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
  .about-company-content {
    margin-top: 20px;
  }
</style>
