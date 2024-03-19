<template>
    <div class="card h-48 w-96 p-4">
        <div class="flex justify-start w-full items-center space-x-2">
          <priorityToolTips :priority="this.newTask.priority"/>
          <h1 class="flex text-pinky text-2xl mr-2">{{ task.taskname }}</h1>
        </div>
        <div class="flex w-full">
          <div class="flex flex-col flex-grow items-start">
            <div class="h-30"></div>
              <div class="align-start" v-if="!timeUp && this.task.taskenddate != ''">
                <span class="countdown font-mono text-xl">
                  <span ref="days"></span>D-
                  <span ref="hours"></span>:
                  <span ref="minutes"></span>:
                  <span ref="seconds"></span>
                </span>
              </div>
              <div class="align-start" v-else-if="timeUp">
                <span>
                  Time's Up!
                </span>
              </div>
              <div class="align-center" v-else>
                <span>
                  No Deadline !
                </span>
              </div>
              <div class="mt-2 h-1/2 max-w-56 break-words">
                  <div v-if="task.taskdescription" id="description">
                      <div class="text-sm font-normal">{{ task.taskdescription }}</div>
                  </div>
                  <div v-else>
                      <div class="text-sm font-normal">Aucune description</div>
                  </div>
              </div>
              <div class="flex space-x-2">
                <button class="edit-button" @click="openModalEdit()">
                    <svg class="edit-svgIcon" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                </button>
                <button class="delete-button" @click="deleteModalEdit()">
                    <svg class="delete-svgIcon" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                </button>
              </div>
            </div>
            <div class="flex">
                <ul class="menu justify-center bg-gray-300 rounded-box">
                    <li id="status0" class="hover:bg-[#ff0000] hover:rounded-lg duration-200">
                        <a @click="toggleActive($event)" class="items" :id="'itemsMenu' + task.id" :class="{ 'todo': (status === 0 && itemsHovered === false), 'todoWaiting': (status === 0 && itemsHovered === true) }">
                        <img src="../../assets/img/toDoPasteque.png" style="width: 25px; height: 25px;"/>
                        </a>
                    </li>
                    <li id="status1" class="hover:bg-[#ffa500] hover:rounded-lg duration-200">
                        <a @click="toggleActive($event)" class="items" :id="'itemsMenu' + task.id" :class="{ 'doing': (status === 1  && itemsHovered === false), 'doingWaiting': (status === 1 && itemsHovered === true) }">
                        <img src="../../assets/img/doingPasteque.png" style="width: 25px; height: 25px;"/>
                        </a>
                    </li>
                    <li id="status2" class="hover:bg-[#008000] hover:rounded-lg duration-200">
                        <a @click="toggleActive($event)" class="items" :id="'itemsMenu' + task.id" :class="{ 'done': (status === 2  && itemsHovered === false), 'doneWaiting': (status === 2 && itemsHovered === true) }">
                        <img src="../../assets/img/donePasteque.png" alt="" style="width: 25px; height: 25px;">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!--Pop up modifié-->
    <dialog :id="'my_modal_5_' + task.id" class="modal">
      <div class="modal-box w-4/5 max-w-6xl">
        <div class="flex justify-center">
          <h3 class="font-bold text-xl">Modify The <span class="text-pinky text-2xl">Task !</span></h3>
        </div>
        <div class="flex space-x-5 mt-5">
          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text text-xl">Name Task</span>
            </div>
            <input type="text" class="input input-bordered w-full max-w-xs" id = 'name' v-model="newTask.taskname" required/>
          </label>
          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text text-xl">Date Task</span>
            </div>
            <input type="datetime-local" placeholder="Type here" class="input input-bordered w-full max-w-xs" id='date' v-model="newTask.taskenddate" required/>
          </label>
          <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text text-xl">Category</span>
              </div>
              <select class="select select-bordered w-full max-w-xs" v-model="newTask.category">
                <option disabled selected value="">
                  {{ this.list_categories.length > 0 ? 'Select a category' : 'You didn\'t have any category' }}
                </option>
                <option v-for="category in list_categories" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
            </label>
        </div>
        <label class="form-control w-full mt-5">
            <div class="label">
              <span class="label-text text-xl">Priority Level</span>
            </div>
            <input type="range" min="0" max="4" value="2" v-model="newTask.priority" :style="{ accentColor: priorityColors[newTask.priority] }" class="bg-white"/>
            <div class="w-full flex justify-between text-xs px-2">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
          </label>
        <label class="form-control w-full mt-5">
          <div class="label">
            <span class="label-text text-xl">Task Description</span>
          </div>
          <textarea class="textarea textarea-bordered resize-none" value ="je suis une description" id='description' v-model="newTask.taskdescription"></textarea>
        </label>
        <div class="modal-action">
          <form method="dialog" ref="modal-backdrop">
              <button class="btn" @click="cancelFunction()">Cancel</button>
          </form>
          <button type="submit" class="btn bg-secondary hover:bg-secondary" @click="modifyTask(newTask)">Modify</button>
        </div>
      </div>
    </dialog>

    <!-- Pop up confirmation suppression tâche -->
    <dialog :id="'deleteModal_' + task.id" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Are You Sure ?</h3>
        <p class="py-4">Are you sure you want to delete this Task ?<br>This action cannot be undone</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn mr-2">Cancel</button>
            <button class="btn btn-error" @click="deleteTask()">Delete</button>
          </form>
        </div>
      </div>
    </dialog>
