<template>
    <div class="flex flex-col min-h-screen">
      <HeaderHomeComponent @newcardadded="addNewCard" @search="onSearch"/>
      <div class="flex-grow">
        <div class="flex" id="homeFlex">
          <aside class="w-1/5" id="aside">
            <MenuHomeComponent/>
          </aside>
          <main class="w-4/5 pl-5" id="homeView" v-if="searchValue.length === 0">
            <div class="flex" id="accueilFilter">
              <div class="flex-grow text-4xl font-black">Home for the project : {{ this.project.name }}</div>
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
            <appleCarousel :tasks="tasks" :list_category="list_category" @taskDeleted="deleteTask" @taskModified="modifTask"/>
            <div class="flex-grow text-4xl font-black">Next Week</div>
              <slideCarousel :tasks="tasks" @taskDeleted="deleteTask" @taskModified="modifTask"/>
          </main>
          <main v-else>
            <div class="flex" id="accueilFilter">
              <div class="flex-grow text-4xl font-black">Search results</div>
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
import appleCarousel from '../components/carousel/appleCarousel.vue'
import MainFooter from '../components/MainFooter.vue'
import TasksDataService from '../services/TasksDataService'
import slideCarousel from '@/components/carousel/slideCarousel.vue'
import wFullTaskCard from '@/components/cards/wFullTaskCard.vue'
import CategoryDataService from '@/services/CategoryDataService'
import ProjectDataService from '@/services/ProjectDataService'
import UsersDataService from '@/services/UsersDataService'
import ProjectUsersDataService from '@/services/ProjectUsersDataService'

export default {
  components: {
    MenuHomeComponent,
    HeaderHomeComponent,
    appleCarousel,
    MainFooter,
    slideCarousel,
    wFullTaskCard
  },
  data () {
    return {
      tasks: [],
      tasks_to_show: [],
      searchValue: '',
      list_category: [],
      user: null,
      list_collaborators: [],
      project: {
        name: '',
        description: '',
        icon: ''
      }
    }
  },
  created () {
    // Verify if the user is a collaborator of the project
    UsersDataService.getUser()
      .then(response => {
        this.user = response.data
        ProjectUsersDataService.getAllByProject(this.$route.params.id)
          .then(response => {
            this.list_collaborators = response.data
            if (!this.list_collaborators.includes(this.user.id)) {
              this.$router.push('/home')
            }
          })
          .catch(e => {
            this.$router.push('/home') // Redirect to home if the user is not logged in
          })
      })
      .catch(e => {
        this.$router.push('/home') // Redirect to home if the user is not logged in
      })

    // Fetch the project data
    ProjectDataService.findOne(this.$route.params.id)
      .then(response => {
        this.project = response.data
      })
      .catch(e => {
        console.log(e)
      })

    // Retrieve tasks associated with the project
    TasksDataService.getAllByProject(this.$route.params.id)
      .then(response => {
        console.log('response:', response)
        this.tasks = response.data
        console.log(response.data)
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

    ProjectDataService.getAllByUser()
      .then(response => {
        console.log('response:', response)
        this.projects = response.data
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    onSearch (value) {
      this.searchValue = value
      console.log('searchValue:', this.searchValue)
      console.log(this.tasks)
      this.tasks_to_show = this.tasks.filter(task => task.taskname.toLowerCase().includes(value.toLowerCase()))
    },
    addNewCard (newCard) {
      this.tasks.push(newCard)
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
  <style>
  template {
    background-color: aqua;
  }
  @media only screen and (max-width: 500px) {
    #homeFlex {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 500px) {
    #homeView {
      margin-top: 5px;
      width: 100%;
    }
  }
  .filter-container {
    position: static;
    display: inline-block;
  }

  .filter-button {
    background-color: #ffffff00;
    color: #FF4785;
    border: none;
    cursor: pointer;
    position: static;
    display: flex;
    align-items: center;
  }

  .filter-button i {
    margin-left: 10px;
  }

  .filter-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff38;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 9999;
  }

  .filter-menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .filter-menu ul li {
    padding: 10px 20px;
    cursor: pointer;
  }

  .filter-menu ul li:hover {
    background-color: #f2f2f234;
  }
  .filter-button:focus + .filter-menu {
    display: block;
  }
  @media only screen and (max-width: 600px) {
    #accueilFilter {
      display: flex;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 500px) {
    #aside {
      width: 100%;
    }
  }
  </style>
