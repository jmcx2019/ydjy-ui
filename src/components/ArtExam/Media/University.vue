<template>
  <div id="university">
    <div class="row ae-media-row">
      <div class="ae-media-pic-div">
        <img :src="bgImg">
      </div>

      <div class="ae-media-view-data ae-media-view-data-name">{{viewDataTit}}</div>

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
        bgImg: require('../../../assets/img/art-exam/media-university.png'),
        viewDataTit: '全国目前开设出传媒类专业的院校多达300多所并逐年增加：',
        viewData: [
          {name: '著名传媒院校', txt: '中国传媒大学、北京电影学院、中央戏剧学院、上海戏剧学院、中国戏曲学院、南京艺术学院、浙江传媒学院等。'},
          {name: '广东省内院校', txt: '暨南大学、华南农业大学、广东外语外贸大学、广州大学、深圳大学、广州体育学院、广东财经大学、广东海洋大学、北京师范大学珠海分校等。'},
          {name: '综合类院校', txt: '北京师范大学、武汉大学、重庆大学、南京大学、湖南大学、四川大学、吉林大学等。'}
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
