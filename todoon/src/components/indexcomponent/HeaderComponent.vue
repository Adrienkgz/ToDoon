<template>
    <header class="flex items-center justify-between py-2 px-5">
        <img src="../../assets/img/logo-pasteque-bg-removed.png" alt="Logo" class="w-151 h-104">
        <nav class="hidden md:flex space-x-20">
            <router-link to="/" class="font-black hover:text-gray-600">Home</router-link>
            <router-link to="/what" class="font-black hover:text-gray-600">What</router-link>
            <router-link to="/about" class="font-black hover:text-gray-600">About</router-link>
            <router-link to="/contact" class="font-black hover:text-gray-600">Contact</router-link>
            <router-link to="/home" class="font-black">Page 2(temp)</router-link>
        </nav>
        <div class="flex justify-end flex-grow space-x-4 ">
            <button class="border border-black rounded-3xl font-black -2xl py-2 px-4 rounded-2 hover:bg-gray-200">Join ToDOON</button>
            <button class="font-black rounded-3xl py-0 px-10 bg-pink-600" @click="openPopup">Login</button>
        </div>
  </header>
  <Teleport to="body">
      <Modal :showModal="showModal" @close="showModal = false" />
    </Teleport>
</template>

<style>
header {
    font-size: 20px;
    font-family: 'inter', sans-serif;
}
</style>

<script>
import Modal from '../indexcomponent/PopUp.vue'
import { ref } from 'vue'
export default {
  components: {
    Modal
  },
  name: 'HeaderComponent',
  props: {
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
  }
}
</script>
