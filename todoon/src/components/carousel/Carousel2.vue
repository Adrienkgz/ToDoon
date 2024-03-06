<template>
    <Splide :options="options" aria-label="My Favorite Images">
        <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
      <SplideSlide>
        <Card/>
      </SplideSlide>
    </Splide>
  </template>
  <style>
  @import '@splidejs/splide/css';
  </style>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import Card from '../cards/noticeCards.vue'
export default {
  name: 'Carousel2Component',
  components: {
    Splide,
    SplideSlide,
    Card
  },
  data () {
    return {
      options: {
        perPage: 5,
        rewind: true
      }
    }
  }
}
</script>
