<template>
    <Splide ref="splide" :options="options" aria-label="My Favorite Images">
      <SplideSlide v-for="task in tasks" :key="task.name">
        <smallTaskCard :task="task"/>
      </SplideSlide>
    </Splide>
  </template>
  <style>
  @import '@splidejs/splide/css';
  </style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import TasksDataService from '../../TasksDataService'
import smallTaskCard from '../cards/smallTaskCard.vue'

export default {
  name: 'Carousel2Component',
  components: {
    Splide,
    SplideSlide,
    smallTaskCard
  },
  data () {
    return {
      options: {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '1rem',
        pagination: false
      },
      tasks: []
    }
  },
  mounted () {
    // Read the data
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
