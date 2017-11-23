<template>
  <div class="container" id="news">
    <div class="row">
      <div class="col-lg-1 col-md-1"></div>

      <div class="col-md-3 news-list-left-area">
        <div class="row">
          <img class="news-img-1" src="../../assets/img/home-page/environment-1.png" alt="">
        </div>
        <div class="row news-pic-row-interval">
          <img class="news-img-2" src="../../assets/img/home-page/environment-5.png" alt="">
        </div>
      </div>
      <div class="col-md-2">
        <div class="row">
          <img class="news-img-3" src="../../assets/img/home-page/environment-2.png" alt="">
        </div>
        <div class="row news-pic-row-interval">
          <img class="news-img-4" src="../../assets/img/home-page/environment-3.png" alt="">
        </div>
        <div class="row news-pic-row-interval">
          <img class="news-img-5" src="../../assets/img/home-page/environment-4.png" alt="">
        </div>
      </div>

      <div class="col-md-6 news-list-right-area">
        <div class="row news-title-row">
          <img src="../../assets/img/home-page/news-title.png" alt="">
        </div>

        <div class="row have-img-news-row"
             v-for="(newsItem,index) in newsList"
             v-if="index <= 2">
          <div class="col-md-2 new-img-col">
            <!--<img :src="newsItem.img_url" alt="">-->
            <img src="../../assets/img/home-page/news.png" alt="">
          </div>
          <div class="col-md-10">
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
            <div class="col-md-9 news-list-content-no-img">{{newsItem.content}}</div>
            <div class="col-md-3 news-list-time-no-img">{{newsItem.time}}</div>
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
  .news-list-left-area {
    margin-left: -15px;
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
    font-family: "Microsoft YaHei", sans-serif;
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
    font-family: "Microsoft YaHei", sans-serif;
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
