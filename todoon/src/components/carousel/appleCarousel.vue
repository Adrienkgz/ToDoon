<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="4"
      :autoplay="false"
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
      :loop="false"
      class="mySwiper"
    >
      <swiper-slide v-for="task in tasks" :key="task.name">
        <largeTaskCard :task="task"/>
      </swiper-slide>
    </swiper>
  </template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import largeTaskCard from '../cards/largeTaskCard.vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import TasksDataService from '../../TasksDataService'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'
export default {
  name: 'appleCarousel',
  components: {
    largeTaskCard,
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [EffectCoverflow, Pagination]
    }
  },
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    // Read the data
    const token = localStorage.getItem('token')
    console.log('token:', token)
    TasksDataService.getAll()
      .then(response => {
        this.tasks = response.data
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
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
