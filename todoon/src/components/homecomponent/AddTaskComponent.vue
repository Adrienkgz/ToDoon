<template>
    <!-- You can open the modal using ID.showModal() method -->
    <button class="group cursor-pointer outline-none hover:rotate-90 duration-300 px-4 py-3" onclick="my_modal_4.showModal()" title="Add New">
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
              <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </label>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text text-xl">Date Task</span>
              </div>
              <input type="date" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </label>
            <label class="form-control w-full max-w-xs">
              <div class="label">
                <span class="label-text text-xl">Type of Task</span>
              </div>
              <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>Type of Task?</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Family</option>
                <option>Friends</option>
                <option>Home</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <label class="form-control w-full mt-5">
            <div class="label">
              <span class="label-text text-xl">Priority Level</span>
            </div>
            <input type="range" min="0" max="100" value="25" class="range" step="25" />
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
            <textarea class="textarea textarea-bordered resize-none" placeholder="Description"></textarea>
          </label>
          <div class="flex justify-end mt-5 space-x-5">
            <form method="dialog">
                    <button class="btn">Close</button>
            </form>
            <form method="dialog">
                  <button class="btn bg-secondary hover:bg-secondary">Add Task</button>
            </form>
          </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
      </dialog>
</template>

<style>
button {
  position: relative;
  bottom: 10px;
}
</style>
<script>
export default {
  name: 'AddTaskComponent',
  props: {
  },
  data () {
    return {
      tasks: [],
      newTask: {
        name: '',
        date: '',
        priority: 0,
        description: ''
      }
    }
  },
  addTask () {
    this.tasks.push(this.newTask)
    this.saveTasks()
    this.newTask = {
      name: '',
      date: '',
      priority: 0,
      description: ''
    }
  }
}
</script>
