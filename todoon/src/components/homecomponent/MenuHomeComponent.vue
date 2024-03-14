<template>
    <div class="flex-col justify-center text-center mt-5 space-y-10" >
        <nav id="menu-vertical" v-if="windowWidth >= 550">
            <ul class="m-auto menu menu-vertical bg-gray-300 w-4/5 rounded-box text-xl" id="menu-vertical-liste" >
                <li>
                    <router-link to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="red"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <div class="menuTitle">home</div>
                    </router-link>
                </li>
                <li>
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div class="menuTitle">Today</div>
                    </a>
                </li>
                <li>
                    <router-link to="/home/todo">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    <div class="menuTitle">To DO</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/doing">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    <div class="menuTitle">Doing</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/done">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="red"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </router-link>
                </li>
                <li>
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </a>
                </li>
                <li>
                    <router-link to="/home/todo">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/doing">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </router-link>
                </li>
                <li>
                    <router-link to="/home/done">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </router-link>
                </li>
            </ul>
        </nav>
        <ul class="m-auto menu bg-gray-300 w-56 rounded-box mt-5">
            <li><a class="border-pinky bg-pinky border-2 radius-4xl hover:bg-gray-300 transition duration-200" onclick="add_category_modal.showModal()">Add Category</a></li>
            <li>
                <details open>
                <summary>Categories</summary>
                <ul>
                    <li class="flex-item" v-for="category in list_category" :key="category.id">
                        <div class="flex-container">
                            <img :src="require(`@/assets/img/imgcategory/${category.icon}.png`)" class="flex-item" style="width: 20px; height: 20px; border-radius: 0%;">
                            <a class="flex-item">{{ category.name }}</a>
                        </div>
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
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" id = 'name' v-model="this.newcategory.name" required/>
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
        name: ''
      },
      icon_selected: 'icon-barcelona',
      list_category: [],
      list_project: [],
      windowWidth: 0,
      icons: []
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

    // Récupère les catégories
    CategoryDataService.getAll()
      .then(response => {
        this.list_category = response.data
        console.log(this.list_category)
      })
      .catch(e => {
        console.log(e)
      })
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    addCategory () {
      const newcategory = {
        name: this.newcategory.name,
        icon: this.icon_selected
      }
      CategoryDataService.create(newcategory)
        .then(response => {
          console.log(response)
          // Animation réussite
          window.location.reload()
        })
        .catch(e => {
          console.log(e)
        })
    },
    getActive (image) {
      this.icon_selected = image
      const images = document.querySelectorAll('.category-image')
      console.log(images)
      images.forEach((img) => {
        img.classList.remove('active')
      })
      const img = document.querySelector('#' + image)
      console.log(img)
      img.classList.add('active')
    },
    handleResize () {
      this.windowWidth = window.innerWidth
      console.log(this.windowWidth)
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
  border: 1px solid black;
  border-radius: 20%;
  transition: all 0.3s ease-out;
}
#scrollbaricon::-webkit-scrollbar-track
{
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
border-radius: 10px;
background-color: #F5F5F5;
}
#scrollbaricon::-webkit-scrollbar
{
width: 12px;
background-color: #F5F5F5;
}
#scrollbaricon::-webkit-scrollbar-thumb
{
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: #555;
}
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
