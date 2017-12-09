<template>
  <div id="left-nav">
    <div class="row nav-item-div" v-for="(navItem,index) in navList">

      <router-link :to="{name: navItem.routeName, query:{id: navItem.id, name: navItem.pageName}}"
                   v-if="navParams==null">
        <div class="select-list"
             v-bind:class="[navItem.pageName === clicked ? 'selected-bg' : 'unselected-bg']">
          <span class="select-font">{{navItem.pageName}}</span>
        </div>
      </router-link>

      <router-link :to="{name: navParams.routeName, query:{id: navParams.id, name: navParams.pageName, child:index}}"
                   v-if="navParams!=null">
        <div class="select-list"
             v-bind:class="[navItem.pageName === clicked ? 'selected-bg' : 'unselected-bg']">
          <span class="select-font">{{navItem.pageName}}</span>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'LeftNav',
    props: ['clicked', 'navList', 'navParams'] // 引入到组件中的数据/变量
  }
</script>

<style>
  .nav-item-div a:link {
    text-decoration: none;
  }

  .nav-item-div a:visited {
    text-decoration: none;
  }

  .nav-item-div a:active {
    text-decoration: none;
  }

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
