<template>
  <div class="flex ">
    <aside class="w-1/5">
      <MenuHomeComponent/>
  </aside>
    <main class="w-4/5">
      <HeaderHomeComponent/>
    </main>
  </div>
</template>
<script>
import MenuHomeComponent from '../components/homecomponent/MenuHomeComponent.vue'
import HeaderHomeComponent from '../components/homecomponent/HeaderHomeComponent.vue'

export default {
  components: {
    MenuHomeComponent,
    HeaderHomeComponent
  }
}
</script>
