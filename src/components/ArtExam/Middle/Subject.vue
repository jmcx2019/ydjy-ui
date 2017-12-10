<template>
  <div id="subject">
    <div class="row ae-middle-subject-row">
      <img :src="bgImg">

      <div class="ae-middle-subject-view-data" v-for="(vd,index) in viewData">
        <div class="ae-middle-subject-view-data-name">{{vd.name}} :</div>
        <div class="ae-middle-subject-view-data-txt"
             :class="index===(viewData.length-1) ? 'ae-middle-subject-last-view-data-txt' : ''">{{vd.txt}}</div>
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
          {name: '考试科目', txt: '色彩（相片写生，时间100分钟）、素描（相片写生，时间100分钟）、特长（专项技能：油画、国画、版画、' +
            '工艺设计、书法等项目自选一项进行创作，时间80分钟），每年5月底考试。'},
          {name: '适合学生', txt: '艺术类在初中阶段获市、镇街级、市直属学校校级以上竞赛奖励者，未参赛但特别优秀者，需由学校两位具有' +
            '中级以上职称的专业教师推荐，经审查同意后方可报名。'},
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
  .ae-middle-subject-row {
    min-height: 526px;
    background-color: #644591;
  }
  .ae-middle-subject-row > img {
    height: 100%;
    width: 100%;
    margin-bottom: 47px;
  }

  .ae-middle-subject-view-data {
    margin: 0 30px 22px 30px;
  }
  .ae-middle-subject-view-data-name {
    color: #b2cc49;
  }
  .ae-middle-subject-view-data-txt {
    color: white;
  }
  .ae-middle-subject-last-view-data-txt {
    margin-bottom: 47px;
  }
</style>
