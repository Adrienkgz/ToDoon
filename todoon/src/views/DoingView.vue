<template>
  <div class="flex flex-col min-h-screen">
    <HeaderHomeComponent @newcardadded="addNewCard" @search="onSearch"/>
    <div class="flex-grow">
      <div class="flex" id="homeFlex">
        <aside class="w-1/5" id="aside">
          <MenuHomeComponent/>
        </aside>
        <main class="w-4/5 pl-5 mr-10" id="homeView">
        <div class="flex" id="accueilFilter">
            <div class="flex-grow text-4xl font-black">Tasks Doing</div>
        </div>
        <wFullTaskCard v-for="task in tasks_to_show" :key="task.id" :task="task" :list_categories="list_category" @taskDeleted="suppCard" @taskModified="modifTask"/>
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
import CategoryDataService from '@/services/CategoryDataService'

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
      list_category: [],
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

    CategoryDataService.getAllByUser()
      .then(response => {
        this.list_category = response.data
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
    suppCard (task) {
      this.$emit('taskDeleted', task)
    },
    modifTask (task) {
      this.$emit('taskModified', task)
    }
  }
}
</script>
