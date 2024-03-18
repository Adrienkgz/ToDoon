<template>
    <form ref="formcategory" @submit.prevent="addProject">
        <div class="modal-box w-11/12 max-w-5xl">
            <div v-if="this.status_modal == 'create'" class="flex justify-center">
                <h3 class="font-bold text-xl">Create A <span class="text-pinky text-2xl">Project !</span></h3>
            </div>
            <div v-else class="flex justify-center">
                <h3 class="font-bold text-xl">Edit your <span class="text-pinky text-2xl">Project !</span></h3>
            </div>
            <div class="flex space-x-5 mt-5">
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text text-xl">Name this Projet</span>
                    </div>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" id='name' v-model="this.project_name"
                      required @input="$emit('nameTyping', $event.target.value)"/>
                </label>
            </div>
            <label class="form-control w-full mt-5">
            <div class="label">
              <span class="label-text text-xl">Task Description</span>
            </div>
            <textarea class="textarea textarea-bordered resize-none" placeholder="Description" id='description' @input="$emit('descTyping', $event.target.value)" v-model="this.project_description"></textarea>
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
                <button v-if="status_modal == 'create'" type="submit" class="btn bg-secondary hover:bg-secondary">Add Project</button>
                <button v-else type="submit" class="btn bg-secondary hover:bg-secondary" @click="$emit('deleteProject')">Delete</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
  name: 'CreateVueProject',
  props: {
    icons: Array,
    new_project: Object,
    status_modal: String
  },
  created () {
    console.log('new_project', this.new_project)
  },
  mounted () {
    console.log('new_project', this.new_project)
    this.project_name = this.new_project.name
    this.project_description = this.new_project.description

    this.$nextTick(() => {
      // Rend actif l'icône sélectionnée
      const img = document.querySelector('#project-' + this.new_project.icon)
      img.classList.add('active')
    })
  },
  data () {
    return {
      icon_selected: 'icon-barcelona',
      project_name: '',
      project_description: ''
    }
  },
  methods: {
    getActive (image) {
      this.$emit('setIconSelected', image)
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
      this.$emit('addProject', newproject)
    }
  }
}
</script>
