<template>
  <div class="flex ">
    <aside class="w-1/5">
      <MenuHomeComponent/>
    </aside>
    <main class="w-4/5">
    </main>
  </div>
</template>

<style>
  aside {
    background-color: #D9D9D9;
  }
</style>
<script>
import MenuHomeComponent from '../components/MenuHomeComponent.vue'

export default {
  components: {
    MenuHomeComponent
  }
}
</script>
