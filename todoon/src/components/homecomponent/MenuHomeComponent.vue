<template>
    <!--Logo Part-->
    <div class="flex justify-center  items-center">
        <router-link to="/">
            <img src="../../assets/img/logo-pasteque-bg-removed.png">
        </router-link>
        <h1 class="w-2/3 text-4xl font-bold text-right px-8" style="font-size: 2vw;">ToDOON</h1>
    </div>
    <div class="flex-col justify-center text-center mt-5 space-y-10" >
        <ul class="m-auto menu menu-vertical bg-gray-300 w-56 rounded-box text-xl" id="div-parts">
            <li>
                <router-link to="/home">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="red"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                Home
                </router-link>
            </li>
            <li>
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Today
                </a>
            </li>
            <li>
                <router-link to="/home/todo">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                To Do
                </router-link>
            </li>
            <li>
                <router-link to="/home/doing">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Doing
                </router-link>
            </li>
            <li>
                <router-link to="/home/done">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Done
                </router-link>
            </li>
        </ul>
        <ul class="m-auto menu bg-gray-300 w-56 rounded-box">
            <li><a class="border-pinky bg-pinky border-2 radius-4xl hover:bg-gray-300 transition duration-200" onclick="add_category_modal.showModal()">Add Category</a></li>
            <li v-for="category in list_category" :key="category.id">
                <a>{{ category.name }}</a>
            </li>
        </ul>
        <!-- Pop up pour créer une tâche -->
            <dialog id="add_category_modal" class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
                <div class="flex justify-center">
                    <h3 class="font-bold text-xl">Create A <span class="text-pinky text-2xl">Task !</span></h3>
                </div>
                <div class="flex space-x-5 mt-5">
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="label-text text-xl">Name Task</span>
                        </div>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" id = 'name' v-model="newcategory.name" required/>
                    </label>
                </div>
                <label class="form-control w-full mt-5">
                    <div class="label">
                        <span class="label-text text-xl">Task Description</span>
                    </div>
                    <textarea class="textarea textarea-bordered resize-none" placeholder="Description" id='description' v-model="newcategory.icon"></textarea>
                </label>
                <div class="flex justify-end mt-5 space-x-5">
                    <form method="dialog" ref="closeform">
                                    <button class="btn" id="closebutton">Close</button>
                    </form>
                                <button type="submit" class="btn bg-secondary hover:bg-secondary">Add Task</button>
                </div>
        </div>
        </dialog>
    </div>
</template>

<script>
import CategoryDataService from '@/services/CategoryDataService'

export default {
  name: 'MenuHomeComponent',
  components: {
  },
  props: {
  },
  data () {
    return {
      newcategory: {
        name: '',
        icon: ''
      },
      list_category: [],
      list_project: []
    }
  },
  mounted () {
  },
  methods: {
    addCategory () {
      console.log('Add Category')
      CategoryDataService.create()
        .then(response => {
          console.log(response)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style>

</style>

<!-- BEGIN: ed8c6549bwf9
            <li>
                <details close>
                <summary>Parent</summary>
                <ul>
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                    <li>
                    <details close>
                        <summary>Parent</summary>
                        <ul>
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </details>
                    </li>
                </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
            END: ed8c6549bwf9 -->
