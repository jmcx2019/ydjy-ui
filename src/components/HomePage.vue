<template>
  <div id="home-page">
    <top-nav :clicked="clickedVal"></top-nav>
    <banner></banner>
    <art-exam></art-exam>
    <students></students>
    <teachers></teachers>
    <class-table></class-table>
    <news></news>

    <div class="homepage-contact-info">
      <div class="homepage-contact-info-bg">

        <div class="homepage-contact-info-title">
          <img src="../assets/img/home-page/contact-info.png" alt="">
        </div>

        <div class="container">
          <div class="row contact-info-row">
            <div class="col-md-4">
              <img class="center-block" src="../assets/img/home-page/wechat-gongzhonghao.png" alt="">
              <p class="contact-info-p-title">公众号</p>
              <p class="contact-info-p-content">yidongjiaoyu</p>
            </div>
            <div class="col-md-4">
              <img class="center-block" src="../assets/img/home-page/address.png" alt="">
              <p class="contact-info-p-title">总部地址</p>
              <p class="contact-info-p-content">东莞市东城街道光明路中云智慧产业园B栋303室</p>
              <p class="contact-info-p-title-2">广州地址</p>
              <p class="contact-info-p-content">广州市南沙区东涌镇筒太路致观艺术园</p>
              <p class="contact-info-p-title-2">北京地址</p>
              <p class="contact-info-p-content">北京市房山区圣泉文化公园天赐圣泉</p>
            </div>
            <div class="col-md-4">
              <img class="center-block" src="../assets/img/home-page/email.png" alt="">
              <p class="contact-info-p-title">邮箱</p>
              <p class="contact-info-p-content">yidongeducation@126.com</p>
            </div>
          </div>
          <div class="row contact-info-row">
            <p class="contact-info-p-title">联系方式</p>
            <p class="contact-info-p-phone">0769-22667466 / 18126818262 / 18025214797</p>
          </div>
        </div>
      </div>
    </div>

    <div class="homepage-footer">{{footerText}}</div>

  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'
  import Banner from './Banner'
  import ArtExam from './HomePage/ArtExam'
  import Students from './HomePage/Students'
  import Teachers from './HomePage/Teachers'
  import ClassTable from './HomePage/ClassTable'
  import News from './HomePage/News'

  export default {
    name: 'HomePage',
    data() {
      return {
        clickedVal: 'HomePage',
        footerText: '版权所有 艺动教育 京ICP备案10011865号    京公网安备11010502022735号'
      }
    },
    components: { // 引入子组件
      TopNav,
      Banner,
      ClassTable,
      News,
      ArtExam,
      Students,
      Teachers
    }
  }
</script>

<style>
  .homepage-contact-info-title {
    padding-top: 48px;
    margin-bottom: 30px;
  }
  .homepage-contact-info-title {
    text-align: center;
  }
  .homepage-teacher-team-img-group > img {
    margin: 0 11px
  }
  .outstanding-students-img-group > img {
    margin: 0 19px
  }

  .homepage-art-exam-img-group img{
    margin-bottom: 10px;
  }

  /* start：学员风采、课程表、联系方式；有紫色背景图片的样式 */
  .homepage-contact-info {
    margin-top: 50px;
  }
  .homepage-contact-info-bg {
     background: url("../assets/img/home-page/contact-info-bg.png") center no-repeat;
     height: 610px;
   }
  /* end：学员风采、课程表、联系方式；有紫色背景图片的样式 */

  /* Start: 圆形背景里的more */
  .class-bg-more > img,
  .outstanding-students-bg-more > img {
    width: 6px;
    margin-top: -10px;
  }
  .outstanding-students-bg-more-2 > img,
  .class-bg-more-2 > img {
    width: 6px;
    margin-top: -10px;
  }
  /* End: 圆形背景里的more */

  .contact-info-row {
    text-align: center;
  }
  .contact-info-p-title,
  .contact-info-p-title-2 {
    margin-top: 30px;
    color: #b2cc49;
    font-size: 16px;
  }
  .contact-info-p-title-2 {
    margin-top: 20px;
  }
  .contact-info-p-content,
  .contact-info-p-phone {
    color: white;
    font-size: 16px;
  }
  .contact-info-p-phone {
    font-size: 20px;
  }

  .homepage-footer {
    height: 80px;
    line-height: 80px;
    background-color: #f6f6f6;
    color: #c7c7c7;
    text-align: center;
    font-size: 10px;
  }
</style>
