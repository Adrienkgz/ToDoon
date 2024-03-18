<template>
  <div class="w-full h-500 m-2" v-if="filterAndSortTasks().length > 0">
    <div class="flex-grow text-4xl font-black" id="nextMonth">Next Month - <span class="text-pinky text-3xl">{{ nextMonthName }}</span></div>
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
        <swiper-slide v-for="task in filterAndSortTasks()" :key="task.id">
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
    nextMonthName () {
      const today = new Date()
      const nextMonth = today.getMonth() === 11 ? 0 : today.getMonth() + 1
      const monthName = new Date(today.getFullYear(), nextMonth).toLocaleString('default', { month: 'long' })
      return monthName.charAt(0).toUpperCase() + monthName.slice(1)
    }
  },
  methods: {
    suppCard (task) {
      this.$emit('taskDeleted', task)
    },
    modifTask (task) {
      this.$emit('taskModified', task)
    },
    filterAndSortTasks () {
      console.log('filterAndSortTasks')
      const currentDate = new Date()
      const nextWeek = new Date(currentDate.getTime() + 38 * 24 * 60 * 60 * 1000)
      const task = this.tasks
        .filter(task => new Date(task.taskenddate) <= nextWeek && new Date(task.taskenddate) >= currentDate)
        .sort((a, b) => new Date(a.taskenddate) - new Date(b.taskenddate))
      console.log('task filtered:', task)
      return this.tasks
        .filter(task => new Date(task.taskenddate) <= nextWeek && new Date(task.taskenddate) >= currentDate)
        .sort((a, b) => new Date(a.taskenddate) - new Date(b.taskenddate))
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
