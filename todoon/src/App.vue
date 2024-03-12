<template>
  <RouterView/>
</template>

<script>
import TasksDataService from './services/TasksDataService'

export default {
  name: 'App',
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
