
<template>
  <HeaderComponent/>
  <InfoAccueil/>
  <StatsAcceuil/>
</template>

<script>
import HeaderComponent from './components/header.vue'
import InfoAccueil from './components/InfoAccueil.vue'
import StatsAcceuil from './components/StatsAcceuil.vue'
export default {
  components: {
    HeaderComponent,
    InfoAccueil,
    StatsAcceuil
  }
}
</script>
