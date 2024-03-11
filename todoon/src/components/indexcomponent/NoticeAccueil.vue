<template>
    <smallLine/>
    <div class="flex relative space-x-8 px-24">
        <carousel/>
    </div>
    <smallLine/>
</template>
<script>
import smallLine from '../line/smallLine.vue'
import carousel from '../carousel/carouselAccueil.vue'

export default {
  components: {
    smallLine,
    carousel
  }
}
</script>
