<template>
  <div class="flex ">
    <aside class="w-1/5 bg-gray-200 ">
      <MenuHomeComponent/>
  </aside>
    <main class="w-4/5">
      <HeaderHomeComponent/>
      <Carousel2Component/>
    </main>
  </div>
</template>

<style>
  aside {
    background-color: #D9D9D9;
  }
</style>
<script>
import MenuHomeComponent from '../components/homecomponent/MenuHomeComponent.vue'
import HeaderHomeComponent from '../components/homecomponent/HeaderHomeComponent.vue'
import Carousel2Component from '../components/carousel/Carousel2.vue'

export default {
  components: {
    MenuHomeComponent,
    HeaderHomeComponent,
    Carousel2Component
  }
}
</script>
