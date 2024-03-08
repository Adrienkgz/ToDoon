<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="4"
      :autoplay="true"
      :mousewheel-force-to-axis="true"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 2,
        slideShadows: false,
      }"
      :pagination="true"
      :modules="modules"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide><largeTaskCard/></swiper-slide>
      <swiper-slide><largeTaskCard/></swiper-slide>
      <swiper-slide><largeTaskCard/></swiper-slide>
      <swiper-slide><largeTaskCard/></swiper-slide>
      <swiper-slide><largeTaskCard/></swiper-slide>
      <swiper-slide><largeTaskCard/></swiper-slide>
    </swiper>
  </template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import largeTaskCard from '../cards/largeTaskCard.vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'
export default {
  components: {
    largeTaskCard,
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [EffectCoverflow, Pagination]
    }
  }
}
</script>
<style>
.swiper {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
