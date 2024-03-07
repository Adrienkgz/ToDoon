<template>
  <HeaderComponent/>
  <InfoAccueil/>
  <StatsAcceuil/>
  <LoginPage/>
  <noticeAccueil/>
  <MainFooter/>
</template>

<script>
import InfoAccueil from '../components/indexcomponent/InfoAccueil.vue'
import StatsAcceuil from '../components/indexcomponent/StatsAcceuil.vue'
import noticeAccueil from '../components/indexcomponent/NoticeAccueil.vue'
import MainFooter from '../components/MainFooter.vue'
import HeaderComponent from '../components/indexcomponent/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent,
    InfoAccueil,
    StatsAcceuil,
    noticeAccueil,
    MainFooter
  }
}
</script>
