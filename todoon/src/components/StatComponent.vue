<template>
    <div class="w-[274px] h-[107px] flex-col justify-center items-start inline-flex">
        <h3 class="">{{ statType }}</h3>
        <h6>{{ statNumber }}</h6>
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
