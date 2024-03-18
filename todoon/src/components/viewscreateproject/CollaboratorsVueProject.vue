<template>
    <form ref="formcategory" @submit.prevent="">
        <div class="modal-box w-11/12 max-w-5xl">
            <div class="flex justify-center">
                <h3 class="font-bold text-xl">Add all your <span class="text-pinky text-2xl">Collaborators !</span></h3>
            </div>
            <div class="overflow-y-auto" id="table-collaborator-project">
                <table>
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="collaborator in list_collaborators" :key="collaborator.id">
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img :src="require(`@/assets/img/avatars/${collaborator.avatar}.png`)" alt="Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold w-48">{{ collaborator.firstName }} {{ collaborator.lastName }}</div>
                                        <div class="text-sm opacity-50">{{ collaborator.email }}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {{ collaborator.role }}
                                <br />
                            </td>
                            <td style="width: 120px;">{{ collaborator.date }}</td>
                            <th>
                                <button class="btn btn-ghost btn-xs" @click="deleteCollaborator(collaborator.id)">Supprimer</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex justify-center">
                <SearchBarComponent2 @searchUsers="addCollaborator"/>
            </div>

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
import SearchBarComponent2 from '@/components/search/SearchBarComponent2.vue'

export default {
  name: 'CreateVueProject',
  components: {
    SearchBarComponent2
  },
  props: {
    status_modal: String,
    list_collaborators: Array
  },
  mounted () {
    if (this.status_modal === 'create') {
      console.log('status_modal', this.status_modal)
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
      this.$emit('addProject')
    },
    addCollaborator (searchValue) {
      this.$emit('addCollaborator', searchValue, this.status_modal)
    },
    deleteCollaborator (id) {
      this.$emit('removeCollaborator', id)
    }
  }
}
</script>

<style scoped>
#table-collaborator-project {
    width: 700px;
    height: 300px;
}
</style>
