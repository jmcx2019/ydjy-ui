<template>
  <div id="top-nav">
    <div class="top-slogan">
      <div class="container">
        <span class="span-slogan pull-right">艺动教育 您艺术升学之路的实力护航者</span>
      </div>
    </div>

    <nav class="navbar navbar-default" role="navigation">
      <div class="container">

        <div class="navbar-header logo">
          <a class="navbar-brand" @click="toHomePage">
            <img class="img-logo" src="../assets/img/logo.png" alt="艺动教育">
          </a>
        </div>

        <div class="navbar-custom">
          <ul class="nav navbar-nav">

            <li v-bind:class="[(clicked === clicked1 ) ? 'active' : '']"><a @click="toHomePage">首页</a></li>

            <li class="dropdown" v-bind:class="[(clicked === clicked2 ) ? 'active' : '']">
              <a class="dropdown-toggle" data-toggle="dropdown">
                关于艺动
                <img src="../assets/img/home-page/expand.png"/>
              </a>
              <ul class="dropdown-menu">
                <li><a @click="toAboutCompany">艺动简介</a></li>
                <li class="divider"></li>
                <li><a @click="toAboutCompany">艺动优势</a></li>
                <li class="divider"></li>
                <li><a @click="toAboutCompany">师资团队</a></li>
                <li class="divider"></li>
                <li><a @click="toAboutCompany">学员风采</a></li>
                <li class="divider"></li>
                <li><a @click="toAboutCompany">教学环境</a></li>
                <li class="divider"></li>
                <li><a @click="toAboutCompany">联系我们</a></li>
              </ul>
            </li>

            <li class="dropdown" v-bind:class="[(clicked === clicked3 ) ? 'active' : '']">
              <a class="dropdown-toggle" data-toggle="dropdown">
                艺术升学
                <img src="../assets/img/home-page/expand.png"/>
              </a>
              <ul class="dropdown-menu">
                <li><a @click="toArtExam">传媒艺考</a></li>
                <li class="divider"></li>
                <li><a @click="toArtExam">美术艺考</a></li>
                <li class="divider"></li>
                <li><a @click="toArtExam">艺考Q&A</a></li>
                <li class="divider"></li>
                <li><a @click="toArtExam">中考美术特长生</a></li>
              </ul>
            </li>

            <li class="dropdown" v-bind:class="[(clicked === clicked4 ) ? 'active' : '']">
              <a class="dropdown-toggle" data-toggle="dropdown">
                培训课程
                <img src="../assets/img/home-page/expand.png"/>
              </a>
              <ul class="dropdown-menu">
                <li><a @click="toTrainClass">美术培训</a></li>
                <li class="divider"></li>
                <li><a @click="toTrainClass">传媒培训</a></li>
              </ul>
            </li>

            <li v-bind:class="[(clicked === clicked5 ) ? 'active' : '']"><a @click="toLearningProgress">学习进度</a></li>

            <li v-bind:class="[(clicked === clicked6 ) ? 'active' : '']"><a @click="toStudyAbroad">留学游学</a></li>

          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'TopNav',
    props: ['clicked'], // 引入到组件中的数据/变量
    data() {
      return {
        clicked1: 'HomePage',
        clicked2: 'AboutCompany',
        clicked3: 'ArtExam',
        clicked4: 'TrainClass',
        clicked5: 'LearningProgress',
        clicked6: 'StudyAbroad',
      }
    },
    methods: {
      toHomePage() {
        this.$router.push({path: '/'})
      },
      toAboutCompany() {
        this.$router.push({path: '/about-company'})
      },
      toArtExam() {
        this.$router.push({path: '/art-exam'})
      },
      toTrainClass() {
        this.$router.push({path: '/train-class'})
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
  }

  .navbar .nav>li>a {
    padding-left: 30px;
    padding-right: 30px;
    font-family: "Microsoft YaHei", sans-serif;
    font-size: 16px;
    font-weight: 100;
    color: white;
  }

  .navbar-default,
  .navbar-default .navbar-nav>.active>a,
  .navbar-default .navbar-nav>.active>a:hover,
  .navbar-default .navbar-nav>.active>a:focus {
    background-color: #5f488c;
    border-color: #5f488c;
    color: #acc14f;
  }

  .navbar-default .navbar-nav>.open>a,
  .navbar-default .navbar-nav>.open>a:hover,
  .navbar-default .navbar-nav>.open>a:focus {
    background-color: #5f488c;
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

  .dropdown-menu>li>a {
    color: white;
    font-size: 13px;
    font-weight: 100;
    text-align: center;
    line-height: 45px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .dropdown-menu>li>a:hover,
  .dropdown-menu>li>a:focus {
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
