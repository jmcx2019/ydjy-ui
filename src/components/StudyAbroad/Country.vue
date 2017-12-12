<template>
  <div id="country">
    <div class="row sa-country-row">
      <div v-for="vd in viewData">
        <div class="sa-country-pic-div">
          <img :src="vd.img">
        </div>

        <div class="sa-country-view-data" v-for="vdt in vd.txt">
          <div class="sa-country-view-data-name">{{vdt.name}}</div>
          <div class="sa-country-view-data-txt">{{vdt.txt}}</div>
        </div>
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
          {
            img: require('../../assets/img/study-abroad/country-spain.png'),
            txt: [
              {name: '综合最强', txt: '马德里康普顿斯大学，塞维利亚大学，马德里卡洛斯三世大学，阿尔卡拉大学，马拉加大学，萨拉曼卡大学，加泰罗尼亚理工大学，马德里理工大学，巴塞罗那自治大学。'},
              {name: '社科人文、传媒', txt: '马德里康普顿斯大学，马德里卡洛斯三世大学，阿尔卡拉大学。'},
              {name: '艺术类大学', txt: '塞维利亚大学，胡安卡洛斯大学。'}
            ]
          },
          {
            img: require('../../assets/img/study-abroad/country-netherlands.png'),
            txt: [
              {name: '艺术留学', txt: '双语播音主持（中英）、普通话播音主持、粤语播音主持、国际交流、播音配音、文化礼仪等。'},
              {name: '艺术留学', txt: '双语播音主持（中英）、普通话播音主持、粤语播音主持、国际交流、播音配音、文化礼仪等。'},
              {name: '艺术留学', txt: '双语播音主持（中英）、普通话播音主持、粤语播音主持、国际交流、播音配音、文化礼仪等。'}
            ]
          },
          {
            img: require('../../assets/img/study-abroad/country-korea.png'),
            txt: [
              {name: '艺术留学', txt: '双语播音主持（中英）、普通话播音主持、粤语播音主持、国际交流、播音配音、文化礼仪等。'},
              {name: '艺术留学', txt: '双语播音主持（中英）、普通话播音主持、粤语播音主持、国际交流、播音配音、文化礼仪等。'},
              {name: '艺术留学', txt: '双语播音主持（中英）、普通话播音主持、粤语播音主持、国际交流、播音配音、文化礼仪等。'}
            ]
          }
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
