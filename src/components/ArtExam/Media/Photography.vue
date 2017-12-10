<template>
  <div id="photography">
    <div class="row ae-media-row">
      <div class="ae-media-pic-div">
        <img :src="bgImg">
      </div>

      <div class="ae-media-view-data" v-for="(vd,index) in viewData">
        <div class="ae-media-view-data-name">{{vd.name}}</div>
        <div class="ae-media-view-data-txt"
             :class="index===(viewData.length-1) ? 'ae-media-last-view-data-txt' : ''">{{vd.txt}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Photography',
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
        bgImg: require('../../../assets/img/art-exam/media-photography.png'),
        viewData: [
          {name: '专业方向', txt: '摄影摄像、图片摄影、舞台照明艺术、数字媒体艺术、影视制作等。'},
          {name: '课程内容', txt: '文学艺术常识、摄影基础、摄影作品赏析、新闻事件分析与阐述、命题故事、叙事写作、模拟现场拍摄等。'},
          {name: '报考条件', txt: '无色盲色弱、矫正视力4.8以上、无平足、男身高170cm以上、女160cm以上。'},
          {name: '考试内容', txt: '文学常识、摄影基础知识、摄影作品分析、新闻事件分析与阐述、命题故事、叙事写作、模拟现场拍摄等。'}
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
  .ae-media-row {
    min-height: 526px;
    background-color: #f8f8f8;
  }
  .ae-media-pic-div {
    padding: 30px;
  }
  .ae-media-pic-div > img {
    height: 100%;
    width: 100%;
  }

  .ae-media-view-data {
    margin: 0 30px 22px 30px;
  }
  .ae-media-view-data-name {
    color: #644591;
  }
  .ae-media-last-view-data-txt {
    margin-bottom: 56px;
  }
</style>
