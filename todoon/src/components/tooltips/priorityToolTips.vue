<template><div class="flex flex-col items-center gap-2">
        <div class="group relative p-2 rounded-full">
            <span><img :src="getPriorityImage()" class="scale-[12]"></span>
            <div
            class="bg-[#d8d8d8] w-24 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-10 -left-3 -translate-x-full z-10"
            >
            <div class="flex flex-col space-y-5 m-5">
                <img src="../../assets/img/svg/exclamationmark.triangle.green.svg" class="scale-[10]" alt="">
                <img src="../../assets/img/svg/exclamationmark.triangle.yellow.svg" class="scale-[10]" alt="">
                <img src="../../assets/img/svg/exclamationmark.triangle.orange.svg" class="scale-[10]" alt="">
                <img src="../../assets/img/svg/exclamationmark.triangle.red.svg" class="scale-[10]" alt="">
                <img src="../../assets/img/svg/exclamationmark.triangle.purple.svg" class="scale-[10]" alt="">
            </div>
            <div
                class="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2"
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
  mounted () {
    console.log('priority: ', this.priority)
  },
  methods: {
    getPriorityImage () {
      switch (this.priority) {
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
