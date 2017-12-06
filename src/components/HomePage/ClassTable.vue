<template>
  <div id="class-table" class="homepage-class-table">
    <div class="homepage-class-table-bg">
      <div class="class-bg-more">
        <div>More</div>
        <img :src="moreDown">
      </div>

      <div class="container">
        <div class="row table-row">
          <div class="col-md-6 col-lg-6">
            <table class="table">
              <tr>
                <td class="td-title td-class-name">{{tableTitle[0]}}</td>
                <td class="td-interval"></td>
                <td class="td-title td-other">{{tableTitle[1]}}</td>
                <td class="td-interval"></td>
                <td class="td-title td-other">{{tableTitle[2]}}</td>
                <td class="td-interval"></td>
                <td class="td-title td-semester">{{tableTitle[3]}}</td>
                <td class="td-interval"></td>
                <td class="td-title td-tuition">{{tableTitle[4]}}</td>
                <td class="td-interval"></td>
              </tr>
              <tr class="tr-interval"></tr>
              <class-table-td-item :tableItem="tableData[0]"></class-table-td-item>
              <tr class="tr-interval"></tr>
              <class-table-td-item :tableItem="tableData[1]"></class-table-td-item>
              <tr class="tr-interval"></tr>
              <class-table-td-item :tableItem="tableData[2]"></class-table-td-item>
              <tr class="tr-interval"></tr>
              <class-table-td-item :tableItem="tableData[3]"></class-table-td-item>
            </table>
          </div>
          <div class="hidden-xs hidden-sm col-md-6 col-lg-6">
            <table class="table">
              <tr>
                <td class="td-title td-class-name">{{tableTitle[0]}}</td>
                <td class="td-interval"></td>
                <td class="td-title td-other">{{tableTitle[1]}}</td>
                <td class="td-interval"></td>
                <td class="td-title td-other">{{tableTitle[2]}}</td>
                <td class="td-interval"></td>
                <td class="td-title td-semester">{{tableTitle[3]}}</td>
                <td class="td-interval"></td>
                <td class="td-title td-tuition">{{tableTitle[4]}}</td>
                <td class="td-interval"></td>
              </tr>
              <tr class="tr-interval"></tr>
              <class-table-td-item :tableItem="tableData[4]"></class-table-td-item>
              <tr class="tr-interval"></tr>
              <class-table-td-item :tableItem="tableData[5]"></class-table-td-item>
              <tr class="tr-interval"></tr>
              <class-table-td-item :tableItem="tableData[6]"></class-table-td-item>
              <tr class="tr-interval"></tr>
              <class-table-td-item :tableItem="tableData[7]"></class-table-td-item>
            </table>
          </div>
        </div>
      </div>

      <div class="class-bg-more-2">
        <div>More</div>
        <img :src="moreDown">
      </div>
    </div>
  </div>
</template>

<script>
  // 引入子组件
  import ClassTableTdItem from './ClassTableTdItem'

  export default {
    name: 'ClassTable',
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
        moreDown: require('../../assets/img/home-page/more-down.png'),
        tableTitle: ['课程班名', '针对学员类型', '课程内容', '学期', '学费'],
        tableData: []
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get('http://localhost/api/v1/class?count=8&homepage=1').then(response => {
          if (response.data.code === 1000) {
            this.tableData = response.data.data.data
          }
        })
      }
    },
    components: { // 引入子组件
      ClassTableTdItem
    }
  }
</script>

<style>
  .table-row {
    margin: 60px auto 0;
  }
  .table {
    font-size: 12px;
    text-align: center;
  }
  .td-title {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    padding: 5px;
  }
  .td-interval {
    width: 3px;
  }
  .tr-interval {
    height: 3px;
  }
  .td-class-name {
    min-width: 65px;
  }
  .td-semester {
    min-width: 50px;
  }
  .td-tuition {
    min-width: 55px;
  }

  /* start：学员风采、课程表、联系方式；有紫色背景图片的样式 */
  .homepage-class-table {
    margin-top: 40px;
  }
  .homepage-class-table-bg {
    background: url("../../assets/img/home-page/class-table-bg.png") center no-repeat;
    height: 492px;
    position: relative;
    text-align: center;
  }
  /* end：学员风采、课程表、联系方式；有紫色背景图片的样式 */

  /* Start: 圆形背景里的more */
  .class-bg-more {
    height: 72px;
    width: 72px;
    position: absolute;
    top: 0;
    left:50%;
    margin: -36px 0 0 -36px;
    background-color: white;
    border-radius: 50%;
    color: #b2cc49;
    font-size: 12px;
  }
  .class-bg-more > div {
    margin-top: 33px;
  }

  .class-bg-more-2 {
    height: 72px;
    width: 72px;
    position: absolute;
    bottom: 0;
    left:50%;
    margin-left: -36px;
    color: #b2cc49;
    font-size: 12px;
  }
  .class-bg-more-2 > div {
    margin-top: 36px;
  }
  /* End: 圆形背景里的more */
</style>
