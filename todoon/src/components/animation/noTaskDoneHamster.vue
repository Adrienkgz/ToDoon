<template>
    <div class="flex justify-center place-items-center text-2xl font-black mb-2" id="noTaskLabel">No<span class="mx-2 text-pinky text-4xl">Task</span>Done<span>...</span></div>
    <div class="flex justify-center"><hamsterWheel/></div>
    <div class="flex place-items-center justify-center items-center text-2xl font-black mt-2" id="addTaskLabel">Work Harder To Complete
      <span class="mx-2 text-pinky text-4xl">Task !</span>
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
