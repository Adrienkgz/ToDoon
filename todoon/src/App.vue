<template>
  <HeaderComponent/>
  <InfoAccueil/>
  <StatsAcceuil/>
  <noticeCards/>
  <div class="h-96">coucou</div>
  <RouterView/>
</template>

<script>
import HeaderComponent from './components/header.vue'
import InfoAccueil from './components/InfoAccueil.vue'
import StatsAcceuil from './components/StatsAcceuil.vue'
import noticeCards from './components/cards/noticeCards.vue'

export default {
  components: {
    HeaderComponent,
    InfoAccueil,
    StatsAcceuil,
    noticeCards

export default {
  components: {
    HeaderComponent
  }
}
</script>
