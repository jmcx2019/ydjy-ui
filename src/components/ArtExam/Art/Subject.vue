<template>
  <div id="subject">
    <div class="row ae-art-subject-row">
      <img :src="bgImg">

      <div class="ae-art-subject-view-data" v-for="(vd,index) in viewData">
        <div class="ae-art-subject-view-data-name">{{vd.name}} :</div>
        <div class="ae-art-subject-view-data-txt"
             :class="index===(viewData.length-1) ? 'ae-art-subject-last-view-data-txt' : ''">{{vd.txt}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Subject',
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
        bgImg: require('../../../assets/img/art-exam/art-subject.png'),
        viewData: [
          {name: '考试科目', txt: '素描、色彩、速写，分省联考和院校单考，每年1月份考试。'},
          {name: '适合学生', txt: '具备一定美术天赋或一定美术基础，希望通过美术专业考取本科及以上院校的高中学生。'},
        ]
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'introduction').then(response => {
          if (response.data.code === 1000) {
            let introductionTxtArr = response.data.data.data[0]
          }
        })
      }
    }
  }
</script>

<style>
  .ae-art-subject-row {
    min-height: 526px;
    background-color: #644591;
  }
  .ae-art-subject-row > img {
    height: 100%;
    width: 100%;
    margin-bottom: 47px;
  }

  .ae-art-subject-view-data {
    margin: 0 30px 22px 30px;
  }
  .ae-art-subject-view-data-name {
    color: #b2cc49;
  }
  .ae-art-subject-view-data-txt {
    color: white;
  }
  .ae-art-subject-last-view-data-txt {
    margin-bottom: 47px;
  }
</style>
