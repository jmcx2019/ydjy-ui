<template>
  <div id="teachers" class="homepage-teacher-team">
    <div class="container">
      <div class="homepage-teacher-team-title">
        <img :src="teacherTeamTit">
      </div>
      <div class="homepage-teacher-team-img-group">
        <div class="col-md-4 col-lg-3"
             v-for="(item,index) in teachers"
             :class="[
               index<3 ? 'col-md-4' : 'hidden-md',
               index<2 ? 'col-sm-6' : 'hidden-sm',
               index<2 ? 'col-xs-6' : 'hidden-xs' ]">
          <img :src="item.img">
          <div class="row">
            <p class="p-teacher-name-school">{{item.name}} | {{item.position}}</p>
            <p class="p-teacher-profession-title">{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Teachers",
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
        teacherTeamTit: require('../../assets/img/home-page/teacher-team.png'),
        teachers: [{img: require('../../assets/img/null.png')}]
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'teacher?count=4').then(response => {
          if (response.data.code === 1000) {
            this.teachers = response.data.data.data
            this.teachers.forEach(function (val) {
              val.img = process.env.IMG_URL + val.avatar
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .homepage-teacher-team-title {
    margin-top: 32px;
    margin-bottom: 44px;
  }
  .homepage-teacher-team-title,
  .homepage-teacher-team-img-group {
    text-align: center;
  }
  .homepage-teacher-team-img-group img {
    margin: 0 11px;
    width: 240px;
    height: 240px;
  }

  .p-teacher-profession-title {
    font-size: 13px;
    color: #b2cc49;
  }

  .p-teacher-name-school {
    margin-top: 16px;
    margin-bottom: 0;
    font-size: 13px;
    color: #644591;
  }
</style>
