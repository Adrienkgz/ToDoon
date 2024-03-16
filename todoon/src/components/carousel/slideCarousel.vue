<template>
    <swiper
      :slidesPerView="5"
      :spaceBetween="5"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
        <swiper-slide v-for="task in tasks" :key="task.id">
            <smallTaskCard :task="task" @taskDeleted="suppCard" @taskModified="modifTask"/>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import smallTaskCard from '../cards/smallTaskCard.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
export default {
  components: {
    Swiper,
    SwiperSlide,
    smallTaskCard
  },
  props: {
    tasks: Array
  },
  setup () {
    return {
      modules: [Pagination]
    }
  },
  methods: {
    suppCard (task) {
      this.$emit('taskDeleted', task)
    },
    modifTask (task) {
      this.$emit('taskModified', task)
    }
  }
}
</script>
