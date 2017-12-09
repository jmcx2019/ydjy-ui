<template>
  <div id="broadcast">
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
    name: 'Broadcast',
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
        bgImg: require('../../../assets/img/art-exam/media-broadcast.png'),
        viewData: [
          {name: '专业方向', txt: '双语播音主持（中英）、普通话播音主持、粤语播音主持、国际交流、播音配音、文化礼仪等。'},
          {name: '课程内容', txt: '播音发声、语音校正、表达基础、形体礼仪、新闻播读、自备稿件、文学朗诵、自备稿件、即兴评述、模拟主持、现场报道、上镜练习等。'},
          {name: '报考条件', txt: '发音器官无疾病、无色盲夜盲、形象气质好，男身高170cm以上，女160cm以上。'},
          {name: '考试内容', txt: '自我介绍、自备稿件、指定稿件、即兴评述、命题演讲、才艺展示、模拟主持。'}
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