</template>
<script>
import TasksDataService from '@/services/TasksDataService'
import priorityToolTips from '../tooltips/priorityToolTips.vue'
export default {
  name: 'smallTaskCard',
  props: {
    task: {
      type: Object,
      required: true
    },
    list_categories: Array
  },
  components: {
    priorityToolTips
  },
  data () {
    return {
      mutableTask: null,
      status: this.task.taskstatus,
      timeUp: false,
      timeLoaded: false,
      itemsHovered: false,
      newTask: {
        taskname: '',
        taskdescription: '',
        taskstatus: 0,
        taskenddate: '',
        priority: 0,
        category_id: null
      },
      emits: ['newcardadded'],
      priorityColors: {
        '-1': '#198038',
        0: '#198038',
        1: '#f1c21b',
        2: '#ff832b',
        3: '#da1e28',
        4: '#6b306c'
      }
    }
  },
  mounted () {
    console.log('category:', this.list_categories)
    this.newTask = { ...this.task }
    this.mutableTask = { ...this.task }
    if (this.task.taskenddate !== '') {
      const isoDate = new Date(this.newTask.taskenddate)
      this.newTask.taskenddate = isoDate.toISOString().slice(0, 16)
      this.itemsIsHovered()
      const dateString = this.mutableTask.taskenddate // format "year-month-day:hour:min:sec"
      const dateObject = Date.parse(dateString)
      this.updateCountdown(dateObject)
    }
  },
  beforeUnmount () {
    clearInterval(this.countdownInterval)
  },
  methods: {
    updateCountdown (targetDate) {
      this.countdownInterval = setInterval(() => {
        const currentDate = new Date()
        const diffMs = targetDate - currentDate
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
        const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
        const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000)
        if (diffMs <= 0 && diffDays <= 0 && diffHours <= 0 && diffMinutes <= 0 && diffSeconds <= 0) {
          this.timeUp = true
          clearInterval(this.countdownInterval)
        } else {
          this.timeLoaded = true
          this.$refs.days.style.setProperty('--value', diffDays)
          this.$refs.hours.style.setProperty('--value', diffHours)
          this.$refs.minutes.style.setProperty('--value', diffMinutes)
          this.$refs.seconds.style.setProperty('--value', diffSeconds)
        }
      }, 1000)
    },
    toggleActive (event) {
      const menuItems = document.querySelectorAll('.menu li')
      menuItems.forEach(item => item.classList.remove('active'))

      const parentLi = event.target.closest('li')
      for (const a of parentLi.querySelectorAll('a')) {
        a.classList.remove('todo', 'doing', 'done')
      }
      const newstatus = parseInt(parentLi.id[parentLi.id.length - 1])
      this.mutableTask.taskstatus = newstatus
      console.log('newstatus:', newstatus)
      console.log('mutableTask:', this.mutableTask)
      TasksDataService.update(this.mutableTask.id, this.mutableTask)
        .then(response => {
          this.status = newstatus
          if (this.status === 0) {
            parentLi.querySelector('a').classList.add('todo')
          } else {
            if (this.status === 1) {
              parentLi.querySelector('a').classList.add('doing')
            } else {
              parentLi.querySelector('a').classList.add('done')
            }
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    itemsIsHovered () {
      const myElements = document.querySelectorAll('#itemsMenu' + this.task.id)
      myElements.forEach((element) => {
        element.addEventListener(
          'mouseenter',
          function (event) {
            this.itemsHovered = true // Utilisez this.itemsHovered à la place de itemsHovered
          }.bind(this), // Ajoutez .bind(this) pour conserver le contexte correct de "this"
          false
        )

        element.addEventListener(
          'mouseleave',
          function (event) {
            this.itemsHovered = false // Utilisez this.itemsHovered à la place de itemsHovered
          }.bind(this), // Ajoutez .bind(this) pour conserver le contexte correct de "this"
          false
        )
      })
    },
    modifyTask (newTask) {
      TasksDataService.update(this.task.id, newTask)
        .then(response => {
          const modal = document.querySelector('#my_modal_5_' + this.task.id)
          modal.close()
          this.$emit('taskModified', this.newTask)
        })
        .catch(e => {
          console.log(e)
        })
    },
    updateTaskDescription (event) {
      this.newTask.taskdescription = event.target.value
    },
    openModalEdit () {
      const modal = document.querySelector('#my_modal_5_' + this.task.id)
      modal.showModal()
    },
    deleteModalEdit () {
      const modal = document.querySelector('#deleteModal_' + this.task.id)
      modal.showModal()
    },
    deleteTask () {
      TasksDataService.delete(this.task.id)
        .then(response => {
          this.$emit('taskDeleted', this.task)
          const modal = document.querySelector('#deleteModal_' + this.task.id)
          modal.close()
        })
        .catch(e => {
          console.log(e)
        })
    },
    cancelFunction () {
      this.newTask = { ...this.task }
      const modal = document.querySelector('#my_modal_5_' + this.task.id)
      modal.close()
    }
  }
}
</script>
<style>
.todo {
  background: red;
  transition: 0.2s;
}

.todoWaiting {
  background: rgba(255, 0, 0, 0.3);
  border-width: 1px;
  border-color: rgba(255, 0, 0, 0.7);
  transition: 0.2s;
}

.doing {
  background: orange;
  transition: 0.2s;
}

.doingWaiting {
  background: rgba(255, 166, 0, 0.3);
  border-width: 1px;
  border-color: rgba(255, 166, 0, 0.7);
  transition: 0.2s;
}

.done {
  background: green;
  transition: 0.2s;
}

.doneWaiting {
  background: rgba(0, 128, 0, 0.3);
  border-width: 1px;
  border-color: rgba(0, 128, 0, 0.7);
  transition: 0.2s;
}
.menu li.active {
  background: #FF4785;
  border-radius: 15%;
  color: white;
}
.card {
  box-sizing: border-box;
  width: 210px;
  height: 350px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
}

.card:hover {
  transform: scale(1.05);
}
.edit-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
  text-decoration: none !important;
}

.edit-svgIcon {
  width: 17px;
  transition-duration: 0.3s;
}

.edit-svgIcon path {
  fill: white;
}

.edit-button:hover {
  width: 120px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: #FF4785;
  align-items: center;
}

.edit-button:hover .edit-svgIcon {
  width: 20px;
  transition-duration: 0.3s;
  transform: translateY(60%);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.edit-button::before {
  display: none;
  content: "Edit";
  color: white;
  transition-duration: 0.3s;
  font-size: 2px;
}

.edit-button:hover::before {
  display: block;
  padding-right: 10px;
  font-size: 13px;
  opacity: 1;
  transform: translateY(0px);
  transition-duration: 0.3s;
}
.edit-button:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
.delete-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
}

.delete-svgIcon {
  width: 15px;
  transition-duration: 0.3s;
}

.delete-svgIcon path {
  fill: white;
}

.delete-button:hover {
  width: 90px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: rgb(0, 0, 0);
  align-items: center;
}

.delete-button:hover .delete-svgIcon {
  width: 20px;
  transition-duration: 0.3s;
  transform: translateY(60%);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.delete-button::before {
  display: none;
  content: "Delete";
  color: white;
  transition-duration: 0.3s;
  font-size: 2px;
}

.delete-button:hover::before {
  display: block;
  padding-right: 10px;
  font-size: 13px;
  opacity: 1;
  transform: translateY(0px);
  transition-duration: 0.3s;
}
</style>
