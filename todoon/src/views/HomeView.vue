<template>
  <div class="flex">
    <aside class="w-1/5">
      <MenuHomeComponent/>
  </aside>
    <main class="w-4/5">
      <HeaderHomeComponent/>
      <Carousel2/>
      <appleCarousel/>
    </main>
  </div>
  <MainFooter/>
</template>
<style>
template {
  background-color: aqua;
}
</style>
<script>
import MenuHomeComponent from '../components/homecomponent/MenuHomeComponent.vue'
import HeaderHomeComponent from '../components/homecomponent/HeaderHomeComponent.vue'
import Carousel2 from '@/components/carousel/Carousel2.vue'
import appleCarousel from '../components/carousel/appleCarousel.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  components: {
    MenuHomeComponent,
    HeaderHomeComponent,
    Carousel2,
    appleCarousel,
    MainFooter
  }
}
</script>
