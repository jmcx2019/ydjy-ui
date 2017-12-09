<template>
  <div id="editor">
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
    name: 'Editor',
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
        bgImg: require('../../../assets/img/art-exam/media-editor.png'),
        viewData: [
          {name: '专业方向', txt: '电视编导、影视导演、文艺编导、影视文学、媒体创意、数字媒体、节目制作、艺术管理、公共事业管理、制片管理等。'},
          {name: '课程内容', txt: '命题演讲、视听语言分析、艺术概论、命题写作及技巧、编讲故事、即兴创作与评述、文学艺术常识、中外影视作品分析、影视基础知识叙事散文、广告创意、栏目策划等。'},
          {name: '报考条件', txt: '文字写作、文学积累、阅片积累、即兴思维、逻辑思维等，无身高要求。'},
          {name: '考试内容', txt: '自我介绍、故事编写、文艺常识、影视作品分析、即兴评述、广告创意、节目活动策划等。'}
        ]
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
