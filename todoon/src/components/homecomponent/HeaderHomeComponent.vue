<template>
    <div class="flex items-center m-3">
        <div class="flex justify-center items-center w-1/5">
          <router-link to="/">
              <img src="../../assets/img/logo-pasteque-bg-removed.png" class="w-full h-50">
          </router-link>
          <h1 class="text-2vw font-bold text-right px-8" id="title" style="font-size: 2vw;">ToDOON</h1>
        </div>
        <div class="2/5 px-5">
            <SearchBarComponent @search="onSearch"/>
        </div>
        <div class="flex-grow flex justify-end items-center p-1">
            <AddTaskComponent @newcardadded="emitCardAddedEvent"/>
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
    },
    emitCardAddedEvent (newCard) {
      this.$emit('newcardadded', newCard)
    }
  }

}
</script>
<style>
@media only screen and (max-width: 800px) {
  #title {
    display: none;
  }
}
</style>
