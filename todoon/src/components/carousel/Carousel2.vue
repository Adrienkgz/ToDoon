<template>
    <Splide ref="splide" :options="options" aria-label="My Favorite Images">
        <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide><SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide><SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
      <SplideSlide>
        <WhiteCardTask/>
      </SplideSlide>
    </Splide>
  </template>
  <style>
  @import '@splidejs/splide/css';
  </style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'

import WhiteCardTask from '../cards/WhiteCardTask.vue'

export default {
  name: 'Carousel2Component',
  components: {
    Splide,
    SplideSlide,
    WhiteCardTask
  },
  data () {
    return {
      options: {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '1rem',
        pagination: false
      }
    }
  }
}
</script>
