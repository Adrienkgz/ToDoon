<template>
  <router-link to='/home'>
    <div class='absolute m-7 right-0'>
      <img src="../assets/img/xmark.svg" class='w-6 h-6' alt="x"/>
    </div>
  </router-link>
  <social-vue v-if='socialView' @change-view='changeView' :user="user"/>
  <profile-info-vue v-if='profileView' @change-view='changeView' :user="user"/>
  <settings-vue v-if='settingsView' @change-view='changeView' :user="user"/>
</template>
<script>
import profileInfoVue from './profileviews/profileInfoVue.vue'
import settingsVue from './profileviews/settingsVue.vue'
import socialVue from './profileviews/socialVue.vue'
import UsersDataService from '@/services/UsersDataService'

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
      isHidden: true,
      user: null
    }
  },
  mounted () {
    this.socialView = false
    console.log('socialView', this.socialView)
    this.profileView = true
    console.log('profileView', this.profileView)
    this.settingsView = false
    console.log('settingsView', this.settingsView)

    // Retrieve user information
    UsersDataService.getUser()
      .then(response => {
        console.log('user', response.data)
        this.user = response.data
      })
      .catch(error => {
        console.log('Error fetching user:', error)
      })
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
