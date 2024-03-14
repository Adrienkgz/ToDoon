<template>
    <social-vue v-if="socialView" @change-view="changeView" />
    <profile-info-vue v-if="profileView" @change-view="changeView" />
    <settings-vue v-if="settingsView" @change-view="changeView" />
</template>
<script>
import profileInfoVue from '@/components/profileComponent/profileInfoVue.vue'
import settingsVue from '@/components/profileComponent/settingsVue.vue'
import socialVue from '@/components/profileComponent/socialVue.vue'

export default {
  components: {
    profileInfoVue,
    settingsVue,
    socialVue
  },
  data () {
    return {
      profileView: true,
      settingsView: false,
      socialView: false,
      isHidden: true
    }
  },
  mounted () {
    this.socialView = false
    console.log('socialView', this.socialView)
    this.profileView = true
    console.log('profileView', this.profileView)
    this.settingsView = false
    console.log('settingsView', this.settingsView)
  },
  methods: {
    changeView (view) {
      this.socialView = view === 'social'
      this.profileView = view === 'profile'
      this.settingsView = view === 'settings'
    }
  }
}
</script>
