<template>
    <div class=" sm:mx-10 md:mx-20 lg:mx-50">
        <div class="flex justify-center space-x-5 items-center">
            <div class="container mx-10">
                <p class="sm:text-lg md:text-6xl font-black">ToDOON</p>
                <p class="sm:text-lg md:text-6xl font-black py-4">Ultimate task</p>
                <p class="sm:text-lg md:text-6xl font-black">Management tool</p>
                <p class="mt-2 sm:text-sm md:text-2xl pr-20">TaskMaster is a task management website — the best way to organize, prioritize, and track your tasks efficiently.</p>
                <swipe-button :infoButton="'Start Using'" class="mt-3"/>
            </div>
            <img class="w-1/3 h-1/3 rounded-lg" src="../assets/img/firstImg.jpeg" alt="Task">
        </div>
        <div class="flex justify-center">
            <button @click="scrollToTop" class="image-button">
                <img src="../assets/img/chevron-down.png" alt="Button Image" class="button-image">
            </button>
        </div>
    </div>
</template>

<script>
import SwipeButton from './button/SwipeButton.vue'

export default {
  components: {
    SwipeButton
  },
  methods: {
    scrollToTop () {
      console.log('scrollToTop')
      const button = document.querySelector('.scroll-button')
      if (button) {
        const buttonRect = button.getBoundingClientRect()
        // Calcul de la position de défilement
        const scrollPosition = buttonRect.top + window.scrollY - buttonRect.height
        // Vous pouvez également ajouter des options d'animation ici si vous le souhaitez
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
