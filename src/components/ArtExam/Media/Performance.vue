<template>
  <div id="performance">
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
    name: 'Performance',
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
        bgImg: require('../../../assets/img/art-exam/media-performance.png'),
        viewData: [
          {name: '专业方向', txt: '影视表演、话剧表演、时装表演、模特表演等。'},
          {name: '课程内容', txt: '朗诵、声乐、表演、形体等。'},
          {name: '报考条件', txt: '长相、身高、即兴思维、才艺、舞台经验、语言表达等，五官端正、举止大方得体，男170cm以上，女160cm以上。'},
          {name: '考试内容', txt: '自我介绍、声音、台词、形体、表演（单人或多人表演）、才艺展示、小品创作等。'}
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
