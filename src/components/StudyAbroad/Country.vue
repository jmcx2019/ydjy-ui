<template>
  <div id="country">
    <div class="row sa-country-row">
      <div v-for="vd in viewData">
        <div class="sa-country-pic-div">
          <img :src="vd.img">
        </div>

        <div class="sa-country-view-data" v-html="vd.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Country',
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
        viewData: [
          {img: require('../../assets/img/study-abroad/country-spain.png'), content: ''},
          {img: require('../../assets/img/study-abroad/country-netherlands.png'), content: ''},
          {img: require('../../assets/img/study-abroad/country-korea.png'), content: ''}
        ]
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'media?id=16').then(response => {
          if (response.data.code === 1000) {
            this.viewData[0].content = response.data.data.content
          }
        })
        this.axios.get(process.env.API_URL + 'media?id=17').then(response => {
          if (response.data.code === 1000) {
            this.viewData[1].content = response.data.data.content
          }
        })
        this.axios.get(process.env.API_URL + 'media?id=18').then(response => {
          if (response.data.code === 1000) {
            this.viewData[2].content = response.data.data.content
          }
        })
      }
    }
  }
</script>

<style>
  .sa-country-row {
    min-height: 526px;
    background-color: #f8f8f8;
    padding-bottom: 40px;
  }
  .sa-country-pic-div {
    padding: 30px 30px 10px 30px;
  }
  .sa-country-pic-div > img {
    height: 100%;
    width: 100%;
  }

  .sa-country-view-data {
    margin: 0 30px 10px 30px;
  }
  .sa-country-view-data-name {
    color: #644591;
  }
</style>
