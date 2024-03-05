<template>
  <div class="flex flex-col justify-center items-center flex-1 py-5">
    <div class="text-black text-xl font-bold py-5">{{statType}}</div>
    <div class="text-black text-xl font-medium ">{{ statNumber }}</div>
  </div>
</template>

<script>
export default {
  name: 'StatComponent',
  props: {
    statType: {
      type: String,
      required: true
    },
    statNumber: {
      type: Number,
      required: true
    }
  }
}
</script>
