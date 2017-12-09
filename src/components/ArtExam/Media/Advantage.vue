<template>
  <div id="advantage">
    <div class="art-exam-media-advantage-div">
      <img class="art-exam-media-advantage-bg" :src="bgImgUrl">
      <div class="art-exam-media-advantage-content"></div>
      <img class="art-exam-media-advantage-icon" :src="contentImgUrl">
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
        bgImgUrl: require('../../../assets/img/art-exam/media-advantage-bg.png'),
        contentImgUrl: require('../../../assets/img/art-exam/media-advantage-content.png')
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get('http://localhost/api/v1/advantage').then(response => {
          if (response.data.code === 1000) {
            let advantageTxtArr = response.data.data.data[0]
          }
        })
      }
    }
  }
</script>

<style>
  .art-exam-media-advantage-div {
    margin: 0 -15px;
    position: relative;
  }
  .art-exam-media-advantage-bg {
    width: 100%;
  }
  .art-exam-media-advantage-content {
    position: absolute;
    background-color: rgba(100, 69, 145, 0.8);
    top: 0;
    width: 65%;
    height: 100%;
  }
  .art-exam-media-advantage-icon {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 5%;
  }
  @media screen and (max-width: 1200px) {
    .art-exam-media-advantage-icon {
      width: 320px;
    }
  }
  @media screen and (max-width: 600px) {
    .art-exam-media-advantage-icon {
      width: 240px;
    }
  }
</style>
