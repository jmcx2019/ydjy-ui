<template>
  <tr>
    <td class="td-title">{{tableItem.className}}</td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.studentType}}</td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.classContent}}</td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.semester}}</td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.fee}}</td>
    <td class="td-interval"></td>

    <td class="td-title">{{tableItem.className}}</td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.studentType}}</td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.classContent}}</td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.semester}}</td>
    <td class="td-interval"></td>
    <td class="td-content">{{tableItem.fee}}</td>
  </tr>
</template>

<script>
  export default {
    name: 'ClassTableTdItem',
    props: ['tableItem'] // 引入到组件中的数据/变量
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
</style>
