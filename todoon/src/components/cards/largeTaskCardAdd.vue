<template>
    <div class="card h-48 w-96 p-4">
      <button class="group cursor-pointer outline-none hover:rotate-90 duration-300 px-4 py-3 mt-5" onclick="my_modal_4.showModal()" title="Add New">
        <svg
          class="stroke-pinky fill-none group-hover:fill-pinky-100 group-active:stroke-pink-300 group-active:fill-pink-500 group-active:duration-0 duration-300"
          viewBox="0 0 24 24"
          height="75px"
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
    </div>
</template>
<style>
.card {
  box-sizing: border-box;
  width: 210px;
  height: 350px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
}
.card:hover {
  transform: scale(1.05);
}</style>
