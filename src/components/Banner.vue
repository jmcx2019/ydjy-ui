<template>
  <div id="banner">
    <div class="container div-carousel">
      <div class="md-card-media">
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
  .div-carousel {
    margin-top: -20px;
  }
</style>
