<template>
  <div class="flex-col justify-center text-center mt-5 space-y-10">
    <nav id="menu-vertical" v-if="windowWidth >= 550">
      <ul class="m-auto menu menu-vertical bg-gray-300 w-4/5 rounded-box text-xl" id="menu-vertical-liste">
        <li>
          <router-link to="/home">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="red">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <div class="menuTitle">home</div>
          </router-link>
        </li>
        <li>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="menuTitle">Today</div>
          </a>
        </li>
        <li>
          <router-link to="/home/todo">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <div class="menuTitle">To Do</div>
          </router-link>
        </li>
        <li>
          <router-link to="/home/doing">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <div class="menuTitle">Doing</div>
          </router-link>
        </li>
        <li>
          <router-link to="/home/done">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <div class="menuTitle">Done</div>
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- Menu Horizontal -->
    <nav id="menu-horizontal" v-else-if="windowWidth <= 550">
      <ul class="flex-none align-items-center m-auto menu menu-horizontal bg-gray-300 w-4/5 rounded-box text-xl">
        <li>
          <router-link to="/home">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="red">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </router-link>
        </li>
        <li>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </li>
        <li>
          <router-link to="/home/todo">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link to="/home/doing">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link to="/home/done">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </router-link>
        </li>
      </ul>
    </nav>
    <ul class="m-auto menu bg-gray-300 w-56 rounded-box mt-5">
      <li><a class="border-pinky bg-pinky border-2 radius-4xl hover:bg-gray-300 transition duration-200"
          onclick="add_category_modal.showModal()">Add Category</a></li>
      <li>
        <details open>
          <summary>Categories</summary>
          <ul>
            <li class="flex-item" v-for="category in list_category" :key="category.id" :id="category.id">
              <div class="flex-container">
                <img :src="require(`@/assets/img/imgcategory/${category.icon}.png`)" class="flex-item"
                  style="width: 20px; height: 20px; border-radius: 0%;">
                <a class="flex-item">{{ category.name }}</a>
              </div>
            </li>
          </ul>
        </details>
      </li>
    </ul>
    <ul class="m-auto menu bg-gray-300 w-56 rounded-box mt-5">
      <li><a class="border-pinky bg-pinky border-2 radius-4xl hover:bg-gray-300 transition duration-200"
          @click="openCreateProjectModal()">Add Project</a></li>
      <li>
        <details open>
          <summary>Projects</summary>
          <ul>
            <li v-for="project in list_projects" :key="project.id" :id="project.id"
              @dblclick="openEditProjectModal(project.id)">
              <router-link :to="`/project/${project.id}`" class="flex-item" style="display: flex; align-items: center;">
                <img :src="require(`@/assets/img/imgcategory/${project.icon}.png`)"
                  style="width: 20px; height: 20px; border-radius: 0%; margin-right: 10px;" alt="">
                <span class="">{{ project.name }}</span>
              </router-link>
              <a @click="openEditProjectModal(project.id)" class="flex-item flex-end hover:none absolute left-32" style="margin-left: auto;">
                <img src="@/assets/img/pencil.png" style="width: 20px; height: 20px; border-radius: 0%;">
              </a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
    <!-- Pop up pour créer une categorie -->
    <dialog id="add_category_modal" class="modal">
      <form ref="formcategory" @submit.prevent="addCategory">
        <div class="modal-box w-11/12 max-w-5xl">
          <div class="flex justify-center">
            <h3 class="font-bold text-xl">Create A <span class="text-pinky text-2xl">Category !</span></h3>
          </div>
          <div class="flex space-x-5 mt-5">
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text text-xl">Name Category</span>
              </div>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" id='name'
                v-model="this.newcategory.name" required />
            </label>
          </div>
          <label class="form-control w-full mt-5">
            <div class="label">
              <span class="label-text text-xl">Icons</span>
            </div>
            <div class="flex flex-wrap h-48 overflow-y-auto" id="scrollbaricon">
              <ul class="flex flex-col w-1/5 p-2" v-for="image in this.icons" :key="image">
                <li>
                  <a @click="getActive(image)">
                    <img :src="require(`@/assets/img/imgcategory/${image}.png`)" class="category-image" :id="image">
                  </a>
                </li>
              </ul>
            </div>
          </label>
          <div class="flex justify-end mt-5 space-x-5">
            <form method="dialog" ref="closeform">
              <button class="btn" id="closebutton">Close</button>
            </form>
            <button type="submit" class="btn bg-secondary hover:bg-secondary">Add Category</button>
          </div>
        </div>
      </form>
    </dialog>
    <!-- Pop up pour créer un project -->
    <dialog id="add_project_modal" class="modal">
      <!-- Menu pour changer view dans creation project -->
      <ul class="menu bg-base-200 lg:menu-horizontal rounded-box" id="menu-modal-project">
        <li>
          <a @click="changevue(0)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Create
          </a>
        </li>
        <!-- <li>
                  <a @click="changevue(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tasks
                    <span class="badge badge-sm badge-warning">NEW</span>
                  </a>
                </li> -->
        <li>
          <a @click="changevue(1)">
            Collaborators
          </a>
        </li>
      </ul>
      <CollaboratorsVueProject v-if="this.projectvuetoshow == 1" :status_modal="'create'"
        :list_collaborators="this.list_collaborators" @addProject="addProject" @addCollaborator="addCollaborator"
        @removeCollaborator="removeCollaborator" />
      <TasksVueProject v-else-if="this.projectvuetoshow == 2" @addProject="addProject" />
      <CreateVueProject v-else :icons="this.icons" :status_modal="'create'" :new_project="project_selected"
        @addProject="addProject" @nameTyping="setNameProject" @descTyping="setDescription"
        @setIconSelected="setIconSelected" />
    </dialog>
    <!-- Pop up de confirmation du projet crée -->
    <dialog id="project-created-modal-animation" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">The project is correctly added</h3>
        <div class="modal-action flex justify-center">
          <form method="dialog">
            <div class="success-checkmark">
              <div class="check-icon" ref="checkIcon">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </dialog>
    <!-- Pop up pour edit un projet -->
    <dialog id="edit_project_modal" class="modal">
      <!-- Menu pour changer view dans creation project -->
      <ul class="menu bg-base-200 lg:menu-horizontal rounded-box" id="menu-modal-project">
        <li>
          <a @click="changevue(0)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Create
          </a>
        </li>
        <!-- <li>
          <a @click="changevue(1)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tasks
            <span class="badge badge-sm badge-warning">NEW</span>
          </a>
        </li> -->
        <li>
          <a @click="changevue(1)">
            Collaborators
          </a>
        </li>
      </ul>
      <CollaboratorsVueProject v-if="this.projectvuetoshow == 1" :status_modal="'edit'"
        :list_collaborators="this.list_collaborators" @addProject="addProject" @addCollaborator="addCollaborator"
        @removeCollaborator="removeCollaborator" />
      <TasksVueProject v-else-if="this.projectvuetoshow == 2" @deleteTask="deleteProject(this.project_selected.id)" />
      <CreateVueProject v-else :icons="this.icons" :status_modal="'edit'" :new_project="project_selected"
        @deleteTask="deleteProject(this.project_selected.id)" @nameTyping="setNameProject" @descTyping="setDescription"
        @setIconSelected="setIconSelected" />
    </dialog>
  </div>
