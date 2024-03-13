<template>
    <div class="flex justify-center place-items-center text-2xl font-black" id="noTaskLabel">Not<span class="mx-2 text-pinky text-4xl">Task</span>yet<span>...</span></div>
    <div class="flex justify-center"><hamsterWheel/></div>
    <div class="flex place-items-center justify-center items-center text-2xl font-black" id="addTaskLabel">Click on
      <button class="group cursor-pointer outline-none hover:rotate-90 duration-300 px-4 py-3 mt-5" onclick="my_modal_4.showModal()" title="Add New">
        <svg
          class="stroke-pinky fill-none group-hover:fill-pinky-100 group-active:stroke-pink-300 group-active:fill-pink-500 group-active:duration-0 duration-300"
          viewBox="0 0 24 24" height="50px" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path stroke-width="1.5" d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"></path>
          <path stroke-width="1.5" d="M8 12H16"></path>
          <path stroke-width="1.5" d="M12 16V8"></path>
        </svg>
      </button>to add a new
      <span class="mx-2 text-pinky text-4xl">Task</span>
    </div>
</template>
<script>
import hamsterWheel from '../animation/hamsterAnimation.vue'
export default {
  components: {
    hamsterWheel
  }
}
</script>
<style>
@media screen and (max-width: 1350px) and  (min-width: 1024px){
  #noTaskLabel {
    flex-direction: column;
  }
  #addTaskLabel {
    flex-direction: column;
  }
}
</style>
