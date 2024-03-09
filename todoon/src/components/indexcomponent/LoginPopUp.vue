<template>
  <transition name="modal-fade">
    <div v-if="showModal" class="modal-mask">
      <div class=" max-w-md z-50 flex-col p-4 rounded-lg text-black bg-white h-30% w-1/2 md:mx-auto md:mt-10 md:mb-auto sm:mx-auto sm:mt-10 sm:mb-auto min-w-48">
        <div class="flex text-2xl justify-center">
          <div class="grow"></div>
          <p class=" grow-0 font-bold mb-2 text-[#1e0e4b]"> Welcome to</p>
          <span class=" grow-0 text-[#FF4785]">ToDOON</span>
          <div class="grow"></div>
          <p @click="closeModal" class=" grow-0 mt-1 w-5 h-5"><img class="h-5 w-5 bg-pink" src="../../assets/img/xmark.svg" alt="xmark"></p>
        </div>
        <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
        <form class="flex flex-col gap-3">
        <div class="block relative">
            <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
            <input type="text" id="email" aria-label="Email" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0">
        </div>
        <div class="block relative">
            <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
            <input type="password" id="password" aria-label="Password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
        </div>
        <div>
            <a class="text-sm text-[#FF4785] hover:underline" href="#">Forgot your password?</a>
        </div>
        <button type="submit" class="bg-[#FF4785] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal focus:outline-none focus:ring focus:border-blue-300 hover:bg-pink-400">Submit</button>
        </form>
        <div class="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <a class="text-sm text-[#FF4785] hover:underline" href="#">Sign up for free!</a></div>
        </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    title: String
  },
  methods: {
    closeModal () {
      console.log('close')
      this.$emit('close')
    }
  }
}
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.5s;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.5s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
}
</style>
