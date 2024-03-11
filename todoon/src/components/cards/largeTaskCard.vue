<template>
    <div class="card h-48 w-96 p-4">
        <div class="flex justify-start w-full">
                <h1 class="flex text-pinky text-2xl mr-2">{{ task.taskname }}</h1>
        </div>
        <div class="flex w-full">
            <div class="flex flex-col flex-grow items-start">
              <div class="h-30"></div>
                <div class="align-start" v-if="!timeUp">
                    <span class="countdown font-mono text-xl">
                        <span ref="days"></span>D-
                        <span ref="hours"></span>:
                        <span ref="minutes"></span>:
                        <span ref="seconds"></span>
                    </span>
                </div>
                <div class="align-center" v-else>Time' sUp !</div>
                <div class="mt-2 h-1/2 max-w-56 break-words">
                    <div v-if="task.taskdescription" id="description">
                        <div class="text-sm font-normal">{{ task.taskdescription }}</div>
                    </div>
                    <div v-else>
                        <div class="text-sm font-normal">Aucune description</div>
                    </div>
                </div>
                <button class="edit-button">
                    <svg class="edit-svgIcon" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                </button>
            </div>
            <div class="flex">
                <ul class="menu justify-center space-x-1 bg-gray-300 rounded-box">
                    <li id="status0" class="hover:bg-[#ff0000] hover:rounded-lg">
                        <a @click="toggleActive($event)" class="items" :class="{ 'todo': (status === 0) }">
                        <img src="../../assets/img/toDoPasteque.png" />
                        </a>
                    </li>
                    <li id="status1">
                        <a @click="toggleActive($event)" class="items" :class="{ 'doing': (status === 1) }">
                        <img src="../../assets/img/doingPasteque.png" />
                        </a>
                    </li>
                    <li id="status2">
                        <a @click="toggleActive($event)" class="items" :class="{ 'done': (status === 2) }">
                        <img src="../../assets/img/donePasteque.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import TasksDataService from '@/TasksDataService'
export default {
  name: 'smallTaskCard',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      mutableTask: null,
      status: this.task.taskstatus,
      timeUp: false,
      timeLoaded: false,
      itemsHovered: false
    }
  },
  mounted () {
    this.mutableTask = { ...this.task }
    const dateString = this.mutableTask.taskenddate // format "year-month-day:hour:min:sec"
    console.log('dateString', dateString)
    const dateObject = Date.parse(dateString)
    console.log('dateObject', dateObject)
    this.updateCountdown(dateObject)
  },
  beforeUnmount () {
    clearInterval(this.countdownInterval)
  },
  methods: {
    updateCountdown (targetDate) {
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
      TasksDataService.update(this.mutableTask.id, this.mutableTask)
        .then(response => {
          console.log(response.data)
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
    }
  }
}
</script>
<style>
.todo {
  background: red;
}

.doing {
  background: orange;
}

.done {
  background: green;
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
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
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
  background-color: rgb(255, 69, 69);
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
</style>
