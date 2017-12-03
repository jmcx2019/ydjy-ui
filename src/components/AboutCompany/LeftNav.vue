<template>
  <div id="left-nav">
    <div class="row nav-item-div" v-for="navItem in navList">
      <router-link :to="{name: navItem.routeName, query:{id: navItem.id,name:navItem.pageName}}">
        <div class="select-list"
             v-bind:class="[navItem.pageName==clicked ? 'selected-bg' : 'unselected-bg']">
          <span class="select-font">{{navItem.pageName}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LeftNav',
    props: ['clicked'], // 引入到组件中的数据/变量
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
    }
  }
</script>

<style>
  .nav-item-div a:link { text-decoration: none; }
  .nav-item-div a:visited { text-decoration: none; }
  .nav-item-div a:active { text-decoration: none; }

  .select-list {
    margin-left: 15px;
  }
  .select-font {
    padding-left: 20px;
  }

  /* start: 选择框样式 */
  .selected-bg,
  .unselected-bg {
    width: 240px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .selected-bg {
    background: url("../../assets/img/about-company/selected-bg.png") center no-repeat;
    color: #644591;
  }
  .unselected-bg {
    background: url("../../assets/img/about-company/unselected-bg.png") center no-repeat;
    color: white;
  }
  /* end: 选择框样式 */
</style>
