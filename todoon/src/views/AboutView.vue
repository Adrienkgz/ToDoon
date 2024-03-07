<template>
  <div>
    <HeaderComponent/>
    <smallTaskCard :task="{ name:'Plier le linge', description:'Je dois plier le linge et ca rentre pas de le cadre', status:2, targetDate:'29-03-2024:14:30:00' }"/>
    <MainFooter/>
  </div>
</template>

<script>
import HeaderComponent from '../components/indexcomponent/HeaderComponent.vue'
import MainFooter from '../components/MainFooter.vue'
import smallTaskCard from '../components/cards/smallTaskCard.vue'

export default {
  components: {
    HeaderComponent,
    smallTaskCard,
    MainFooter
  }
}
</script>
