<template>
  <form @submit.prevent="addTask" ref="form">
    <!-- You can open the modal using ID.showModal() method -->
    <button class="mt-4 group cursor-pointer outline-none hover:rotate-90 duration-300 px-4 py-3" onclick="my_modal_4.showModal()" title="Add New">
      <svg
        class="stroke-pinky fill-none group-hover:fill-pinky-100 group-active:stroke-pink-300 group-active:fill-pink-500 group-active:duration-0 duration-300"
        viewBox="0 0 24 24"
        height="50px"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-width="1.5"
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        ></path>
        <path stroke-width="1.5" d="M8 12H16"></path>
        <path stroke-width="1.5" d="M12 16V8"></path>
      </svg>
    </button>
    <!-- Pop Up pour créer une tâche -->
    <dialog id="my_modal_4" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
          <div class="flex justify-center">
            <h3 class="font-bold text-xl">Create A <span class="text-pinky text-2xl">Task !</span></h3>
          </div>
          <div class="flex space-x-5 mt-5">
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text text-xl">Name Task</span>
              </div>
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" id = 'name' v-model="task.taskname" required/>
            </label>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text text-xl">Date Task</span>
              </div>
              <input type="datetime-local" placeholder="Type here" class="input input-bordered w-full max-w-xs" id='date' v-model="task.taskenddate"/>
            </label>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text text-xl">Category</span>
              </div>
              <select class="select select-bordered w-full max-w-xs" v-model="task.category">
                <option disabled selected value="">
                  {{ list_categories.length > 0 ? 'Select a category' : 'You didn\'t have any category' }}
                </option>
                <option v-for="category in list_categories" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
            </label>
          </div>
          <label class="form-control w-full mt-5">
            <div class="label">
              <span class="label-text text-xl">Priority Level</span>
            </div>
            <input type="range" min="0" max="4" value="2" class="range" v-model="task.priority"/>
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
            <textarea class="textarea textarea-bordered resize-none" placeholder="Description" id='description' v-model="task.taskdescription"></textarea>
          </label>
          <div class="flex justify-end mt-5 space-x-5">
            <form method="dialog" ref="closeform">
              <button class="btn" id="closebutton">Close</button>
            </form>
            <button type="submit" class="btn bg-secondary hover:bg-secondary">Add Task</button>
          </div>
      </div>
        <button>close</button>
      </dialog>
  </form>
  <!-- Pop up pour dire que la tâche est bien ajoutée -->
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">The task is correctly added</h3>
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
</template>

<style>
button {
  position: relative;
  bottom: 10px;
}
</style>
<script>
import TasksDataService from '../../services/TasksDataService'
import CategoryDataService from '@/services/CategoryDataService'

export default {
  name: 'AddTaskComponent',
  props: {
  },
  data () {
    return {
      task: {
        taskname: '',
        taskdescription: '',
        taskstatus: 0,
        taskenddate: '',
        priority: -1,
        category: ''
      },
      list_categories: []
    }
  },
  mounted () {
    CategoryDataService.getAll()
      .then(response => {
        this.list_categories = response.data
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    addTask () {
      // format the input (temp )
      if (this.task.taskenddate !== '') {
        this.task.taskenddate = new Date(this.task.taskenddate).toISOString()
      } else {
        this.task.taskenddate = ''
      }
      const modal = document.querySelector('#my_modal_1')
      TasksDataService.create(this.task)
        .then(response => {
          this.$refs.form.reset()
          this.$refs.closeform.querySelector('#closebutton').click()
          modal.showModal()
          setTimeout(() => {
            this.restartAnimation()
          }, 600)
          setTimeout(function () {
            modal.close()
          }, 2000)
          setTimeout(function () {
            window.location.reload()
          }, 2000)
        })
        .catch(e => {
          console.log(e)
        })
    },
    restartAnimation () {
      this.$refs.checkIcon.style.display = 'none'
      setTimeout(() => {
        this.$refs.checkIcon.style.display = 'block'
      }, 10)
    }
  }
}
</script>
<style>
.success-checkmark {
  width: 80px;
  height: 115px;
  margin: 0 auto;

  .check-icon {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid #4caf50;

    &::before {
      top: 3px;
      left: -2px;
      width: 30px;
      transform-origin: 100% 50%;
      border-radius: 100px 0 0 100px;
    }

    &::after {
      top: 0;
      left: 30px;
      width: 60px;
      transform-origin: 0 50%;
      border-radius: 0 100px 100px 0;
      animation: rotate-circle 4.25s ease-in;
    }

    &::before,
    &::after {
      content: "";
      height: 100px;
      position: absolute;
      background: #ffffff00;
      transform: rotate(-45deg);
    }

    .icon-line {
      height: 5px;
      background-color: #4caf50;
      display: block;
      border-radius: 2px;
      position: absolute;
      z-index: 10;

      &.line-tip {
        top: 46px;
        left: 14px;
        width: 25px;
        transform: rotate(45deg);
        animation: icon-line-tip 0.75s;
      }

      &.line-long {
        top: 38px;
        right: 8px;
        width: 47px;
        transform: rotate(-45deg);
        animation: icon-line-long 0.75s;
      }
    }

    .icon-circle {
      top: -4px;
      left: -4px;
      z-index: 10;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      box-sizing: content-box;
      border: 4px solid rgba(76, 175, 80, 0.5);
    }

    .icon-fix {
      top: 8px;
      width: 5px;
      left: 26px;
      z-index: 1;
      height: 85px;
      position: absolute;
      transform: rotate(-45deg);
      background-color: #ffffff00;
    }
  }
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}
</style>
