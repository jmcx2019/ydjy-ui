<template>
  <div id="advantage">
    <div class="sa-advantage-div">
      <img class="sa-advantage-bg" :src="bgImgUrl">
      <div class="sa-advantage-content">
        <div class="sa-advantage-txt">{{content}}</div>
      </div>
      <img class="sa-advantage-icon" :src="iconImgUrl">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Advantage',
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
        bgImgUrl: require('../../assets/img/study-abroad/advantage-bg.png'),
        iconImgUrl: require('../../assets/img/art-exam/art-advantage-icon.png'),
        content: '通过参加美术高考，学生可以考取全国有开设美术类专业的本科以上院校，2017年广东美术专' +
        '业录取分数线比同批次普通高考录取分数平均低了200分。'
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
  .sa-advantage-div {
    margin: 0 -15px;
    position: relative;
  }
  .sa-advantage-bg {
    width: 100%;
  }
  .sa-advantage-content {
    position: absolute;
    background-color: rgba(100, 69, 145, 0.8);
    top: 0;
    right: 0;
    width: 35%;
    height: 100%;
  }
  .sa-advantage-txt {
    position: absolute;
    left: 0;
    right: 0;
    top: 10%;
    margin: auto;
    width: 80%;
    height: 45%;
    color: white;
    line-height: 30px;
  }
  .sa-advantage-icon {
    position: absolute;
    bottom: 10%;
    right: 5%;
  }
</style>
