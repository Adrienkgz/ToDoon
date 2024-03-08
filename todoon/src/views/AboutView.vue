<template>
  <div>
    <HeaderComponent/>
      <smallTaskCard v-for="task in tasks" :key="task.name" :task="task"/>
    <MainFooter/>
  </div>
</template>

<script>
import HeaderComponent from '../components/indexcomponent/HeaderComponent.vue'
import MainFooter from '../components/MainFooter.vue'
import smallTaskCard from '../components/cards/smallTaskCard.vue'
import TasksDataService from '../TasksDataService'
export default {
  components: {
    HeaderComponent,
    smallTaskCard,
    MainFooter
  },
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    // Read the data
    TasksDataService.getAll()
      .then(response => {
        this.tasks = response.data
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
