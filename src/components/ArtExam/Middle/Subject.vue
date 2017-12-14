<template>
  <div id="subject">
    <div class="row ae-middle-subject-row">
      <img :src="bgImg">

      <div class="ae-middle-subject-view-data" v-html="viewData.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Subject',
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
        bgImg: require('../../../assets/img/art-exam/art-subject.png'),
        viewData: {content:''}
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'media?id=13').then(response => {
          if (response.data.code === 1000) {
            this.viewData = response.data.data
          }
        })
      }
    }
  }
</script>

<style>
  .ae-middle-subject-row {
    min-height: 526px;
    background-color: #644591;
    color: white;
  }
  .ae-middle-subject-row > img {
    height: 100%;
    width: 100%;
    margin-bottom: 47px;
  }

  .ae-middle-subject-view-data {
    margin: 0 30px 22px 30px;
  }
</style>
