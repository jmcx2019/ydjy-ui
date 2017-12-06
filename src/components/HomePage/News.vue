<template>
  <div class="container homepage-news" id="news">
    <div class="row">
      <div class="hidden-xs hidden-sm hidden-md col-lg-1"></div>

      <div class="hidden-xs hidden-sm col-md-4 col-lg-3 news-list-left-area">
        <div class="row news-list-left-first-row">
          <div class="news-img-1-div-title">
            <div class="rotate-style">Environment</div>
          </div>
          <img class="news-img-1" src="../../assets/img/home-page/environment-1.png" alt="">
        </div>
        <div class="row news-pic-row-interval">
          <div class="news-img-2-div-title">
            <div class="rotate-style">Education</div>
          </div>
          <img class="news-img-2" src="../../assets/img/home-page/environment-5.png" alt="">
        </div>
      </div>
      <div class="hidden-xs col-sm-3 col-md-2 col-lg-2">
        <div class="row">
          <div class="news-img-3-div-title"></div>
          <div class="news-img-3-2-div-title"></div>
          <img class="news-img-3" src="../../assets/img/home-page/environment-2.png" alt="">
        </div>
        <div class="row news-pic-row-interval">
          <div class="news-img-4-div-title"></div>
          <img class="news-img-4" src="../../assets/img/home-page/environment-3.png" alt="">
        </div>
        <div class="row news-pic-row-interval">
          <div class="news-img-5-div-title">
            <div class="news-img-5-div-name">
              More
              <img src="../../assets/img/home-page/more.png"/>
            </div>
          </div>
          <img class="news-img-5" src="../../assets/img/home-page/environment-4.png" alt="">
        </div>
      </div>

      <div class="col-xs-12 col-sm-9 col-md-6 col-lg-6 news-list-right-area">
        <div class="row news-title-row">
          <img src="../../assets/img/home-page/news-title.png" alt="">
        </div>

        <div class="row have-img-news-row"
             v-for="(newsItem,index) in newsList"
             v-if="index <= 2">
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-2 new-img-col">
            <!--<img :src="newsItem.img_url" alt="">-->
            <img src="../../assets/img/home-page/news.png" alt="">
          </div>
          <div class="col-xs-9 col-sm-9 col-md-9 col-lg-10">
            <div class="row news-list-title">{{newsItem.title}}</div>
            <div class="row news-list-content">{{newsItem.content}}</div>
            <div class="row news-list-time pull-right">{{newsItem.time}}</div>
          </div>
        </div>

        <div class="row no-img-news-row"
             v-for="(newsItem,index) in newsList"
             v-if="index > 2">
          <div class="row news-list-title-no-img">· {{newsItem.title}}</div>
          <div class="row">
            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 news-list-content-no-img">{{newsItem.content}}</div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 news-list-time-no-img">{{newsItem.time}}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        newsList : [
          { title: '新校区落成', content: '为了更好的服务广大的考生，艺动教育重金重新打造新校区...', img_url: '../../assets/img/home-page/news.png', time: '2017-11-20'},
          { title: '新校区落成', content: '为了更好的服务广大的考生，艺动教育重金重新打造新校区...', img_url: '../../assets/img/home-page/news.png', time: '2017-11-20'},
          { title: '新校区落成', content: '为了更好的服务广大的考生，艺动教育重金重新打造新校区...', img_url: '../../assets/img/home-page/news.png', time: '2017-11-20'},

          { title: '新校区落成', content: '为了更好的服务广大的考生，艺动教育重金重新打造新校区...', img_url: '../../assets/img/home-page/news.png', time: '2017-11-20'},
          { title: '新校区落成', content: '为了更好的服务广大的考生，艺动教育重金重新打造新校区...', img_url: '../../assets/img/home-page/news.png', time: '2017-11-20'},
          { title: '新校区落成', content: '为了更好的服务广大的考生，艺动教育重金重新打造新校区...', img_url: '../../assets/img/home-page/news.png', time: '2017-11-20'}
        ]
      }
    }
  }
</script>

<style>
  .homepage-news {
    margin-top: 60px;
  }

  .news-list-left-area {
    margin-left: -15px;
  }

  .news-list-left-first-row {
    position: relative;
  }
  .news-img-1-div-title {
    position: absolute;
    height: 290px;
    width: 58px;
    background-color: rgba(100, 69, 145, 0.9);
    font-size: 36px;
    font-family: sans-serif;
    color: #b2cc49;
  }
  .news-img-2-div-title {
    position: absolute;
    right: 13px;
    height: 154px;
    width: 45px;
    background-color: rgba(178, 204, 73, 0.9);
    font-size: 28px;
    font-family: sans-serif;
    color: white;
  }
  .rotate-style {
    margin-top: 20px;
    text-align: center;
    font-weight: 200;
    /* Safari */
    -webkit-transform: rotate(90deg);
    /* Firefox */
    -moz-transform: rotate(90deg);
    /* Internet Explorer 滤镜写法*/
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=9);
  }
  .news-img-3-div-title,
  .news-img-3-2-div-title {
    position: absolute;
    height: 28px;
    width: 180px;
    background-color: rgba(100, 69, 145, 0.9);
  }
  .news-img-3-2-div-title {
    height: 10px;
    top: 190px;
  }
  .news-img-4-div-title {
    position: absolute;
    height: 54px;
    width: 54px;
    background-color: rgba(178, 204, 73, 0.9)
  }
  .news-img-5-div-title {
    position: absolute;
    height: 102px;
    width: 180px;
    background-color: rgba(100, 69, 145, 0.9);
  }
  .news-img-5-div-name {
    height: 40px;
    width: 86px;
    border: 1px solid white;
    margin-top: 31px;
    margin-left: 47px;
    color: white;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
  }

  .news-img-1 {
    width: 280px;
    height: 290px;
  }
  .news-img-2 {
    width: 280px;
    height: 154px;
  }
  .news-img-3 {
    width: 180px;
    height: 200px;
  }
  .news-img-4 {
    width: 180px;
    height: 130px;
  }
  .news-img-5 {
    width: 180px;
    height: 102px;
  }

  .news-list-right-area {
    padding-left: 45px
  }
  .news-pic-row-interval {
    margin-top: 12px;
  }

  .have-img-news-row {
    margin-bottom: 12px;
  }
  .news-list-title {
    font-size: 13px;
    color: black;
    margin-top: 8px;
    margin-left: -25px;
  }
  .news-list-content {
    font-size: 12px;
    color: #868686;
    margin-top: 4px;
    margin-left: -25px;
  }
  .news-list-time {
    font-size: 10px;
    color: #644591;
    margin-top: 8px;
  }
  .no-img-news-row {
    margin-left: 0;
    margin-bottom: 12px;
  }
  .news-list-title-no-img {
    font-size: 13px;
    color: black;
  }
  .news-list-content-no-img {
    font-size: 12px;
    color: #868686;
    margin-top: 2px;
    padding-left: 11px;
  }
  .news-list-time-no-img {
    font-size: 10px;
    color: #644591;
    text-align: right;
  }

  .news-title-row {
    margin-bottom: 40px;
  }
  .new-img-col {
    padding-left: 0;
  }
</style>
