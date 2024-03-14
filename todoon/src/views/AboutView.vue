<template>
  <div>
    <HeaderComponent/>
    <AboutBody/>
    <MainFooter/>
  </div>
</template>

<script>
import AboutBody from '@/components/search/AboutBody.vue'
import HeaderComponent from '../components/indexcomponent/HeaderComponent.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
  components: {
    HeaderComponent,
    MainFooter,
    AboutBody
  }
}
</script>
