<template>
  <div id="home-page">
    <top-nav :clicked="clickedVal"></top-nav>
    <banner></banner>

    <div class="homepage-art-exam">
      <div class="container">
        <div class="homepage-art-exam-title">
          <img src="../assets/img/home-page/art-exam.png" alt="">
        </div>
        <div class="homepage-art-exam-img-group">
          <div class="art-exam-div-title">
            <div class="art-exam-div-name">
              <div class="art-exam-div-txt">
                <div>美术</div>
                <div>艺考</div>
              </div>
            </div>
          </div>
          <img src="../assets/img/home-page/art-test.png" alt="">
          <img src="../assets/img/home-page/chuanmeiyikao.png" alt="">
          <img src="../assets/img/home-page/art-exam-qa.png" alt="">
          <img src="../assets/img/home-page/zhongkaotechangsheng.png" alt="">
        </div>
      </div>
    </div>

    <div class="outstanding-students">
      <div class="outstanding-students-bg">
        <div class="container">
          <div class="center-block outstanding-students-bg-more">
            <div>More</div>
            <img src="../assets/img/home-page/more-down.png" alt="">
          </div>
        </div>
        <div class="outstanding-students-title">
          <img src="../assets/img/home-page/student-style.png" alt="">
        </div>
        <div class="container outstanding-students-img-group">
          <div class="col-md-2"
               v-for="infoItem in studentInfo">
            <div class="row"><img class="center-block" src="../assets/img/home-page/student.png" alt=""></div>
            <div class="row center-block outstanding-students-row">
              <p>{{infoItem.name}}</p>
            </div>
            <div class="row">
              <p class="p-student-school">{{infoItem.school}}</p>
              <p class="p-student-profession">{{infoItem.profession}}</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="center-block outstanding-students-bg-more-2">
            <div>More</div>
            <img src="../assets/img/home-page/more-down.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="homepage-teacher-team">
      <div class="container">
        <div class="homepage-teacher-team-title">
          <img src="../assets/img/home-page/teacher-team.png" alt="">
        </div>
        <div class="homepage-teacher-team-img-group"
             v-for="item in teacherInfo">
          <div class="col-md-3">
            <div class="row"><img src="../assets/img/home-page/teacher.png" alt=""></div>
            <div class="row">
              <p class="p-teacher-name-school">{{item.name}} | {{item.school}}</p>
              <p class="p-teacher-profession-title">{{item.profession}}{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="homepage-class-table">
      <div class="homepage-class-table-bg">
        <div class="container">
          <div class="center-block class-bg-more">
            <div>More</div>
            <img src="../assets/img/home-page/more-down.png" alt="">
          </div>
        </div>
        <class-table></class-table>
        <div class="container">
          <div class="center-block class-bg-more-2">
            <div>More</div>
            <img src="../assets/img/home-page/more-down.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="homepage-news">
      <news></news>
    </div>

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
  import ClassTable from './HomePage/ClassTable'
  import News from './HomePage/News'

  export default {
    name: 'HomePage',
    data() {
      return {
        clickedVal: 'HomePage',
        studentInfo: [
          {name: '学员姓名', school: '学校名称', profession: '专业名称'},
          {name: '学员姓名', school: '学校名称', profession: '专业名称'},
          {name: '学员姓名', school: '学校名称', profession: '专业名称'},
          {name: '学员姓名', school: '学校名称', profession: '专业名称'},
          {name: '学员姓名', school: '学校名称', profession: '专业名称'},
          {name: '学员姓名', school: '学校名称', profession: '专业名称'}
        ],
        teacherInfo: [
          {name: '老师姓名', school: '学校名称', profession: '专业名称', title: 'XX讲师'},
          {name: '老师姓名', school: '学校名称', profession: '专业名称', title: 'XX讲师'},
          {name: '老师姓名', school: '学校名称', profession: '专业名称', title: 'XX讲师'},
          {name: '老师姓名', school: '学校名称', profession: '专业名称', title: 'XX讲师'}
        ],
        footerText: '版权所有 艺动教育 京ICP备案10011865号    京公网安备11010502022735号'
      }
    },
    components: { // 引入子组件
      TopNav,
      Banner,
      ClassTable,
      News
    }
  }
</script>

<style>
  .homepage-art-exam-title {
    margin-top: 42px;
    margin-bottom: 52px;
  }
  .outstanding-students-title {
    padding-top: 56px;
    margin-bottom: 60px;
  }
  .homepage-contact-info-title {
    padding-top: 48px;
    margin-bottom: 30px;
  }
  .homepage-teacher-team-title {
    margin-top: 32px;
    margin-bottom: 44px;
  }
  .homepage-art-exam-title,
  .homepage-art-exam-img-group,
  .outstanding-students-title,
  .homepage-contact-info-title,
  .outstanding-students-img-group,
  .homepage-teacher-team-title,
  .homepage-teacher-team-img-group {
    text-align: center;
  }
  .homepage-art-exam-img-group > img,
  .homepage-teacher-team-img-group > img {
    margin: 0 11px
  }
  .outstanding-students-img-group > img {
    margin: 0 19px
  }

  .homepage-art-exam-img-group {
    position: relative;
  }
  .art-exam-div-title {
    position: absolute;
    height: 240px;
    width: 240px;
    left: 51px;
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

  .outstanding-students-row {
    background-color: white;
    width: 140px;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    color: #644591;
  }
  .p-student-school {
    margin-bottom: 0;
    margin-top: 14px;
    font-size: 13px;
    color: white;
  }
  .p-student-profession,
  .p-teacher-profession-title {
    font-size: 13px;
    color: #b2cc49;
  }

  .p-teacher-name-school {
    margin-top: 16px;
    margin-bottom: 0;
    font-size: 13px;
    color: #644591;
  }

  /* start：学员风采、课程表、联系方式；有紫色背景图片的样式 */
  .outstanding-students,
  .homepage-class-table,
  .homepage-contact-info {
    margin-top: 50px;
  }
  .outstanding-students-bg {
    background: url("../assets/img/home-page/student-stlye-bg.png") center no-repeat;
    height: 492px;
  }
  .homepage-class-table-bg {
    background: url("../assets/img/home-page/class-table-bg.png") center no-repeat;
    height: 492px;
  }
  .homepage-contact-info-bg {
     background: url("../assets/img/home-page/contact-info-bg.png") center no-repeat;
     height: 610px;
   }
  /* end：学员风采、课程表、联系方式；有紫色背景图片的样式 */

  /* Start: 圆形背景里的more */
  .outstanding-students-bg-more,
  .class-bg-more {
    text-align: center;
    height: 72px;
    width: 72px;
    background-color: white;
    border-radius: 50%;
    color: #b2cc49;
    font-size: 12px;
    margin-top: -36px;
    padding-top: 30px;
  }
  .class-bg-more > img,
  .outstanding-students-bg-more > img {
    width: 6px;
    margin-top: -10px;
  }
  .outstanding-students-bg-more-2,
  .class-bg-more-2 {
    text-align: center;
    height: 72px;
    width: 72px;
    background-color: transparent;
    color: #b2cc49;
    font-size: 12px;
    margin-top: 16px;
  }
  .outstanding-students-bg-more-2 > img,
  .class-bg-more-2 > img {
    width: 6px;
    margin-top: -10px;
  }
  .class-bg-more-2 {;
    margin-top: -10px;
  }
  /* End: 圆形背景里的more */

  .homepage-news {
    margin-top: 60px;
  }

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
