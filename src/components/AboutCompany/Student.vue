<template>
  <div id="student">
    <div class="row about-company-student-div-bg">
      <gallery :viewDataArr="this.students"></gallery>
    </div>
  </div>
</template>

<script>
  // 引入子组件
  import Gallery from '../Public/Gallery'

  export default {
    name: 'Student',
    created() {
      // 组件创建完后获取数据，此时 data 已经被 observed 了
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    data() {
      return {
        students: [{viewImg: require('../../assets/img/null.png')}]
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get('http://localhost/api/v1/student').then(response => {
          if (response.data.code === 1000) {
            this.students = response.data.data.data
            this.students.forEach(function (val) {
              val.viewImg = 'http://localhost/uploads/' + val.image
            })
          }
        })
      }
    },
    components: { // 引入子组件
      Gallery
    }
  }
</script>

<style>
  .about-company-student-div-bg {
    min-height: 526px;
    background-color: #f8f8f8;
  }
</style>
