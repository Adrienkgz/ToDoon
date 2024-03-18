<template>
  <div class="flex flex-col min-h-screen">
    <HeaderHomeComponent @newcardadded="addNewCard" @search="onSearch"/>
    <div class="flex-grow">
      <div class="flex" id="homeFlex">
        <aside class="w-1/5" id="aside">
          <MenuHomeComponent/>
        </aside>
        <main class="w-4/5 pl-5" id="homeView">
        <div class="flex" id="accueilFilter">
            <div class="flex-grow text-4xl font-black">Tasks doing</div>
            <div class="flex items-center">
                <div class="filter-container mr-5">
                    <button class="filter-button">Filter by: Date <i class="fa fa-caret-down"></i></button>
                    <div class="filter-menu">
                        <ul>
                            <li>Date</li>
                            <li>Price</li>
                            <li>Popularity</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <wFullTaskCard v-for="task in tasks_to_show" :key="task.name" :task="task" @taskDeleted="deleteTask"
            @taskModified="modifTask" />
    </main>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MenuHomeComponent from '../components/homecomponent/MenuHomeComponent.vue'
import HeaderHomeComponent from '../components/homecomponent/HeaderHomeComponent.vue'
import MainFooter from '../components/MainFooter.vue'
import TasksDataService from '@/services/TasksDataService'
import wFullTaskCard from '@/components/cards/wFullTaskCard.vue'

export default {
  components: {
    MenuHomeComponent,
    HeaderHomeComponent,
    MainFooter,
    wFullTaskCard
  },
  data () {
    return {
      tasks: [],
      tasks_to_show: [],
      searchValue: ''
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
    },
    deleteTask (task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    },
    modifTask (task) {
      const index = this.tasks.findIndex(t => t.id === task.id)
      this.tasks[index] = task
    }
  }
}
</script>
