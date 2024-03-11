<template>
    <div class="flex items-center">
        <div class="2/5 px-5">
            <SearchBarComponent @search="onSearch"/>
        </div>
        <div class="flex-grow flex justify-end p-5">
            <AddTaskComponent/>
            <ProfilIconComponent/>
        </div>
    </div>
</template>

<script>

import SearchBarComponent from '../search/SearchBarComponent.vue'
import AddTaskComponent from './AddTaskComponent.vue'
import ProfilIconComponent from './ProfilIconComponent.vue'

export default {
  components: {
    SearchBarComponent,
    AddTaskComponent,
    ProfilIconComponent
  },
  methods: {
    onSearch (value) {
      this.$emit('search', value)
    }
  }
}
</script>
