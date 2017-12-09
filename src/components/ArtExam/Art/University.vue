<template>
  <div id="university">
    <div class="art-exam-art-university-div">
      <img class="art-exam-art-university-bg" :src="bgImgUrl">
      <div class="art-exam-art-university-content">
        <div class="art-exam-art-university-txt">{{content}}</div>
      </div>
      <img class="art-exam-art-university-icon" :src="iconImgUrl">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'University',
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
        bgImgUrl: require('../../../assets/img/art-exam/art-university-bg.png'),
        iconImgUrl: require('../../../assets/img/art-exam/art-university-icon.png'),
        content: '中央美术学院、中国美术学院、清华大学美术学院、四川美术学院、鲁迅美术学院、广州美术学院、天津美术学院、西安美术学院、湖北美术学院等。'
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
  .art-exam-art-university-div {
    margin: 0 -15px;
    position: relative;
  }
  .art-exam-art-university-bg {
    width: 100%;
  }
  .art-exam-art-university-content {
    position: absolute;
    background-color: rgba(100, 69, 145, 0.8);
    top: 0;
    right: 0;
    width: 35%;
    height: 100%;
  }
  .art-exam-art-university-txt {
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
  .art-exam-art-university-icon {
    position: absolute;
    bottom: 10%;
    right: 5%;
  }
</style>
