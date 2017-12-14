<template>
  <div id="advantage">
    <div class="art-exam-art-introduction-div">
      <img class="art-exam-art-introduction-bg" :src="bgImgUrl">
      <div class="art-exam-art-introduction-content">
        <div class="art-exam-art-introduction-txt" v-html="viewData.content"></div>
      </div>
      <img class="art-exam-art-introduction-icon" :src="contentImgUrl">
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
        bgImgUrl: require('../../../assets/img/art-exam/art-introduction-bg.png'),
        contentImgUrl: require('../../../assets/img/art-exam/art-introduction-icon.png'),
        viewData: {content:''}
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'media?id=7').then(response => {
          if (response.data.code === 1000) {
            this.viewData = response.data.data
          }
        })
      }
    }
  }
</script>

<style>
  .art-exam-art-introduction-div {
    margin: 0 -15px;
    position: relative;
  }
  .art-exam-art-introduction-bg {
    width: 100%;
  }
  .art-exam-art-introduction-content {
    position: absolute;
    background-color: rgba(100, 69, 145, 0.8);
    top: 0;
    width: 40%;
    height: 100%;
  }
  .art-exam-art-introduction-txt {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5%;
    margin: auto;
    width: 80%;
    height: 45%;
    color: white;
    line-height: 30px;
  }
  .art-exam-art-introduction-icon {
    position: absolute;
    margin: auto;
    top: 20%;
    left: 5%;
  }
  @media screen and (max-width: 1200px) {
    .art-exam-art-introduction-txt {
      height: 60%;
    }
    .art-exam-art-introduction-icon {
      top: 10%;
    }
  }
  @media screen and (max-width: 600px) {
    .art-exam-art-introduction-icon {
      top: 10%;
    }
  }
</style>