</template>
<script>
import CategoryDataService from '@/services/CategoryDataService'
import CreateVueProject from '@/components/viewscreateproject/CreateVueProject'
import TasksVueProject from '@/components/viewscreateproject/TasksVueProject'
import CollaboratorsVueProject from '@/components/viewscreateproject/CollaboratorsVueProject'
import ProjectDataService from '@/services/ProjectDataService'
import UsersDataService from '@/services/UsersDataService'
import ProjectUsersDataService from '@/services/ProjectUsersDataService'

export default {
  name: 'MenuHomeComponent',
  components: {
    CreateVueProject,
    TasksVueProject,
    CollaboratorsVueProject
  },
  props: {
  },
  data () {
    return {
      newcategory: {
        name: ''
      },
      icon_selected: 'icon-barcelona',
      list_category: [],
      list_projects: [],
      windowWidth: 0,
      icons: [],
      projectvuetoshow: 0,
      project_selected: {
        name: '',
        description: '',
        icon: 'icon-barcelona'
      },
      list_collaborators: [],
      user: null
    }
  },
  mounted () {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.handleResize)

    const images = require.context('../../assets/img/imgcategory', false, /\.png$/)
    images.keys().forEach(image => {
      console.log(image)
      this.icons.push(image.replace('./', '').replace('.png', ''))
    })
    console.log('icons', this.icons)

    // Récupère les catégories
    CategoryDataService.getAllByUser()
      .then(response => {
        this.list_category = response.data
        console.log('category', this.list_category)
      })
      .catch(e => {
        console.log(e)
      })

    // Récupère les projets
    ProjectDataService.getAllByUser()
      .then(response => {
        this.list_projects = response.data
        console.log('project', this.list_projects)
      })
      .catch(e => {
        console.log(e)
      })

    UsersDataService.getUser()
      .then(response => {
        this.user = response.data
      })
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    openCreateProjectModal () {
      const modal = document.querySelector('#add_project_modal')
      this.project_selected = {
        name: '',
        description: '',
        icon: 'icon-barcelona'
      }
      const user = this.user
      user.role = 'Administrateur'
      user.date = new Date().toISOString().split('T')[0]
      this.list_collaborators = []
      this.list_collaborators.push(user)

      modal.showModal()
    },
    openEditProjectModal (id) {
      this.list_collaborators = []
      const modal = document.querySelector('#edit_project_modal')
      modal.showModal()
      const project = this.list_projects.find(project => project.id === id)
      if (project) {
        this.project_selected = project
        ProjectUsersDataService.getAllByProject(id)
          .then(response => {
            console.log('response', response)
            for (const projectuser of response.data) {
              console.log(projectuser)
              UsersDataService.findOne(projectuser.user_id)
                .then(response => {
                  const collaborator = {
                    avatar: response.data.avatar,
                    birthday: response.data.birthday,
                    date: projectuser.createdAt,
                    email: response.data.email,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    id: response.data.id,
                    role: projectuser.role
                  }
                  this.list_collaborators.push(collaborator)
                })
            }
            console.log('list_collaborators', this.list_collaborators)
          })
          .catch(e => {
            console.log(e)
          })
        console.log('project_selected', this.project_selected)
      } else {
        console.log('Project not found')
      }
    },
    addCategory () {
      const newcategory = {
        name: this.newcategory.name,
        icon: this.icon_selected
      }
      CategoryDataService.create(newcategory)
        .then(response => {
          // Animation réussite
          newcategory.id = response.data.id
          this.list_category.push(newcategory)
        })
        .catch(e => {
          console.log(e)
        })
    },
    addProject () {
      if (this.project_selected.name === '') {
        alert('Name is required')
        return
      }
      const modal = document.querySelector('#project-created-modal-animation')
      ProjectDataService.create(this.project_selected)
        .then(response => {
          const modalformcreateproject = document.querySelector('#add_project_modal')
          modalformcreateproject.close()
          modal.showModal()
          setTimeout(() => {
            this.restartAnimation()
          }, 600)
          setTimeout(function () {
            modal.close()
          }, 2000)
          this.project_selected.id = response.data.id
          this.list_projects.push(this.project_selected)
          const user = this.user
          user.role = 'Administrateur'
          user.date = new Date().toISOString().split('T')[0]
          ProjectUsersDataService.createCollaborator(response.data.id, this.user)
            .then(response => {
              this.list_collaborators.push(this.user)
            })
            .catch(error => {
              console.log('Error adding collaborator:', error)
            })
          this.project_selected = {
            name: '',
            description: '',
            icon: 'icon-barcelona'
          }
          this.list_collaborators = []
        })
        .catch(error => {
          console.log('Error adding project:', error)
        })
    },
    deleteProject (id) {
      console.log(id)
      ProjectDataService.delete(id)
        .then(response => {
          this.list_projects = this.list_projects.filter(project => project.id !== id)
        })
        .catch(error => {
          console.log('Error deleting project:', error)
        })
    },
    restartAnimation () {
      this.$refs.checkIcon.style.display = 'none'
      setTimeout(() => {
        this.$refs.checkIcon.style.display = 'block'
      }, 10)
    },
    getActive (image) {
      this.icon_selected = image
      const images = document.querySelectorAll('.category-image')
      images.forEach((img) => {
        img.classList.remove('active')
      })
      const img = document.querySelector('#' + image)
      img.classList.add('active')
    },
    handleResize () {
      this.windowWidth = window.innerWidth
    },
    changevue (vuetoshow) {
      console.log(vuetoshow)
      this.projectvuetoshow = vuetoshow
      const ul = document.querySelector('#menu-modal-project')
      const li = ul.querySelectorAll('li')
      console.log('li', li)
      li.forEach((li) => {
        li.classList.remove('navprojectactive')
      })

      li[vuetoshow].classList.add('navprojectactive')
    },
    setNameProject (name) {
      this.project_selected.name = name
      console.log('project_selected', this.project_selected)
    },
    setDescription (description) {
      this.project_selected.description = description
      console.log('project_selected', this.project_selected)
    },
    setIconSelected (icon) {
      console.log('icon', icon)
      this.project_selected.icon = icon
      console.log('project_selected', this.project_selected)
    },
    addCollaborator (searchValue) {
      console.log('searchValue', searchValue)
      UsersDataService.searchByEmail(searchValue)
        .then(response => {
          const user = response.data
          user.role = 'Collaborator'
          user.date = new Date().toISOString().split('T')[0]
          if (this.list_collaborators.some(collaborator => collaborator.id === user.id)) {
            alert('This user is already in the list')
          } else {
            this.list_collaborators.push(user)
            ProjectUsersDataService.createCollaborator(this.project_selected.id, user)
              .then(response => {
                console.log('response', response)
              })
              .catch(error => {
                console.log('Error adding collaborator:', error)
              })
          }
          if (response.status === 204 || response.status === 404) {
            alert('No user found')
          }
        })
        .catch(error => {
          console.log('Error searching users:', error)
        })
    },
    removeCollaborator (collaborator) {
      if (collaborator !== this.user.id) {
        this.list_collaborators = this.list_collaborators.filter(collab => collab.id !== collaborator)
      }
    }

  }
}
</script>
<style>
@media only screen and (max-width: 860px) {
  .menuTitle {
    display: none;
  }

  #menu-vertical-liste {
    width: 5rem;
  }
}

@media only screen and (max-width: 550px) {
  .menuTitle {
    display: none;
  }

  #menu-horizontal-liste {
    width: 100%;
  }
}

.category-image {
  width: 50px;
  height: 50px;
  border-radius: 0%;
  cursor: pointer;
}

.active {
  scale: 1.1;
  border: 1px solid black;
  border-radius: 20%;
  transition: all 0.3s ease-out;
}

#scrollbaricon::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#scrollbaricon::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

#scrollbaricon::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #555;
}

#menu-modal-project {
  position: absolute;
  top: 1vw;
}
</style>

<style scoped>
.navprojectactive {
  border-bottom: 1px solid #f00;
}
</style>
