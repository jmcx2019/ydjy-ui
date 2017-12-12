<template>
  <div id="introduction">
    <div class="row sa-introduction-row">
      <div class="sa-introduction-pic-div">
        <img :src="bgImg">
      </div>

      <div class="sa-introduction-view-data" v-for="(vd,index) in viewData">
        <span class="sa-introduction-view-data-name">{{vd.name}}</span>
        <span class="sa-introduction-view-data-txt"
             :class="index===(viewData.length-1) ? 'sa-introduction-last-view-data-txt' : ''">{{vd.txt}}</span>
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
        bgImg: require('../../assets/img/study-abroad/introduction-bg.png'),
        viewData: [
          {name: '艺术留学', txt: '，即考取海外各大院校艺术专业的一种新型留学形式。相比之下海外学院招收学生的时候对艺术专业' +
            '学生的外语要求水平更低，加上近年国内对艺术文化产业的战略重视，艺术人才的需求和要求逐年提高，对于希望通过海外教育进行提升' +
            '的学生和家长来说，选择通过艺术专业考取海外名校不失为一条更好的新思路。\n\n' +
            '艺动教育凭借着多年来积累的海外最好的艺术教育资源，外海目标院校遍布包括西班牙、美国、荷兰、意大利、法国、韩国等地区，结合' +
            '留学、游学、交换生等多种外海学习形式，为您提供最完善和有保障的国内外流程细节服务。'}
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
