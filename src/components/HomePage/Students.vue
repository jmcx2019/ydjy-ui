<template>
  <div id="students" class="outstanding-students">
    <div class="outstanding-students-bg">
      <div class="class-bg-more">
        <div>More</div>
        <img :src="moreDown">
      </div>

      <div class="outstanding-students-title">
        <img :src="studentStyleTit">
      </div>
      <div class="container outstanding-students-img-group">
        <div class="col-md-2 col-lg-2 outstanding-students-item"
             v-for="(infoItem,index) in students"
             :class="[index<4 ? 'col-sm-3' : 'hidden-sm', index<2 ? 'col-xs-6' : 'hidden-xs']">
          <img class="center-block" :src="infoItem.viewImg">
          <!--<div class="row outstanding-students-row">-->
            <!--<p>{{infoItem.name}}</p>-->
          <!--</div>-->
          <!--<div class="row">-->
            <!--<p class="p-student-school">{{infoItem.school}}</p>-->
            <!--<p class="p-student-profession">{{infoItem.profession}}</p>-->
          <!--</div>-->
        </div>
      </div>

      <div class="class-bg-more-2">
        <div>More</div>
        <img :src="moreDown">
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
        this.axios.get(process.env.API_URL + 'student?count=6').then(response => {
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
    position: relative;
    text-align: center;
  }

  /* Start: 圆形背景里的more */
  .class-bg-more {
    height: 72px;
    width: 72px;
    position: absolute;
    top: 0;
    left:50%;
    margin: -36px 0 0 -36px;
    background-color: white;
    border-radius: 50%;
    color: #b2cc49;
    font-size: 12px;
  }
  .class-bg-more > div {
    margin-top: 33px;
  }

  .class-bg-more-2 {
    height: 72px;
    width: 72px;
    position: absolute;
    bottom: 0;
    left:50%;
    margin-left: -36px;
    color: #b2cc49;
    font-size: 12px;
  }
  .class-bg-more-2 > div {
    margin-top: 36px;
  }

  .class-bg-more > img,
  .class-bg-more-2 > img {
    width: 6px;
    margin-top: -10px;
  }
  /* End: 圆形背景里的more */
</style>
