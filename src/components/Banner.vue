<template>
  <div id="banner">
    <div class="div-carousel">
      <div class="container md-card-media">
        <div class="swiper-container swiper-container-horizontal">
          <swiper :options="swiperOption">
            <!--<swiper-slide><img :src="this.imgUrl[0]" class="img-responsive " alt=""></swiper-slide>-->
            <swiper-slide><img src="../assets/img/home-page/banner.png" class="img-responsive" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/home-page/banner.png" class="img-responsive" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/home-page/banner.png" class="img-responsive" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/img/home-page/banner.png" class="img-responsive" alt=""></swiper-slide>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'Banner',
    data() {
      return {
        imgUrl: [
          '../assets/demo-img/banner1.jpg',
          '../assets/demo-img/banner2.jpg',
          '../assets/demo-img/banner3.jpg'
        ],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 3000,
//          width : window.innerWidth,
          height: 300,
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          direction: 'horizontal'
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style>
  @media (min-width: 768px) {
    .md-card-media {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .md-card-media {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .md-card-media {
      width: 1170px;
    }
  }
  @media (min-width: 1280px) {
    .md-card-media {
      width: 1250px;
    }
  }
  @media (min-width: 1328px) {
    .md-card-media {
      width: 1310px;
    }
  }
</style>
