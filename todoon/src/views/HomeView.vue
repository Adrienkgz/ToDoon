<template>
  <HeaderComponent/>
  <InfoAccueil/>
  <StatsAcceuil/>
  <LoginPage/>
</template>

<script>
import InfoAccueil from '../components/InfoAccueil.vue'
import StatsAcceuil from '../components/StatsAcceuil.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent,
    InfoAccueil,
    StatsAcceuil
  }
}
</script>
