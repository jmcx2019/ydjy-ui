<template>
  <div id="introduction">
    <div class="row about-company-pic-row">
      <div class="about-company-pic-div">
        <img src="../../assets/img/about-company/bg.png">
        <div class="about-company-pic">
          <div class="about-company-bottom-block">
            <div class="about-company-pic-txt">{{summary}}</div>
          </div>
        </div>
      </div>

      <div class="about-company-txt">
        <span v-html="content"></span>
        <div class="about-company-slogan">{{slogan}}</div>
      </div>

      <div class="about-company-service-div">
        <img src="../../assets/img/about-company/service-product.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Introduction',
    created() {
      // 组件创建完后获取数据，此时 data 已经被 observed 了
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    data() {
      return {
        summary: '',
        content: '',
        slogan: ''
      }
    },
    methods: {
      fetchData() {
        // Get获取数据
        this.axios.get(process.env.API_URL + 'introduction').then(response => {
          if (response.data.code === 1000) {
            let introductionTxtArr = response.data.data.data[0]
            this.summary = introductionTxtArr.summary
            this.content = introductionTxtArr.content
            this.slogan = introductionTxtArr.slogan
          }
        })
      }
    }
  }
</script>

<style>
  .about-company-pic-row {
    min-height: 526px;
    background-color: #f8f8f8;
  }
  .about-company-pic-div {
    padding: 30px;
  }
  .about-company-pic-div > img {
    height: 100%;
    width: 100%;
  }
  .about-company-pic {
    position: relative;
  }
  .about-company-bottom-block {
    height: 100px;
    width: 100%;
    background-color: rgba(100, 69, 145, 0.9);
    bottom: 0;
    position: absolute;
  }
  .about-company-pic-txt {
    color: white;
    padding: 32px 21px 0 21px;
    font-size: 13px;
  }

  .about-company-txt {
    padding: 0 51px 30px 51px;
  }

  .about-company-slogan {
    font-size: 13px;
    color: #644591;
    margin-top: 30px;
  }

  /* start: 背景图按宽高比自适应div的最大宽度，填充图自适应背景图 */
  .about-company-service-div {
    margin: 0 30px 30px 30px;
    background: url("../../assets/img/about-company/service-bg.png") center no-repeat;
    background-size: 100%;
  }
  .about-company-service-div > img {
    height: 100%;
    width: 100%;
  }
  /* end: 背景图按宽高比自适应div的最大宽度，填充图自适应背景图 */
</style>
