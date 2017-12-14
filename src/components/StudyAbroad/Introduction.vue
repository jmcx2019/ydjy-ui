<template>
  <div id="introduction">
    <div class="row sa-introduction-row">
      <div class="sa-introduction-pic-div">
        <img :src="bgImg">
      </div>

      <div class="sa-introduction-view-data" v-html="viewData.content"></div>
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
        bgImg: require('../../assets/img/study-abroad/introduction-bg.png'),
        viewData: {content:''}
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'media?id=14').then(response => {
          if (response.data.code === 1000) {
            this.viewData = response.data.data
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
</style>
