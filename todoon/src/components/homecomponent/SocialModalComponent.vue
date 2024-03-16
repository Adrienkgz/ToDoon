<template>
    <div class="fixed top-0 right-0 bottom-0 h-48" style="z-index: 1; height: 100%;">
        <div class="modal-box">
            d
        </div>
    </div>
</template>

<script>
export default {
  name: 'SocialModalComponent',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log('mounted SocialModalComponent')
    console.log(this.user)
  },
  methods: {
    closeSocialModal () {
      this.$emit('closeSocialModal')
    }
  }
}
</script>
