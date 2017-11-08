<template>
  <!-- 增加数组数据部分组件化 -->
  <form v-on:submit.prevent="addTodo(newTodo)"> <!-- 事件绑定；prevent是用来阻止form的默认提交行为 -->
    <div class="from-group">
      <input type="text" v-model="newTodo.title" class="form-control" placeholder="Add a new todo">
    </div>
    <div class="from-group">
      <button class="btn btn-success" type="submit">Add Todo</button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'TodoForm',
    props: ['todos'], // 引入到组件中的数据/变量
    data() { // 注意组件中的数据是一个方法，不是一个对象
      return {
        newTodo: {id: null, title: '', completed: false}
      }
    },
    methods: { // 逻辑方法
      // 注意：这里使用了ES6的语法，如果IDE报错，请设置一下
      // WebStorm设置方法：Preferences > Languages & Frameworks > JavaScript > ECMAScript 6
      addTodo(newTodo) {
        // Post提交数据
        this.axios.post('http://localhost/api/todo/create', {title: this.newTodo.title}).then(response => {
          console.log(response.data) // 测试是否连接成功，测试环境没有实际连通DB

          this.todos.push(newTodo)
        })

        this.newTodo = {id: null, title: '', completed: false}
      }
    }
  }
</script>

<style></style>
