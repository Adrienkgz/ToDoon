<template>
  <div class="w-full h-500 m-2" v-if="filterAndSortTasksNextWeek().length > 0">
    <div class="flex-grow text-4xl font-black">Next Week - <span class="text-pinky text-3xl">{{ nextWeekRange }}</span></div>
    <div v-if="loaded && tasks.length">
      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :centeredSlides="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="task in filterAndSortTasksNextWeek()" :key="task.id">
            <largeTaskCard :task="task" :list_categories="list_category" @taskDeleted="suppCard" @taskModified="modifTask"/>
        </swiper-slide>
      </swiper>
    </div>
  </div>
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
  name: 'appleCarousel',
  components: {
    largeTaskCard,
    Swiper,
    SwiperSlide
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
    setTimeout(() => {
      this.loaded = true
    }, 200)
  },
  computed: {
    nextWeekRange () {
      const today = new Date()
      const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
      const endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 6)
      const options = { weekday: 'long', day: 'numeric' }
      const startDay = startDate.toLocaleString('default', options).charAt(0).toUpperCase() + startDate.toLocaleString('default', options).slice(1)
      const endDay = endDate.toLocaleString('default', options).charAt(0).toUpperCase() + endDate.toLocaleString('default', options).slice(1)
      return startDay + ' - ' + endDay
    }
  },
  methods: {
    suppCard (task) {
      this.$emit('taskDeleted', task)
    },
    modifTask (task) {
      this.$emit('taskModified', task)
    },
    filterAndSortTasksNextWeek    () {
      console.log('filterAndSortTasksNextWeek')
      const currentDate = new Date()
      const nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000)
      console.log('No filtered Task Week', this.tasks)
      const task = [...this.tasks]
      return task.filter(task => new Date(task.taskenddate) <= nextWeek && new Date(task.taskenddate) >= currentDate)
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
