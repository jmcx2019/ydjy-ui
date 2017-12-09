<template>
  <div id="introduction">
    <div class="art-exam-media-introduction-div">
      <img class="art-exam-media-introduction-bg" :src="bgImgUrl">
      <div class="art-exam-media-introduction-content">
        <div class="art-exam-media-introduction-txt">{{content}}</div>
      </div>
      <img class="art-exam-media-introduction-icon" :src="iconImgUrl">
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
        bgImgUrl: require('../../../assets/img/art-exam/media-introduction-bg.png'),
        iconImgUrl: require('../../../assets/img/art-exam/media-introduction-icon.png'),
        content: '传媒类专业是我国各大高校为适应快速发展的传媒行业，面向广播、电影、电视、网络、会展、广告' +
        '出版等媒体行业及企业、培养高层次专业人才开设的新兴学科。传媒艺考即通过传媒专业参加全国各大院校艺术高考' +
        '，主要包括播音主持类、影视编导类、摄影摄像类、表演空乘类四大专业，与美术、音乐、体育并称高考小四科。'
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
  .art-exam-media-introduction-div {
    margin: 0 -15px;
    position: relative;
  }
  .art-exam-media-introduction-bg {
    width: 100%;
  }
  .art-exam-media-introduction-content {
    position: absolute;
    background-color: rgba(100, 69, 145, 0.8);
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
  }
  .art-exam-media-introduction-txt {
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
  .art-exam-media-introduction-icon {
    position: absolute;
    top: 25%;
    right: 5%;
  }
</style>
