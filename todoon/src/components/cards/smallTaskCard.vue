<template>
    <div class="card">
        <div class="flex flex-col">
            <h1 class="text-pinky text-2xl">{{ task.taskname }}</h1>
            <div class="grid grid-flow-col justify-center gap-5 text-center auto-cols-max mt-4">
                <span class="countdown font-mono text-xl">
                    <span ref="days"></span>:
                    <span ref="hours"></span>:
                    <span ref="minutes"></span>:
                    <span ref="seconds"></span>
                </span>
            </div>
            <div class="w-full h-1/2 flex items-center justify-center text-center bg-gray-200 p-2">
                <p>{{ task.taskdescription }}</p>
            </div>
            <ul class="menu menu-horizontal justify-center space-x-1 bg-gray-300 rounded-box">
                <li id="status0">
                    <a @click="toggleActive($event)" :class="{ 'todo': this.status === 0 }">
                    <img src="../../assets/img/toDoPasteque.png" />
                    </a>
                </li>
                <li id="status1">
                    <a @click="toggleActive($event)" :class="{ 'doing': this.status === 1 }">
                    <img src="../../assets/img/doingPasteque.png" />
                    </a>
                </li>
                <li id="status2">
                    <a @click="toggleActive($event)" :class="{ 'done': this.status === 2 }">
                    <img src="../../assets/img/donePasteque.png" alt="">
                    </a>
                </li>
            </ul>
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
  mounted () {
    this.mutableTask = { ...this.task }// Create a mutable copy of the task object
    const dateString = this.task.taskenddate // format "jour:heure:min:sec"
    const dateParts = dateString.split(':')
    const day = dateParts[0].split('-')[0]
    const month = dateParts[0].split('-')[1] - 1// les mois en JavaScript sont indexés à partir de 0
    const year = dateParts[0].split('-')[2]
    const hour = dateParts[1]
    const minute = dateParts[2]
    const second = dateParts[3]
    const dateObject = new Date(year, month, day, hour, minute, second)
    // const today = new Date()
    // console.log(today) // Wed Mar 29 2023 14:30:00 GMT+0200 (heure d’été d’Europe centrale)
    // console.log(dateObject) // Wed Mar 29 2023 14:30:00 GMT+0200 (heure d’été d’Europe centrale)
    // console.log('smallTaskCard mounted')
    // console.log(this.targetDate)
    this.updateCountdown(dateObject)
    // console.log('smallTaskCard updated')
    this.intervalId = setInterval(() => this.updateCountdown(dateObject), 1000)
  },
  beforeUnmount () {
    clearInterval(this.intervalId)
  },
  data () {
    return {
      emits: ['delete-item'],
      mutableTask: null,
      status: this.task.taskstatus
    }
  },
  methods: {
    emitDeleteEvent (taskId) {
      this.$emit('delete-item', taskId)
    },
    updateCountdown (targetDate) {
      const currentDate = new Date()
      const diffMs = targetDate - currentDate
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
      const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
      const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000)

      this.$refs.days.style.setProperty('--value', diffDays)
      this.$refs.hours.style.setProperty('--value', diffHours)
      this.$refs.minutes.style.setProperty('--value', diffMinutes)
      this.$refs.seconds.style.setProperty('--value', diffSeconds)
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
          console.log(this.task.id)
          if (newstatus !== this.task.taskstatus) {
            console.log('no change')
            this.emitDeleteEvent(this.task.id)
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

.card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
</style>
@/services/TasksDataService