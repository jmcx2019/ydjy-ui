<template>
  <div id="photography">
    <div class="row ae-media-row">
      <div class="ae-media-pic-div">
        <img :src="bgImg">
      </div>

      <div class="ae-media-view-data" v-html="viewData.content"></div>
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
        viewData: {content:''}
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'media?id=5').then(response => {
          if (response.data.code === 1000) {
            this.viewData = response.data.data
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
    margin: 0 30px 50px 30px;
  }
</style>
