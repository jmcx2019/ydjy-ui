<template>
  <div id="advantage">
    <div class="art-exam-middle-advantage-div">
      <img class="art-exam-middle-advantage-bg" :src="bgImgUrl">
      <div class="art-exam-middle-advantage-content">
        <div class="art-exam-middle-advantage-txt">{{content}}</div>
      </div>
      <img class="art-exam-middle-advantage-icon" :src="iconImgUrl">
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
        bgImgUrl: require('../../../assets/img/art-exam/art-advantage-bg.png'),
        iconImgUrl: require('../../../assets/img/art-exam/art-advantage-icon.png'),
        content: '对于通过参加美术艺术特长生考试，学生可以考取全市有开设美术专业班的高中学校，对于获得美术特长生报考资格的考生，' +
        '在六大校录取时，其学业考试成绩总分原则上不低于600分;在除六大校外其他学校录取时，其学业考试成绩总分原则上不低于480分。'
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get('http://localhost/api/v1/introduction').then(response => {
          if (response.data.code === 1000) {
            let introductionTxtArr = response.data.data.data[0]
          }
        })
      }
    }
  }
</script>

<style>
  .art-exam-middle-advantage-div {
    margin: 0 -15px;
    position: relative;
  }
  .art-exam-middle-advantage-bg {
    width: 100%;
  }
  .art-exam-middle-advantage-content {
    position: absolute;
    background-color: rgba(100, 69, 145, 0.8);
    top: 0;
    right: 0;
    width: 35%;
    height: 100%;
  }
  .art-exam-middle-advantage-txt {
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
  .art-exam-middle-advantage-icon {
    position: absolute;
    bottom: 10%;
    right: 5%;
  }
</style>
