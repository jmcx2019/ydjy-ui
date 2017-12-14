<template>
  <div id="art">
    <div class="sa-art-div">
      <img class="sa-art-bg" :src="bgImgUrl">
      <div class="sa-art-content">
        <div class="sa-art-txt" v-html="viewData.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Art',
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
        bgImgUrl: require('../../assets/img/study-abroad/art-bg.png'),
        viewData: {content:''}
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'media?id=19').then(response => {
          if (response.data.code === 1000) {
            this.viewData = response.data.data
          }
        })
      }
    }
  }
</script>

<style>
  .sa-art-div {
    margin: 0 -15px;
    position: relative;
  }
  .sa-art-bg {
    width: 100%;
  }
  .sa-art-content {
    position: absolute;
    background-color: rgba(100, 69, 145, 0.8);
    top: 0;
    width: 100%;
    height: 40%;
  }
  .sa-art-txt {
    position: absolute;
    left: 0;
    right: 0;
    top: 25%;
    margin: auto;
    width: 85%;
    height: 45%;
    color: white;
    line-height: 24px;
  }
</style>
