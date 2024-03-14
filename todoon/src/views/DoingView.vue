<template>
    <div class="flex flex-col min-h-screen">
      <HeaderHomeComponent @search="onSearch" @newcardadded="addNewCard"/>
      <div class="flex-grow">
        <div class="flex">
          <aside class="w-1/5">
              <MenuHomeComponent/>
          </aside>
          <main class="w-4/5">
              <wFullTaskCard v-for="task in tasks_to_show" :key="task.name" :task="task"/>
          </main>
        </div>
      </div>
      <MainFooter/>
    </div>
</template>

<script>
import MenuHomeComponent from '../components/homecomponent/MenuHomeComponent.vue'
import HeaderHomeComponent from '../components/homecomponent/HeaderHomeComponent.vue'
import wFullTaskCard from '@/components/cards/wFullTaskCard.vue'
import TasksDataService from '../services/TasksDataService'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: {
    MenuHomeComponent,
    HeaderHomeComponent,
    wFullTaskCard,
    MainFooter
  },
  data () {
    return {
      tasks: [],
      tasks_to_show: [],
      searchValue: ''
    }
  },
  methods: {
    addNewCard (newCard) {
      this.tasks.push(newCard)
    },
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
    TasksDataService.getAllByUser()
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
