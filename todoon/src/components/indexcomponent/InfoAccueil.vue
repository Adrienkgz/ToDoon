<template>
    <div class=" sm:mx-5 md:mx-10 lg:mx-50">
        <div class="flex justify-center space-x-5 items-center">
            <div class="container mx-10">
                <p class="sm:text-xl md:text-6xl font-black">ToDOON:</p>
                <p class="sm:text-xl md:text-6xl font-black py-4">Ultimate task</p>
                <p class="sm:text-xl md:text-6xl font-black">Management tool</p>
                <p class="mt-2 sm:text-sm md:text-2xl pr-20">TaskMaster is a task management website — the best way to organize, prioritize, and track your tasks efficiently.</p>
                <swipe-button :infoButton="token === null ? 'Start Using' : 'Go Home'" @click="startUsingButton" class="sm:5 md:mt-10"/>
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
import Modal from '../indexcomponent/LoginPopUp.vue'
import { ref } from 'vue'

export default {
  components: {
    SwipeButton,
    Modal
  },
  setup () {
    const showModal = ref(false)
    const token = localStorage.getItem('token')

    const openPopup = () => {
      showModal.value = true
    }

    return {
      showModal,
      openPopup,
      tokenx
    }
  },
  methods: {
    scrollToTop () {
      document.getElementById('buttonToDown').scrollIntoView({
        behavior: 'smooth'
      })
    },
    startUsingButton () {
      if (localStorage.getItem('token') === null) {
        this.openPopup()
      } else {
        this.$router.push('/home')
      }
    }
  }
}
</script>
<style>
#logo-img path {
  fill:rgb(102, 18, 18)0;
}
</style>
