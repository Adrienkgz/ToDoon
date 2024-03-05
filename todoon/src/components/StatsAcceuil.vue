<template>
<div class="flex relative py-12">
  <StatComponent statType="Actifs Users" :statNumber="'3000 users'"/>
  <StatComponent statType="Task Numbers" :statNumber="'3928 Tasks Created'"/>
  <StatComponent statType="Tasks Completed" :statNumber="'245 Tasks Completed'"/>
  <StatComponent statType="Actifs Users" :statNumber="'259 Active Users'"/>
</div>

</template>
<style>
  div {
    font-size: 20px;
    font-family: 'inter', sans-serif;
  }
</style>

<script>
import StatComponent from './StatComponent.vue'

export default {
  components: {
    StatComponent
  }
}
</script>
