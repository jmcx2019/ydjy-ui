<template>
  <div id="gallery">

    <div class="row">
      <div class="col-xs-1 hidden-sm col-md-1 hidden-lg"></div>
      <div class="hidden-xs col-sm-1 hidden-md col-lg-1"></div>
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <div class="big-view-img">
          <img class="view-mark" v-if="viewDataArr[0].viewMark" :src="viewDataArr[0].viewMark">
          <img :src="viewDataArr[0].viewImg">
        </div>
      </div>
      <div class="hidden-xs col-sm-1 hidden-md col-lg-1"></div>
      <div class="hidden-xs hidden-sm hidden-md hidden-lg"></div>
    </div>

    <div class="row">
      <div class="col-xs-1 hidden-sm col-md-1 hidden-lg"></div>
      <div class="hidden-xs col-sm-1 hidden-md col-lg-1 view-img-more view-img-more-left" @click="moreLeft">
        <img src="../../assets/img/student/more-left.png">
      </div>
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 view-img-div">
        <div class="view-img-list">
          <span v-for="(viewItem, index) in viewDataArr" v-if="index<8">
            <img class="view-img-item"
                 :class="[index===0 ? 'clicked-img' : '']"
                 :src="viewItem.viewImg"
                 @click="clickClassroom(index)">
          </span>
        </div>
      </div>
      <div class="hidden-xs col-sm-1 hidden-md col-lg-1 view-img-more" @click="moreRight">
        <img src="../../assets/img/student/more-right.png">
      </div>
      <div class="hidden-xs hidden-sm hidden-md hidden-lg"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    props: ['viewDataArr'], // 引入到组件中的数据/变量
    methods: {
      clickClassroom($index) {
        let newArr1 = [], newArr2 = []

        this.viewDataArr.forEach(function (val, index) {
          if (index < $index) {
            newArr1.push(val)
          } else {
            newArr2.push(val)
          }
        })

        newArr2.push.apply(newArr2, newArr1)
        this.viewDataArr = newArr2
      },
      moreLeft() {
        this.clickClassroom(this.viewDataArr.length - 1)
      },
      moreRight() {
        this.clickClassroom(1)
      }
    }
  }
</script>

<style>
  /* 焦点图样式 */
  .big-view-img {
    margin: 40px auto 30px;
    text-align: center;
    height: 330px;
    position: relative;
  }
  .big-view-img > img {
    max-height: 330px;
  }

  /* 焦点图的标识样式 */
  .view-mark {
    position: absolute;
    width: 60px;
    height: 58px;
    margin: 10px 0 0 10px;
  }

  /* 缩略图列表样式 */
  .view-img-div {
    height:88px;overflow: hidden;
  }
  .view-img-list {
    margin: 0 auto;
    text-align: center;
    display: inline-flex;
    overflow-x: scroll;
    height: 110px
  }
  .view-img-list img {
    margin-right: 10px;
    height: 86px;
    width: 86px;
  }

  /* 缩略图样式 */
  .view-img-item {
    width: 86px;
    height: 86px;
  }
  .clicked-img {
    border: 4px solid #644591;
  }

  /* 缩略图左右侧按钮样式 */
  .view-img-more {
    height: 86px;
    line-height: 86px;
  }
  .view-img-more-left {
    position: relative;
  }
  .view-img-more-left > img {
    position: absolute;
    right: 0;
    top: 38px;
  }
</style>
