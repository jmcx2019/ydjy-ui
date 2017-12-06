<template>
  <div id="students" class="outstanding-students">
    <div class="outstanding-students-bg">
      <div class="container">
        <div class="center-block outstanding-students-bg-more">
          <div>More</div>
          <img :src="moreDown">
        </div>
      </div>
      <div class="outstanding-students-title">
        <img :src="studentStyleTit">
      </div>
      <div class="container outstanding-students-img-group">
        <div class="col-md-2 col-lg-2 outstanding-students-item"
             v-for="(infoItem,index) in students"
             :class="[index<4 ? 'col-sm-3' : 'hidden-sm', index<2 ? 'col-xs-6' : 'hidden-xs']">
          <img class="center-block" :src="infoItem.viewImg">
          <div class="row outstanding-students-row">
            <p>{{infoItem.name}}</p>
          </div>
          <div class="row">
            <p class="p-student-school">{{infoItem.school}}</p>
            <p class="p-student-profession">{{infoItem.profession}}</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="center-block outstanding-students-bg-more-2">
          <div>More</div>
          <img :src="moreDown">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Students",
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
        studentStyleTit: require('../../assets/img/home-page/student-style.png'),
        moreDown: require('../../assets/img/home-page/more-down.png'),
        students: [{viewImg: require('../../assets/img/null.png')}]
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get('http://localhost/api/v1/student?count=6').then(response => {
          if (response.data.code === 1000) {
            this.students = response.data.data.data
            this.students.forEach(function (val) {
              val.viewImg = 'http://localhost/uploads/' + val.image
              val.name = '学员姓名'
              val.school = '学校名称'
              val.profession = '专业名称'
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .outstanding-students-title {
    padding-top: 20px;
    margin-bottom: 60px;
    text-align: center;
  }
  .outstanding-students-img-group {
    text-align: center;
  }
  .outstanding-students-img-group img {
    width: 140px;
    height: 140px;
  }

  .outstanding-students-item {
    text-align: center;
    margin: 0 auto;
  }

  .outstanding-students-row {
    background-color: white;
    width: 140px;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    color: #644591;
    margin: 0 auto;
  }
  .p-student-school {
    margin-bottom: 0;
    margin-top: 14px;
    font-size: 13px;
    color: white;
  }
  .p-student-profession {
    font-size: 13px;
    color: #b2cc49;
  }

  .outstanding-students {
    margin-top: 50px;
  }
  .outstanding-students-bg {
    background: url("../../assets/img/home-page/student-stlye-bg.png") center no-repeat;
    height: 492px;
  }

  /* Start: 圆形背景里的more */
  .outstanding-students-bg-more {
    text-align: center;
    height: 72px;
    width: 72px;
    background-color: white;
    border-radius: 50%;
    color: #b2cc49;
    font-size: 12px;
    margin-top: -36px;
    padding-top: 30px;
  }
  .class-bg-more > img,
  .outstanding-students-bg-more > img {
    width: 6px;
    margin-top: -10px;
  }
  .outstanding-students-bg-more-2 {
    text-align: center;
    height: 72px;
    width: 72px;
    background-color: transparent;
    color: #b2cc49;
    font-size: 12px;
    margin-top: 48px;
  }
  .outstanding-students-bg-more-2 > img,
  .class-bg-more-2 > img {
    width: 6px;
    margin-top: -10px;
  }
  /* End: 圆形背景里的more */
</style>
