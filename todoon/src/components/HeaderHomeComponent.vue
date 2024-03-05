<template>
    <div class="flex bg-blue-500">
        <div class="2/5 px-2">
            <SearchBarComponent/>
        </div>
        <div class="flex-grow flex justify-end">
            <NotificationIconComponent/>
            <AddTaskComponent/>
            <ProfilIconComponent/>
        </div>
    </div>
</template>

<script>

import SearchBarComponent from './search/SearchBarComponent.vue'
import NotificationIconComponent from './NotificationIconComponent.vue'
import AddTaskComponent from './AddTaskComponent.vue'
import ProfilIconComponent from './ProfilIconComponent.vue'

export default {
  components: {
    SearchBarComponent,
    NotificationIconComponent,
    AddTaskComponent,
    ProfilIconComponent
  }
}
</script>
