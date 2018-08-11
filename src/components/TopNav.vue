<template>
  <div id="top-nav">

    <nav class="navbar navbar-fixed-top navbar-default" role="navigation">
      <div class="top-slogan">
        <div class="container">
          <span class="span-slogan pull-right">艺动教育 您艺术升学之路的实力护航者</span>
        </div>
      </div>

      <div class="container">

        <div class="navbar-header logo">
          <a class="navbar-brand" @click="toHomePage">
            <img class="img-logo" src="../assets/img/logo.png">
          </a>
        </div>

        <div class="navbar-custom">
          <ul class="nav navbar-nav">

            <li v-bind:class="[(clicked === navInfo[0].clickedVal ) ? 'active' : '']"><a @click="toHomePage">{{navInfo[0].name}}</a>
            </li>

            <li class="dropdown" v-bind:class="[(clicked === navInfo[1].clickedVal ) ? 'active' : '']">
              <a class="dropdown-toggle" data-toggle="dropdown">
                {{navInfo[1].name}}
                <img src="../assets/img/home-page/expand.png"/>
              </a>
              <ul class="dropdown-menu">
                <li v-for="(aci,index) in aboutCompanyInfo">
                  <router-link :to="{name: aci.routeName, query:{id:aci.id, name:aci.pageName}}">
                    {{aci.pageName}}
                  </router-link>
                  <div class="divider" v-if="index<5"></div>
                </li>
              </ul>
            </li>

            <li class="dropdown" v-bind:class="[(clicked === navInfo[2].clickedVal ) ? 'active' : '']">
              <a class="dropdown-toggle" data-toggle="dropdown">
                {{navInfo[2].name}}
                <img src="../assets/img/home-page/expand.png"/>
              </a>
              <ul class="dropdown-menu">
                <li v-for="(aei,index) in artExamInfo">
                  <router-link :to="{name: aei.routeName, query:{id:aei.id, name:aei.pageName, child:0}}">
                    {{aei.pageName}}
                  </router-link>
                  <div class="divider" v-if="index<2"></div>
                </li>
              </ul>
            </li>

            <li class="dropdown" v-bind:class="[(clicked === navInfo[3].clickedVal ) ? 'active' : '']">
              <a class="dropdown-toggle" data-toggle="dropdown">
                {{navInfo[3].name}}
                <img src="../assets/img/home-page/expand.png"/>
              </a>
              <ul class="dropdown-menu">
                <li v-for="(tci,index) in trainClassInfo">
                  <router-link :to="{name: tci.routeName, query:{id:tci.id, name:tci.pageName}}">
                    {{tci.pageName}}
                  </router-link>
                  <div class="divider" v-if="index<1"></div>
                </li>
              </ul>
            </li>

            <li v-bind:class="[(clicked === navInfo[4].clickedVal ) ? 'active' : '']"><a @click="toLearningProgress">{{navInfo[4].name}}</a>
            </li>

            <li v-bind:class="[(clicked === navInfo[5].clickedVal ) ? 'active' : '']">
              <router-link :to="{name: 'StudyAbroadIntroduction', query: {id: 'Introduction', child: 0}}">
                {{navInfo[5].name}}
              </router-link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
    <div class="navbar-div"></div>
  </div>
</template>

<script>
  export default {
    name: 'TopNav',
    props: ['clicked'], // 引入到组件中的数据/变量
    data() {
      return {
        navInfo: [
          {name: '首页', clickedVal: 'HomePage'},
          {name: '关于艺动', clickedVal: 'AboutCompany'},
          {name: '艺术升学', clickedVal: 'ArtExam'},
          {name: '培训课程', clickedVal: 'TrainClass'},
          {name: '学习进度', clickedVal: 'LearningProgress'},
          {name: '留学游学', clickedVal: 'StudyAbroad'}
        ],
        aboutCompanyInfo: [
          {id: 'introduction', routeName: 'AboutCompanyIntroduction', pageName: '艺动简介'},
          {id: 'advantage', routeName: 'AboutCompanyAdvantage', pageName: '艺动优势'},
          {id: 'teacher', routeName: 'AboutCompanyTeacher', pageName: '师资团队'},
          {id: 'student', routeName: 'AboutCompanyStudent', pageName: '学员风采'},
          {id: 'classroom', routeName: 'AboutCompanyClassroom', pageName: '教学环境'},
          {id: 'contact', routeName: 'AboutCompanyContact', pageName: '联系我们'}
        ],
        artExamInfo: [
          {id: 'media', routeName: 'ArtExamMedia', pageName: '传媒艺考'},
          {id: 'art', routeName: 'ArtExamArt', pageName: '美术艺考'},
          {id: 'middle', routeName: 'ArtExamMiddle', pageName: '中考美术特长生'}
        ],
        trainClassInfo: [
          {id: 'media', routeName: 'TrainClassMedia', pageName: '传媒培训'},
          {id: 'art', routeName: 'TrainClassArt', pageName: '美术培训'}
        ]
      }
    },
    methods: {
      toHomePage() {
        this.$router.push({path: '/'})
      },
      toLearningProgress() {
        this.$router.push({path: '/learning-progress'})
      },
      toStudyAbroad() {
        this.$router.push({path: '/study-abroad'})
      }
    }
  }
</script>

<style>
  .top-slogan {
    height: 34px;
    background-color: white;
    color: #5f488c;
    border: 0;
  }

  .span-slogan {
    font-family: "STKaiti", sans-serif;
    font-size: 14px;
    margin-top: 7px;
  }

  .logo > a {
    display: block;
    line-height: 0;
  }

  .img-logo {
    margin-top: -26px;
    margin-left: -5px;
    position: absolute;
    z-index: 999;
    /*height: 74px;*/
  }

  .navbar-custom {
    margin-left: 100px;
  }

  /* 解决去除a标签里的href，导致没有样式的问题 */
  a:hover {
    cursor: pointer;
  }

  /* 导航区域 start */
  .navbar {
    border-radius: 0;
    border: 0;
  }

  .navbar-nav ul {
    width: 137.33px;
  }

  .navbar .nav > li > a {
    padding-left: 30px;
    padding-right: 30px;
    font-size: 16px;
    font-weight: 400;
    color: white;
  }

  .navbar-default,
  .navbar-default .navbar-nav > .active > a,
  .navbar-default .navbar-nav > .active > a:hover,
  .navbar-default .navbar-nav > .active > a:focus {
    background-color: #5f488c;
    border-color: #5f488c;
    color: #acc14f;
  }

  .navbar-default .navbar-nav > .open > a,
  .navbar-default .navbar-nav > .open > a:hover,
  .navbar-default .navbar-nav > .open > a:focus {
    background-color: #5f488c;
  }

  .navbar-div {
    height: 90px;
  }
  /* 导航区域 end */

  /*下拉菜单 start*/
  .dropdown-menu {
    background-color: #5f488c;
    min-width: 110px;
    border: 0;
    filter: alpha(opacity:90);
    opacity: 0.9;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    padding: 0;
  }

  .dropdown-menu > li > a {
    color: white;
    font-size: 13px;
    font-weight: 100;
    text-align: center;
    line-height: 45px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .dropdown-menu > li > a:hover,
  .dropdown-menu > li > a:focus {
    background-color: #5f488c;
    color: #acc14f;
  }

  .dropdown-menu .divider {
    height: 2px;
    margin: 0;
    background-color: white;
  }

  /*下拉菜单 end*/
</style>
