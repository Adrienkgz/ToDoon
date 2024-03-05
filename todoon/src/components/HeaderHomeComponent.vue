<template>
    <div class="flex">
        <div class="1/5">
            <SearchBarComponent/>
        </div>
        <div class="w-4/5">
            <NotificationIconComponent/>
            <AddTaskComponent/>
        </div>
    </div>
</template>

<script>

import SearchBarComponent from './search/SearchBarComponent.vue'

export default {
  components: {
    SearchBarComponent
  }
}
</script>
