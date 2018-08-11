<template>
  <div id="contact">
    <div class="about-company-contact-info-bg">

      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <img class="center-block" src="../../assets/img/home-page/wechat-gongzhonghao.png">
          <p class="about-company-contact-info-p-title">公众号</p>
          <p class="about-company-contact-info-p-content">yidongjiaoyu</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <img class="center-block" src="../../assets/img/home-page/address.png">
          <p class="about-company-contact-info-p-title">总部地址</p>
          <p class="about-company-contact-info-p-content">东莞市东城街道光明路中云智慧产业园B栋303室</p>
          <p class="about-company-contact-info-p-title-2">广州地址</p>
          <p class="about-company-contact-info-p-content">广州市南沙区东涌镇筒太路致观艺术园</p>
          <p class="about-company-contact-info-p-title-2">北京地址</p>
          <p class="about-company-contact-info-p-content">北京市房山区圣泉文化公园天赐圣泉</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <img class="center-block" src="../../assets/img/home-page/email.png">
          <p class="about-company-contact-info-p-title">邮箱</p>
          <p class="about-company-contact-info-p-content">yidongeducation@126.com</p>
        </div>
      </div>

      <div class="row acci-contact">
        <img src="../../assets/img/about-company/contact-phone.png">
        <p class="about-company-contact-info-p-title">联系方式</p>
        <p class="about-company-contact-info-p-phone">0769-22667466 / 18126818262 / 18025214797</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style>
  .about-company-contact-info-bg {
    background: url("../../assets/img/about-company/contact-bg.jpg") center no-repeat;
    background-size: auto 100%;
    margin: 0 -15px 0 -15px;
    padding-top: 60px;
    min-height: 526px;
    text-align: center;
  }
  .about-company-contact-info-bg img {
    width: 58px;
  }

  .about-company-contact-info-p-title {
    margin-top: 14px;
    font-size: 13px;
    color: #644591;
  }
  .about-company-contact-info-p-title-2 {
    margin-top: 15px;
    font-size: 13px;
    color: #644591;
  }
  .acci-contact {
    margin-top: 30px;
  }
</style>
