<template>
    <div class=" sm:mx-10 md:mx-20 lg:mx-50">
        <div class="flex justify-center space-x-5 items-center">
            <div class="container mx-10">
                <p class="sm:text-lg md:text-6xl font-black">ToDOON:</p>
                <p class="sm:text-lg md:text-6xl font-black py-4">Ultimate task</p>
                <p class="sm:text-lg md:text-6xl font-black">Management tool</p>
                <p class="mt-2 sm:text-sm md:text-2xl pr-20">TaskMaster is a task management website — the best way to organize, prioritize, and track your tasks efficiently.</p>
                <swipe-button :infoButton="'Start Using'" @click="openPopup" class="mt-3"/>
            </div>
            <img class="w-1/3 h-1/3 rounded-lg" src="../../assets/img/firstImg.jpeg" alt="Task">
        </div>
        <div class="flex justify-center mt-4">
            <button @click="scrollToTop" class="image-button" id="buttonToDown">
                <img src="../../assets/img/chevron_down.svg" alt="Button Image" class="h-6">
            </button>
        </div>
    </div>
    <Teleport to="body">
      <Modal :showModal="showModal" @close="showModal = false" />
    </Teleport>
</template>
<script>
import SwipeButton from '../button/SwipeButton.vue'
import Modal from '../indexcomponent/PopUp.vue'
import { ref } from 'vue'

export default {
  components: {
    SwipeButton,
    Modal
  },
  setup () {
    const showModal = ref(false)

    const openPopup = () => {
      showModal.value = true
    }

    return {
      showModal,
      openPopup
    }
  },
  methods: {
    scrollToTop () {
      document.getElementById('buttonToDown').scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style>
#logo-img path {
  fill:rgb(102, 18, 18)0;
}
</style>
