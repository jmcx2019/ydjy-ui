<template>
  <div id="admission-score">
    <div class="art-exam-media-admission-score-div">
      <img class="art-exam-media-admission-score-bg" :src="bgImgUrl">
      <div class="art-exam-media-admission-score-content"></div>

      <div class="art-exam-media-table-title">{{tableTit}}</div>
      <table class="art-exam-media-table" align="center" >
        <tr>
          <td class="art-exam-media-table-tit-td">{{tableTitData[0]}}</td>
          <td class="aem-table-td-hr"></td>
          <td class="art-exam-media-table-tit-td">{{tableTitData[1]}}</td>
          <td class="aem-table-td-hr"></td>
          <td class="art-exam-media-table-tit-td">{{tableTitData[2]}}</td>
        </tr>
        <tr v-for="tdItem in tableData">
          <td class="art-exam-media-table-data-td art-exam-media-table-first-data-td">{{tdItem.name}}</td>
          <td class="aem-table-td-hr"></td>
          <td class="art-exam-media-table-data-td">{{tdItem.first}}</td>
          <td class="aem-table-td-hr"></td>
          <td class="art-exam-media-table-data-td">{{tdItem.second}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdmissionScore',
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
        bgImgUrl: require('../../../assets/img/art-exam/media-admission-score-bg.png'),
        tableTit: '广东省普通高考文化录取最低控制分数',
        tableTitData: ['科类/批次', '一批（分）', '二批（分）'],
        tableData: [{name: '', first: '', second: ''}]
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'score').then(response => {
          if (response.data.code === 1000) {
            this.tableData = response.data.data.data
          }
        })
      }
    }
  }
</script>

<style>
  .art-exam-media-admission-score-div {
    margin: 0 -15px;
    position: relative;
    text-align: center;
  }
  .art-exam-media-admission-score-bg {
    width: 100%;
  }
  .art-exam-media-admission-score-content {
    position: absolute;
    background-color: rgba(100, 69, 145, 0.8);
    top: 0;
    width: 100%;
    height: 100%;
  }

  .art-exam-media-table-title {
    height: 38px;
    width: 340px;
    background-color: #b2cc49;
    color: #5f488c;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 20%;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
  }
  .art-exam-media-table {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 30%);
    top: 20%;
    color: #5f488c;
    text-align: center;
    border-collapse:separate;
    border-spacing:0 20px;
  }
  .art-exam-media-table-tit-td {
    min-width: 140px;
    height: 28px;
    line-height: 28px;
    background-color: #b2cc49;
  }
  .art-exam-media-table-data-td {
    min-width: 140px;
    height: 28px;
    line-height: 28px;
    background-color: white;
    margin-bottom: 20px;
  }
  .aem-table-td-hr {
    width: 30px;
  }
  .art-exam-media-table-first-data-td {
    width: 250px;
  }

  @media screen and (max-width: 1200px) {
    .art-exam-media-table-title {
      top: 15%;
    }
    .art-exam-media-table {
      top: 15%;
      border-spacing:0 15px;
    }
  }
</style>
