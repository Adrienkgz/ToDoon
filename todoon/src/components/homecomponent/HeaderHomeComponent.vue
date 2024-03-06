<template>
    <div class="flex">
        <div class="2/5 px-2">
            <SearchBarComponent/>
        </div>
        <div class="flex-grow flex justify-end p-3">
            <NotificationIconComponent/>
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
  }
}
</script>
