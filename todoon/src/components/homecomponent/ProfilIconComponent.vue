<template>

    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="avatar m-1">
            <div class="w-12 h-12 rounded-full ring ring-pinky hover:ring-pink-600 ring-offset-base-100 ring-offset-2">
                <img v-if="this.user" :src="require(`../../assets/img/avatars/${this.user.avatar}.png`)" />
            </div>
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><router-link :to="'/profile'">Profile</router-link></li>
            <li><a class="hover:underline" @click="logout">Deconnexion</a></li>
        </ul>
    </div>
    <SocialModalComponent v-if="showSocialModal" :user="this.user" @closeSocialModal="closeSocialModal"/>
</template>

<style>
a {
    cursor: pointer;
}
</style>

<script>
import UsersDataService from '@/services/UsersDataService'
import SocialModalComponent from './SocialModalComponent.vue'

export default {
  name: 'ProfilIconComponent',
  components: {
    SocialModalComponent
  },
  data () {
    return {
      user: null,
      showSocialModal: false
    }
  },
  mounted () {
    UsersDataService.getUser()
      .then(response => {
        this.user = response.data
      })
      .catch(error => {
        console.log('Error fetching user:', error)
      })
  },
  methods: {
    logout () {
      // on renvoie vers la page index
      localStorage.removeItem('token')
      if (this.$route.path === '/') {
        location.reload()
      } else {
        this.$router.push('/')
      }
    },
    openSocialModal () {
      console.log('openSocialModal')
      this.showSocialModal = true
      console.log(this.showSocialModal)
    },
    closeSocialModal () {
      this.showSocialModal = false
    }
  }
}
</script>
