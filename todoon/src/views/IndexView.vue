<template>
  <HeaderComponent/>
  <InfoAccueil/>
  <StatsAcceuil/>
  <LoginPage/>
  <noticeAccueil/>
  <MainFooter/>
</template>
<script>
import InfoAccueil from '../components/InfoAccueil.vue'
import StatsAcceuil from '../components/StatsAcceuil.vue'
import noticeAccueil from '../components/NoticeAccueil.vue'
import MainFooter from '../components/MainFooter.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

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
