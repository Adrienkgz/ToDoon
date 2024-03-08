<template>
    <div class="flex">
        <aside class="w-1/5">
            <MenuHomeComponent/>
        </aside>
        <main class="w-4/5">
            <HeaderHomeComponent @search="onSearch"/>
            <smallTaskCard v-for="task in tasks_to_show" :key="task.name" :task="task"/>
        </main>
    </div>
</template>

<script>
import MenuHomeComponent from '../components/homecomponent/MenuHomeComponent.vue'
import HeaderHomeComponent from '../components/homecomponent/HeaderHomeComponent.vue'
import smallTaskCard from '@/components/cards/smallTaskCard.vue'
import TasksDataService from '../TasksDataService'

export default {
  components: {
    MenuHomeComponent,
    HeaderHomeComponent,
    smallTaskCard
  },
  data () {
    return {
      tasks: [],
      tasks_to_show: [],
      searchValue: ''
    }
  },
  methods: {
    onSearch (value) {
      this.searchValue = value
      this.tasks_to_show = this.tasks
      if (this.searchValue) {
        this.tasks_to_show = this.tasks.filter(task => task.taskname.toLowerCase().includes(this.searchValue.toLowerCase()))
      }
    }
  },
  mounted () {
    // Read the data
    TasksDataService.getAll()
      .then(response => {
        const tasksfiltred = response.data.filter(task => task.taskstatus === 1)
        this.tasks = tasksfiltred
        this.tasks_to_show = tasksfiltred
        console.log(this.tasks)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
