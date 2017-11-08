<template>
  <div id="app">
    <!-- Bootstrap的部分不用关注，只是基础样式 -->
    <div class="navbar navbar-default navbar-static-top"></div>

    <div class="container"> <!-- 这里的ID是用来提供Vue操作的 -->
      <div class="row">
        <!-- 数组数据操作和动态显示，事件的监听和绑定等 -->
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">通过Vue-Cli进行组件化开发</div>
            <div class="panel-body">
              <router-view :todos="todos"/> <!-- 通过router view部署组件和传参 -->
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() { // 基础数据和变量
      return {
        todos: []
      }
    },
    mounted() { // 获取后端API的数据
      this.axios.get('http://localhost/api/todos').then(response => {
        this.todos = response.data
      })
    }
  }
</script>

<style></style>
