<template>
  <div id="introduction">
    <div class="art-exam-middle-introduction-div">
      <img class="art-exam-middle-introduction-bg" :src="bgImgUrl">
      <div class="art-exam-middle-introduction-content">
        <div class="art-exam-middle-introduction-txt" v-html="viewData.content"></div>
      </div>
      <img class="art-exam-middle-introduction-icon" :src="iconImgUrl">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Introduction',
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
        bgImgUrl: require('../../../assets/img/art-exam/middle-introduciton-bg.png'),
        iconImgUrl: require('../../../assets/img/art-exam/middle-introduciton-icon.png'),
        viewData: {content:''}
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'media?id=11').then(response => {
          if (response.data.code === 1000) {
            this.viewData = response.data.data
          }
        })
      }
    }
  }
</script>

<style>
  .art-exam-middle-introduction-div {
    margin: 0 -15px;
    position: relative;
  }
  .art-exam-middle-introduction-bg {
    width: 100%;
  }
  .art-exam-middle-introduction-content {
    position: absolute;
    background-color: rgba(100, 69, 145, 0.8);
    top: 0;
    right: 0;
    width: 35%;
    height: 100%;
  }
  .art-exam-middle-introduction-txt {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5%;
    margin: auto;
    width: 80%;
    height: 25%;
    color: white;
    line-height: 30px;
  }
  .art-exam-middle-introduction-icon {
    position: absolute;
    top: 25%;
    right: 5%;
  }
</style>
