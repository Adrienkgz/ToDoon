<template><div class="flex flex-col items-center gap-2">
        <div class="group relative p-2 rounded-full">
            <span><img :src="getPriorityImage()" class="scale-[12]"></span>
            <div
            class="bg-[#d8d8d8] border-1 border-white w-[9rem] rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-8 -left-[1.5rem] -translate-x-full z-10"
            >
            <div class="flex flex-col space-y-1 m-3">
                <div class="flex justify-center"><div>Priority</div></div>
                <div class="flex space-x-2">
                  <img src="../../assets/img/svg/exclamationmark.triangle.green.svg" class="w-[30px] scale-[0.8]" alt="">
                  <span :class="{ 'text-green': (priorityNumber === (0 || -1) ), 'text-classic': (priorityNumber !== (0 || -1))}">None</span>
                </div>
                <div class="flex space-x-2">
                  <img src="../../assets/img/svg/exclamationmark.triangle.yellow.svg" class="w-[30px] scale-[0.8]" alt="">
                  <span :class="{ 'text-yellow': (priorityNumber === 1 ), 'text-classic': (priorityNumber !== 1)}">Low</span>
                </div>
                <div class="flex space-x-2">
                  <img src="../../assets/img/svg/exclamationmark.triangle.orange.svg" class="w-[30px] scale-[0.8]" alt="">
                  <span :class="{ 'text-orange': (priorityNumber === 2 ), 'text-classic': (priorityNumber !== 2)}">Medium</span>
                </div>
                <div class="flex space-x-2">
                  <img src="../../assets/img/svg/exclamationmark.triangle.red.svg" class="w-[30px] scale-[0.8]" alt="">
                  <span :class="{ 'text-red': (priorityNumber === 3 ), 'text-classic': (priorityNumber !== 3)}">High</span>
                </div>
                <div class="flex space-x-2">
                  <img src="../../assets/img/svg/exclamationmark.triangle.purple.svg" class="w-[30px] scale-[0.8]" alt="">
                  <span :class="{ 'text-purple': (priorityNumber === 4 ), 'text-classic': (priorityNumber !== 4)}">Urgent</span>
                </div>
            </div>
            <div
                class="bg-inherit rotate-45 p-1 absolute top-[30px] -translate-y-1/6 right-0 translate-x-1/2"
            ></div>
            </div>
        </div>
    </div>
</template>
<script>
import greenImage from '../../assets/img/svg/exclamationmark.triangle.green.svg'
import yellowImage from '../../assets/img/svg/exclamationmark.triangle.yellow.svg'
import orangeImage from '../../assets/img/svg/exclamationmark.triangle.orange.svg'
import redImage from '../../assets/img/svg/exclamationmark.triangle.red.svg'
import purpleImage from '../../assets/img/svg/exclamationmark.triangle.purple.svg'

export default {
  name: 'priorityToolTips',
  props: {
    priority: Number
  },
  data () {
    return {
      priorityNumber: this.priority
    }
  },
  mounted () {
    console.log('priorityNumber: ', this.priorityNumber)
  },
  methods: {
    getPriorityImage () {
      switch (this.priority) {
        case -1:
          return greenImage
        case 0:
          return greenImage
        case 1:
          return yellowImage
        case 2:
          return orangeImage
        case 3:
          return redImage
        case 4:
          return purpleImage
      }
    }
  }
}
</script>
<style>
.priorityInfo {
  font-size: 1rem;
  font-weight: 500;
}
.text-green {
  font-weight: 300;
  font-style: italic;
  color: #198038;
}

.text-yellow {
  font-weight: 300;
  font-style: italic;
  color: #f1c21b;
}

.text-orange {
  font-weight: 300;
  font-style: italic;
  color: #ff832b;
}

.text-red {
  font-weight: 300;
  font-style: italic;
  color: #da1e28;
}

.text-purple {
  font-weight: 300;
  font-style: italic;
  color: #6b306c;
}
.text-classic {
  font-weight: 300;
  font-style: italic;
  color: #000000;
}
</style>
