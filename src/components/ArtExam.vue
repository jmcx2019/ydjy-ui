<template>
  <div id="art-exam">
    <top-nav :clicked="clickedVal"></top-nav>

    <div class="container">
      <div class="row bread-crumbs">
        <span>艺术升学</span>
        <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        <span>{{$route.query.name}}</span>
        <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        <span>{{artExamInfoChild[$route.query.id][$route.query.child].pageName}}</span>
      </div>

      <div class="row art-exam-content">
        <div class="hidden-xs hidden-sm col-md-4 col-lg-3">
          <left-nav :clicked="artExamInfoChild[$route.query.id][$route.query.child].pageName"
                    :navParams="{id: $route.query.id, routeName: $route.name, pageName: $route.query.name}"
                    :navList="artExamInfoChild[$route.query.id]"></left-nav>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-9">
          <component :is="$route.query.id + artExamInfoChild[$route.query.id][$route.query.child].id"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入子组件
  import TopNav from './TopNav'
  import LeftNav from "./Public/LeftNav"
  import MediaIntroduction from "./ArtExam/Media/Introduction"
  import MediaAdvantage from "./ArtExam/Media/Advantage"
  import MediaAdmissionScore from "./ArtExam/Media/AdmissionScore"
  import MediaBroadcast from "./ArtExam/Media/Broadcast"
  import MediaEditor from "./ArtExam/Media/Editor"
  import MediaPerformance from "./ArtExam/Media/Performance"
  import MediaPhotography from "./ArtExam/Media/Photography"
  import MediaUniversity from "./ArtExam/Media/University"
  import ArtIntroduction from "./ArtExam/Art/Introduction"
  import ArtAdvantage from "./ArtExam/Art/Advantage"
  import ArtSubject from "./ArtExam/Art/Subject"
  import ArtUniversity from "./ArtExam/Art/University"
  import MiddleIntroduction from "./ArtExam/Middle/Introduction"
  import MiddleAdvantage from "./ArtExam/Middle/Advantage"
  import MiddleSubject from "./ArtExam/Middle/Subject"

  export default {
    name: 'ArtExam',
    data() {
      return {
        clickedVal: 'ArtExam',
        artExamInfo: [
          {id: 'media', routeName: 'ArtExamMedia', pageName: '传媒艺考'},
          {id: 'art', routeName: 'ArtExamArt', pageName: '美术艺考'},
          {id: 'middle', routeName: 'ArtExamMiddle', pageName: '中考美术特长生'}
        ],
        artExamInfoChild: {
          media: [
            {id: 'Introduction', routeName: 'ArtExamMediaIntroduction', pageName: '项目简介'},
            {id: 'Advantage', routeName: 'ArtExamMediaAdvantage', pageName: '项目优势'},
            {id: 'AdmissionScore', routeName: 'ArtExamMediaAdmissionScore', pageName: '高考文化录取分数'},
            {id: 'Broadcast', routeName: 'ArtExamMediaBroadcast', pageName: '播音主持'},
            {id: 'Editor', routeName: 'ArtExamMediaEditor', pageName: '影视编导'},
            {id: 'Performance', routeName: 'ArtExamMediaPerformance', pageName: '影视表演'},
            {id: 'Photography', routeName: 'ArtExamMediaPhotography', pageName: '摄影摄像'},
            {id: 'University', routeName: 'ArtExamMediaUniversity', pageName: '可考院校'}
          ],
          art: [
            {id: 'Introduction', routeName: 'ArtExamArtIntroduction', pageName: '项目简介'},
            {id: 'Advantage', routeName: 'ArtExamArtAdvantage', pageName: '项目优势'},
            {id: 'Subject', routeName: 'ArtExamArtSubject', pageName: '考试科目及适合学生'},
            {id: 'University', routeName: 'ArtExamArtUniversity', pageName: '可考院校'}
          ],
          middle: [
            {id: 'Introduction', routeName: 'ArtExamMiddleIntroduction', pageName: '项目简介'},
            {id: 'Advantage', routeName: 'ArtExamMiddleAdvantage', pageName: '项目优势'},
            {id: 'Subject', routeName: 'ArtExamMiddleSubject', pageName: '考试科目及适合学生'}
          ]
        }
      }
    },
    components: { // 引入子组件
      TopNav,
      LeftNav,
      MediaIntroduction,
      MediaAdvantage,
      MediaAdmissionScore,
      MediaBroadcast,
      MediaEditor,
      MediaPerformance,
      MediaPhotography,
      MediaUniversity,
      ArtIntroduction,
      ArtAdvantage,
      ArtSubject,
      ArtUniversity,
      MiddleIntroduction,
      MiddleAdvantage,
      MiddleSubject
    }
  }
</script>

<style>
  .bread-crumbs {
    margin-top: 24px;
    color: #868686;
    font-size: 11px;
    padding-left: 15px;
  }
  .art-exam-content {
    margin-top: 20px;
  }
</style>
