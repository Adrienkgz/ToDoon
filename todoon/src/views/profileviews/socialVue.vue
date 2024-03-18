<template>
    <div class="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
        <h1 class="border-b py-6 text-4xl font-semibold">Social</h1>
        <div class="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
            <div class="relative my-4 w-56 sm:hidden">
            <input class="peer hidden" type="checkbox" name="select-1" id="select-1" />
            <label for="select-1" class="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-pinky peer-checked:ring">Social </label>
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
                <li class="mt-5 cursor-pointer border-l-2 border-l-pinky px-2 py-2 font-semibold text-pinky transition hover:border-l-pinky hover:text-pinky" @click="changeView('social')">Social</li>
                <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-pinky hover:text-pinky" @click="changeView('profile')">Profile</li>
                <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-pinky hover:text-pinky" @click="changeView('settings')">Settings</li>
            </ul>
            </div>

            <div class="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            <div class="pt-4">
                <h1 class="py-2 text-2xl font-semibold">Social View</h1>
                <!-- <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> -->
            </div>
            <hr class="mt-4 mb-8" />
            <p class="py-2 text-xl font-semibold">Avatar</p>
            <!-- Avatar part -->
            <div class="flex flex-wrap overflow-y-auto" id="scrollbaricon" style="height: 400px;">
                <ul class="flex flex-col w-1/5 p-2" v-for="(avatar, avatar_id) in list_avatars" :key="avatar_id">
                    <li>
                        <a @click="getActive(avatar_id)">
                            <img :src="require(`@/assets/img/avatars/${avatar}.png`)" class="category-image" :id="avatar">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center justify-center">
                <button class="mt-4 rounded-lg bg-pinky px-4 py-2 text-white" @click="changeAvatar">Save Avatar</button>
            </div>
            <hr class="mt-4 mb-8" />
            <p class="py-2 text-xl font-semibold">Members</p>
            <div class="space-y-1">
                <div class="rounded-md border bg-white">
                <div class="flex w-full items-center px-6 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                    <span> Shakir Ali</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </div>
                <div class="flex flex-col space-y-3 px-4 py-6 sm:px-10">
                    <label class="block" for="name">
                    <p class="text-sm">Name</p>
                    <input class="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-pinky
     focus:ring-1" type="text" value="Shakir Ali" />
                    </label>
                    <label class="block" for="email">
                    <p class="text-sm">Email</p>
                    <input class="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-pinky
     focus:ring-1" type="email" value="shakir.ali@company.com" />
                    </label>
                    <label class="block" for="team">
                    <p class="text-sm">Team</p>
                    <select class="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-pinky
     focus:ring-1" name="team" value="UI/UX Design">
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="UI/UX Design">Marketing</option>
                        <option value="UI/UX Design">Engineering</option>
                    </select>
                    </label>
                    <button class="mt-4 ml-auto rounded-lg bg-pinky
     px-10 py-2 text-white">Save</button>
                </div>
                </div>
                <div class="rounded-md border bg-white">
                <div class="flex w-full items-center px-6 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                    <span>Ebbie James</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </div>
                </div>
                <div class="rounded-md border bg-white">
                <div class="flex w-full items-center px-6 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                    <span>Mica Calister</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </div>
                </div>
            </div>

            <hr class="mt-4 mb-8" />
            </div>
        </div>
    </div>
</template>
<script>
import UsersDataService from '@/services/UsersDataService'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      avatar_selected: null,
      list_avatars: [],
      mutableUser: null
    }
  },
  mounted () {
    this.mutableUser = { ...this.user }
    this.avatar_selected = this.user.avatar
    console.log('avatar_selected', this.avatar_selected)
    const avatars = require.context('../../assets/img/avatars/', false, /\.png$/)
    console.log('avatars', avatars.keys())
    avatars.keys().forEach(avatar => {
      this.list_avatars.push(avatar.replace('./', '').replace('.png', ''))
    })
    console.log('list_avatars', this.list_avatars)
  },
  methods: {
    changeView (view) {
      this.$emit('change-view', view)
    },
    getActive (image) {
      this.avatar_selected = this.list_avatars[image]
      const images = document.querySelectorAll('.category-image')
      images.forEach((img) => {
        img.classList.remove('avatar-active')
      })
      const img = document.querySelector('#' + this.avatar_selected)
      img.classList.add('avatar-active')
    },
    changeAvatar () {
      this.mutableUser.avatar = this.avatar_selected
      UsersDataService.updateUser(this.mutableUser)
        .then(response => {
          console.log('response', response)
        })
        .catch(error => {
          console.log('Error updating user:', error)
        })
    }
  }
}
</script>

<style scoped>
.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.avatar-active {
  transform: scale(1.1);
  border: 5px solid #ff4785;
}
</style>
