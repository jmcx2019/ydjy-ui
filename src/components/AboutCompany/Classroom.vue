<template>
  <div id="classroom">
    <div class="row about-company-student-div-bg">
      <gallery :viewDataArr="this.classrooms"></gallery>
    </div>
  </div>
</template>

<script>
  // 引入子组件
  import Gallery from '../Public/Gallery'

  export default {
    name: 'Classroom',
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
        classrooms: [{viewImg: require('../../assets/img/null.png'), location: '东莞校区'}],
        location: {
          dg: require('../../assets/img/about-company/classroom-dongguan.png'),
          gz: require('../../assets/img/about-company/classroom-guangzhou.png')
        }
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'classroom').then(response => {
          if (response.data.code === 1000) {
            this.classrooms = response.data.data.data

            for (let i = 0, length = this.classrooms.length; i < length; i++) {
              this.classrooms[i].viewImg = process.env.IMG_URL + this.classrooms[i].image
              if (this.classrooms[i].location === '东莞校区') {
                this.classrooms[i].viewMark = this.location.dg
              } else {
                this.classrooms[i].viewMark = this.location.gz
              }
            }
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
