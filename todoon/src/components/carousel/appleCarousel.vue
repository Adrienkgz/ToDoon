<template>
  <div class="w-full h-500 m-2">
    <div v-if="loaded && tasks.length">
      <div class="pt-2">Today's Task</div>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView=5
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
        <swiper-slide v-for="task in tasks" :key="task.id">
          <largeTaskCard :task="task" :list_categories="list_category" @taskDeleted="suppCard" @taskModified="modifTask"/>
        </swiper-slide>
        <swiper-slide>
          <largeTaskCardAdd/>
        </swiper-slide>
      </swiper>
    </div>
    <div v-if="loaded && !tasks.length" class="flex lg:flex-row flex-col justify-center md:space-x-20" id="noTask">
      <noTaskView/>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import largeTaskCard from '../cards/largeTaskCard.vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import largeTaskCardAdd from '../cards/largeTaskCardAdd.vue'
import noTaskView from '../animation/noTaskViewHamster.vue'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'
export default {
  name: 'appleCarousel',
  components: {
    largeTaskCard,
    Swiper,
    SwiperSlide,
    largeTaskCardAdd,
    noTaskView
  },
  setup () {
    return {
      modules: [EffectCoverflow, Pagination],
      emits: ['taskDeleted', 'taskModified']
    }
  },
  props: {
    tasks: Array,
    list_category: Array
  },
  data () {
    return {
      loaded: false,
      tasksKey: 0
    }
  },
  mounted () {
    console.log('Apple Carousel Task', this.tasks)
    setTimeout(() => {
      this.loaded = true
    }, 200)
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
@media screen and (max-width: 1015) {
  #noTask {
    flex-direction: row;
  }
}
</style>
