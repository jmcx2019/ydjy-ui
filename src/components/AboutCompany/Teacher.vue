<template>
  <div id="teacher">
    <div class="row about-company-teacher-div-bg">
      <div class="row teacher-click-group">
        <div class="teacher-group-view" v-for="(item, index) in teacherGroupName">
          <div class="select-list"
               v-bind:class="[index==clickedIndex ? 'teacher-clicked-bg' : 'teacher-unclicked-bg']">
            <span class="teacher-click-font" @click="clickTeacherGroupTag(index)">{{item}}</span>
          </div>
        </div>
      </div>

      <carousel-profile :profileDataArr="this.teachers" class="carousel-profile-style"></carousel-profile>
    </div>
  </div>
</template>

<script>
  // 引入子组件
  import CarouselProfile from '../Public/CarouselProfile'

  export default {
    name: 'Teacher',
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
        teacherGroupName: ['传媒师资团队', '美术师资团队'],
        clickedIndex: 0,
        teachers: []
      }
    },
    methods: {
      clickTeacherGroupTag($index) {
        this.clickedIndex = $index
      },
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'teacher').then(response => {
          if (response.data.code === 1000) {
            let data = [{viewImg: ''}], level1 = [], level2 = [], level3 = [], levelNull = []

            data = response.data.data.data
            for (let i = 0, length = data.length; i < length; i++) {
              data[i].viewImg = 'http://localhost/uploads/' + data[i].avatar
              if (data[i].view_level === '1') {
                level1.push(data[i])
              } else if (data[i].view_level === '2') {
                level2.push(data[i])
              } else if (data[i].view_level === '3') {
                level3.push(data[i])
              } else {
                levelNull.push(data[i])
              }
            }

            this.teachers.push(level3[0])
            this.teachers.push(level2[0])
            this.teachers.push(level1[0])
            this.teachers.push(level2[1])
            this.teachers.push(level3[1])
            for (let val in levelNull) this.teachers.push(levelNull[val])
          }
        })
      }
    },
    components: { // 引入子组件
      CarouselProfile
    }
  }
</script>

<style>
  .about-company-teacher-div-bg {
    min-height: 526px;
    background-color: #f8f8f8;
  }

  .teacher-click-group {
    padding: 40px 0 0 40px;
  }

  .teacher-group-view {
    float: left;
    width: 140px;
    height: 22px;
    line-height: 22px;
  }

  .teacher-clicked-bg {
    background: url("../../assets/img/about-company/teacher-clicked.png") center no-repeat;
    color: #644591;
    text-align: center;
  }
  .teacher-unclicked-bg {
    background: url("../../assets/img/about-company/teacher-unclicked.png") center no-repeat;
    color: #5e5e5e;
    text-align: center;
  }
  .teacher-click-font {
    font-size: 13px;
    padding-left: 0;
    cursor: pointer;
  }

  .carousel-profile-style {
    margin-top: 60px;
  }
</style>
