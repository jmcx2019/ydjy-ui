<template>
  <div id="class-table">
    <div class="container container-class-table">
      <div class="class-table">
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

            <td class="td-title td-class-name">{{tableTitle[0]}}</td>
            <td class="td-interval"></td>
            <td class="td-title td-other">{{tableTitle[1]}}</td>
            <td class="td-interval"></td>
            <td class="td-title td-other">{{tableTitle[2]}}</td>
            <td class="td-interval"></td>
            <td class="td-title td-semester">{{tableTitle[3]}}</td>
            <td class="td-interval"></td>
            <td class="td-title td-tuition">{{tableTitle[4]}}</td>
          </tr>
          <tr class="tr-interval"></tr>
          <class-table-td-item :tableItem="tableData[0]"></class-table-td-item>
          <tr class="tr-interval"></tr>
          <class-table-td-item :tableItem="tableData[0]"></class-table-td-item>
          <tr class="tr-interval"></tr>
          <class-table-td-item :tableItem="tableData[0]"></class-table-td-item>
          <tr class="tr-interval"></tr>
          <class-table-td-item :tableItem="tableData[0]"></class-table-td-item>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入子组件
  import ClassTableTdItem from './ClassTableTdItem'

  export default {
    name: 'ClassTable',
    data() {
      return {
        tableTitle: ['课程班名', '针对学员类型', '课程内容', '学期', '学费'],
        tableData: [
          {
            className: '美术高考基础班',
            studentType: '没有任何基础，有志于参加艺术设计类院校高考的学员。',
            classContent: '素描几何石膏、素描静物、人物头像速写、水粉静物、水粉人物',
            semester: '12个月',
            fee: '4800元'
          }]
      }
    },
    components: { // 引入子组件
      ClassTableTdItem
    }
  }
</script>

<style>
  .container-class-table {
    text-align: center;
  }
  .class-table {
    max-width: 900px;
    margin: 75px auto;
    font-family: "Microsoft YaHei", sans-serif;
    font-size: 12px;
  }
  .td-title {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    padding: 5px;
  }
  .tr-interval {
    height: 3px;
  }
  .td-interval {
    width: 3px;
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
  .td-other {
    min-width: 133px;
  }
</style>
