<template>
  <div id="introduction">
    <div class="row sa-introduction-row">
      <div class="sa-introduction-pic-div">
        <img :src="bgImg">
      </div>

      <div class="sa-introduction-view-data" v-for="(vd,index) in viewData">
        <div class="sa-introduction-view-data-name">{{vd.name}}</div>
        <div class="sa-introduction-view-data-txt"
             :class="index===(viewData.length-1) ? 'sa-introduction-last-view-data-txt' : ''">{{vd.txt}}</div>
      </div>
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
        bgImg: require('../../assets/img/art-exam/media-broadcast.png'),
        viewData: [
          {name: '艺术留学', txt: '双语播音主持（中英）、普通话播音主持、粤语播音主持、国际交流、播音配音、文化礼仪等。'}
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
  .sa-introduction-row {
    min-height: 526px;
    background-color: #f8f8f8;
  }
  .sa-introduction-pic-div {
    padding: 30px;
  }
  .sa-introduction-pic-div > img {
    height: 100%;
    width: 100%;
  }

  .sa-introduction-view-data {
    margin: 0 30px 22px 30px;
  }
  .sa-introduction-view-data-name {
    color: #644591;
  }
  .sa-introduction-last-view-data-txt {
    margin-bottom: 56px;
  }
</style>
