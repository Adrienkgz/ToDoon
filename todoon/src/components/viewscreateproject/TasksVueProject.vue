<template>
    <form ref="formcategory" @submit.prevent="addProject">
        <div class="modal-box w-11/12 max-w-5xl">
            <div class="flex justify-center">
                <h3 class="font-bold text-xl">Create A <span class="text-pinky text-2xl">Project !</span></h3>
            </div>
            <div class="flex space-x-5 mt-5">
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text text-xl">Name this Projet</span>
                    </div>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" id='name'
                        v-model="this.new_project.name" required />
                </label>
            </div>
            <label class="form-control w-full mt-5">
            <div class="label">
              <span class="label-text text-xl">Task Description</span>
            </div>
            <textarea class="textarea textarea-bordered resize-none" placeholder="Description" id='description' v-model="this.new_project.description"></textarea>
          </label>
            <label class="form-control w-full mt-5">
                <div class="label">
                    <span class="label-text text-xl">Icons</span>
                </div>
                <div class="flex flex-wrap h-48 overflow-y-auto" id="scrollbaricon">
                    <ul class="flex flex-col w-1/5 p-2" v-for="image in this.icons" :key="image">
                        <li>
                            <a @click="getActive(image)">
                                <img :src="require(`@/assets/img/imgcategory/${image}.png`)" class="category-image"
                                    :id="'project-' + image">
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
</template>

<script>
import ProjectDataService from '@/services/ProjectDataService'
export default {
  name: 'CreateVueProject',
  props: {
    icons: Array
  },
  data () {
    return {
      new_project: {
        name: '',
        description: ''
      },
      icon_selected: 'icon-barcelona'
    }
  },
  methods: {
    getActive (image) {
      this.icon_selected = image
      console.log('image', image)
      const images = document.querySelectorAll('.category-image')
      images.forEach((img) => {
        img.classList.remove('active')
      })
      const img = document.querySelector('#project-' + image)
      img.classList.add('active')
    },
    addProject () {
      const newproject = {
        name: this.new_project.name,
        description: this.new_project.description,
        icon: this.icon_selected
      }
      console.log('newproject', newproject)
      ProjectDataService.create(newproject)
        .then(response => {
          console.log('response', response)
          this.$emit('addProject', newproject)
        })
        .catch(error => {
          console.log('Error adding project:', error)
        })
    }
  }
}
</script>
