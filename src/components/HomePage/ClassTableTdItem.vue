<template>
  <tr v-if="tableItem != null">
    <td class="td-title">{{tableItem.name}}</td>
    <td class="td-interval"></td>
    <td class="td-content">
      <div class="td-div">
        <div class="td-div-table-view">{{tableItem.description}}</div>
      </div>
    </td>
    <td class="td-interval"></td>
    <td class="td-content">
      <div class="td-div">
        <div class="td-div-table-view">{{tableItem.content}}</div>
      </div>
    </td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.semester}}个月</td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.fee}}元</td>
    <td class="td-interval"></td>
  </tr>
</template>

<script>
  export default {
    name: 'ClassTableTdItem',
    props: ['tableItem'], // 引入到组件中的数据/变量
    data() {
      return {
        // tableItem: {name: '', description: '', content: '', semester: '', fee: ''}
      }
    }
  }
</script>

<style>
  .td-title {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
    padding: 5px;
  }
  .td-content {
    background-color: #b2cc49;
    color: #5f488c;
    padding: 5px;
  }
  .td-interval {
    width: 3px;
  }
  .td-div {
    height: 70px;
    overflow: hidden;
  }
  .td-div-table-view {
    vertical-align: middle;
    display: table-cell;
  }
</style>
