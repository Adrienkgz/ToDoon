<template>
<div class="flex relative py-10">
  <StatComponent statType="Actifs Users" :statNumber="'3000 users'"/>
  <StatComponent statType="Task Numbers" :statNumber="'3928 Tasks Created'"/>
  <StatComponent statType="Tasks Completed" :statNumber="'245 Tasks Completed'"/>
  <StatComponent statType="Actifs Users" :statNumber="'259 Active Users'"/>
</div>
</template>

<script>
import StatComponent from './StatComponent.vue'

export default {
  components: {
    StatComponent
  }
}
</script>
