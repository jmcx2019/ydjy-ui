<template>
  <div id="art-exam">
    <div class="container">
      <div class="homepage-art-exam-title">
        <img src="../../assets/img/home-page/art-exam.png" alt="">
      </div>

      <div class="row homepage-art-exam-img-group">
        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3"
             v-for="(artExamItem,index) in artExamData">
          <div class="art-exam-img-div"
               :style="{backgroundImage: 'url(' + artExamItem.image + ')'}"
               @mouseenter="showExamTxt(index)"
               @mouseleave="showExamTxt(index)">

            <div class="art-exam-div-title" v-show="showExamTxtVal[index].val">
              <div class="art-exam-div-name">
                <div class="art-exam-div-txt">
                  <div>{{artExamItem.txt1}}</div>
                  <div>{{artExamItem.txt2}}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "ArtExam",
    data() {
      return {
        artExamData: [
          {image: require('../../assets/img/home-page/chuanmeiyikao.png'), txt1: '传媒', txt2: '艺考'},
          {image: require('../../assets/img/home-page/art-test.png'), txt1: '美术', txt2: '艺考'},
          {image: require('../../assets/img/home-page/zhongkaotechangsheng.png'), txt1: '中考美术', txt2: '特长生'},
          {image: require('../../assets/img/home-page/art-exam-qa.png'), txt1: 'Coming', txt2: 'Soon'}
        ],
        showExamTxtVal: [{val: false}, {val: false}, {val: false}, {val: false}]
      }
    },
    methods: {
      showExamTxt($index) {
        this.showExamTxtVal[$index].val = !this.showExamTxtVal[$index].val
      }
    }
  }
</script>

<style scoped>
  .homepage-art-exam-title {
    margin-top: 42px;
    margin-bottom: 52px;
  }

  .homepage-art-exam-title,
  .homepage-art-exam-img-group {
    text-align: center;
  }

  .homepage-art-exam-img-group {
    position: relative;
  }
  .art-exam-img-div {
    position: relative;
    margin: 0 auto 10px;
    height: 240px;
    width: 240px;
  }
  .art-exam-div-title {
    position: absolute;
    height: 240px;
    width: 240px;
    margin: 0 auto 10px;
    text-align:center;
    background-color: rgba(100, 69, 145, 0.8);
  }
  .art-exam-div-name {
    height: 80px;
    width: 80px;
    border: 1px solid white;
    margin-top: 80px;
    margin-left: 80px;
    color: white;
    text-align: center;
    font-size: 16px;
  }
  .art-exam-div-txt {
    padding-top: 16px;
  }
</style>
