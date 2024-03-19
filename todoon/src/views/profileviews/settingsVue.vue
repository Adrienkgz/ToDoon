<template>
    <div class="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
        <h1 class="border-b py-6 text-4xl font-semibold">Settings</h1>
        <div class="grid grid-cols-8 pt-3 sm:grid-cols-10">
            <div class="relative my-4 w-56 sm:hidden">
            <input class="peer hidden" type="checkbox" name="select-1" id="select-1" />
            <label for="select-1" class="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-pinky peer-checked:ring">Settings </label>
            <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <ul class="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                <li class="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-pinky hover:text-white">Social</li>
                <li class="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-pinky hover:text-white">Profile</li>
                <li class="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-pinky hover:text-white">Settings</li>
            </ul>
            </div>

            <div class="col-span-2 hidden sm:block">
            <ul>
                <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-pinky hover:text-pinky" @click="changeView('social')">Social</li>
                <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-pinky hover:text-pinky" @click="changeView('profile')">Profile</li>
                <li class="mt-5 cursor-pointer border-l-2 border-l-pinky px-2 py-2 font-semibold text-pinky transition hover:border-l-pinky hover:text-pinky" @click="changeView('settings      ')">Settings</li>
            </ul>
            </div>

            <div class="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-8 shadow">
            <div class="border-b pt-4 pb-8">
                <h1 class="py-2 text-2xl font-semibold">Settings</h1>
                <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="grid border-b py-6 sm:grid-cols-2">
                <div class="">
                <h2 class="text-lg font-semibold leading-4 text-slate-700">Comments</h2>
                <p class="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
                </div>
                <div class="mt-4 flex items-center sm:justify-end">
                <div class="flex flex-col gap-3">
                    <label for="push" class="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" id="push" class="peer sr-only" checked />
                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                    </label>
                    <label for="email" class="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" id="email" class="peer sr-only" checked />
                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                    </label>
                    <label for="sms" class="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" id="sms" class="peer sr-only" />
                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                    </label>
                </div>
                </div>
            </div>

            <div class="grid border-b py-6 sm:grid-cols-2">
                <div class="">
                <h2 class="text-lg font-semibold leading-4 text-slate-700">Reminders</h2>
                <p class="font- text-slate-600">Receive reminders about your tasks.</p>
                </div>
                <div class="mt-4 flex items-center sm:justify-end">
                <div class="flex flex-col gap-3">
                    <label for="push" class="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" id="push" class="peer sr-only" />
                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                    </label>
                    <label for="email" class="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" id="email" class="peer sr-only" checked />
                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                    </label>
                    <label for="sms" class="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" id="sms" class="peer sr-only" />
                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                    </label>
                </div>
                </div>
            </div>
            <div class="grid border-b py-6 sm:grid-cols-2">
                <div class="">
                <h2 class="text-lg font-semibold leading-4 text-slate-700">Updates</h2>
                <p class="font- text-slate-600">Receive information on the latest updates.</p>
                </div>
                <div class="mt-4 flex items-center sm:justify-end">
                <div class="flex flex-col gap-3">
                    <label for="push" class="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" id="push" class="peer sr-only" />
                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                    </label>
                    <label for="email" class="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" id="email" class="peer sr-only" />
                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                    </label>
                    <label for="sms" class="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" value="" id="sms" class="peer sr-only" />
                    <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                    </label>
                </div>
                </div>
            </div>
            <div class="mb-10">
                    <p class="py-2 text-xl font-semibold">Delete Account</p>
                    <p class="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                        Proceed with caution
                    </p>
                    <p class="mt-2">Make sure you have taken backup of your account in case you ever need to get access
                        to your data. We will completely wipe your data. There is no way to access your account after
                        this action.</p>
                    <button class="ml-auto text-sm font-semibold text-rose-600 underline decoration-2" @click="openPopUpDeleteAccount">Continue with
                        deletion</button>
                </div>
        </div>
        </div>
    </div>
    <dialog id="confirmDeleteAccount" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Are You Sure ?</h3>
        <p class="py-4">Are you sure you want to delete this Account ?<br>This action cannot be undone</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Cancel</button>
            <button class="btn btn-error" @click="deleteAccount">Delete</button>
          </form>
        </div>
      </div>
    </dialog>
    <dialog id="confirmDeleteAllCategory" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Are You Sure ?</h3>
        <p class="py-4">Are you sure you want to delete this Account ?<br>This action cannot be undone</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Cancel</button>
            <button class="btn btn-error" @click="deleteAccount">Delete</button>
          </form>
        </div>
      </div>
    </dialog>
    <dialog id="confirmDeleteAllTasks" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Are You Sure ?</h3>
        <p class="py-4">Are you sure you want to delete this Account ?<br>This action cannot be undone</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Cancel</button>
            <button class="btn btn-error" @click="deleteAccount">Delete</button>
          </form>
        </div>
      </div>
    </dialog>
</template>
<script>
import TasksDataService from '@/services/TasksDataService'
import CategoryDataService from '@/services/CategoryDataService'
import UsersDataService from '@/services/UsersDataService'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeView (view) {
      this.$emit('change-view', view)
    },
    openPopUpDeleteAccount () {
      const confirmDeleteAccount = document.getElementById('confirmDeleteAccount')
      confirmDeleteAccount.showModal()
    },
    deleteAccount () {
      // delete all the data from this user
      TasksDataService.deleteAllTasksFromThisUser()
        .then(response => {
          console.log('All tasks deleted', response)
          CategoryDataService.deleteAllCategoriesFromThisUser()
            .then(response => {
              console.log('All categories deleted', response)
              UsersDataService.deleteUser(this.user.id)
                .then(response => {
                  console.log('User deleted', response)
                  this.localStorage.removeItem('token')
                  this.$router.push('/')
                })
                .catch(error => {
                  console.log('Error deleting user:', error)
                })
            })
        })
    }
  }
}
</script>
