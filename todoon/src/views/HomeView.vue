<template>
  <div class="flex">
    <aside class="w-1/5">
      <MenuHomeComponent/>
  </aside>
    <main class="w-4/5">
      <HeaderHomeComponent/>
      <Carousel1Component/>
      <Carousel2Component/>
    </main>
  </div>
</template>

<style>
template {
  background-color: aqua;
}
</style>
<script>
import MenuHomeComponent from '../components/homecomponent/MenuHomeComponent.vue'
import HeaderHomeComponent from '../components/homecomponent/HeaderHomeComponent.vue'
import Carousel1Component from '../components/carousel/Carousel1.vue'
import Carousel2Component from '../components/carousel/Carousel2.vue'

export default {
  components: {
    MenuHomeComponent,
    HeaderHomeComponent,
    Carousel1Component,
    Carousel2Component
  }
}
</script>
