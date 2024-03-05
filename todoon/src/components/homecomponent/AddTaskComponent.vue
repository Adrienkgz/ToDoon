<template>
    <button class="group cursor-pointer outline-none hover:rotate-90 duration-300 px-4 py-3" title="Add New">
  <svg
    class="stroke-pink-600 fill-none group-hover:fill-pink-100 group-active:stroke-pink-300 group-active:fill-pink-500 group-active:duration-0 duration-300"
    viewBox="0 0 24 24"
    height="50px"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-width="1.5"
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
    ></path>
    <path stroke-width="1.5" d="M8 12H16"></path>
    <path stroke-width="1.5" d="M12 16V8"></path>
  </svg>
</button>
</template>

<style>
button {
  position: relative;
  bottom: 10px;
}
</style>
<script>
export default {
  name: 'AddTaskComponent',
  props: {
  }
}
</script>
