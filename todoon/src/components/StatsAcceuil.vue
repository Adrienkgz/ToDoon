<template>
    <div>
      <h1>Statistiques</h1>
      <div class="flex space-x-4">
        <StatComponent :stat-type="'Nombre d\'utilisateurs'" :stat-number="12345" />
        <StatComponent :stat-type="'Nombre de tâches'" :stat-number="67890" />
        <StatComponent :stat-type="'Tâches terminées'" :stat-number="111213" />
      </div>
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
