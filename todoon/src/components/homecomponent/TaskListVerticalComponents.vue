<template>
        <smallTaskCard v-for="task in tasks" :key="task.name" :task="task" @delete-item="handleDeleteItem"/>
</template>

<script>
import smallTaskCard from '../cards/smallTaskCard.vue'
import TasksDataService from '../../TasksDataService'

export default {
  components: {
    smallTaskCard
  },
  props: {
    number: {
      type: Number,
      required: true
    }
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
        this.tasks = response.data.filter(task => task.taskstatus === this.number)
        console.log(this.tasks)
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    handleDeleteItem(taskId) {
    console.log('b');
    console.log(this.tasks);
    console.log(taskId);
    this.tasks = this.tasks.filter((task_list) => task_list.id !== taskId);
    console.log(this.tasks);
  },
  },
}
</script>
