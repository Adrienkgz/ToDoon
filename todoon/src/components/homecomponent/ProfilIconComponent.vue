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

</template>

<style>
a {
    cursor: pointer;
}
</style>

<script>
import UsersDataService from '@/services/UsersDataService'
export default {
  name: 'ProfilIconComponent',
  data () {
    return {
      user: null
    }
  },
  mounted () {
    UsersDataService.getUser()
      .then(response => {
        console.log('user')
        console.log(response)
        this.user = response.data
        console.log('user', this.user)
      })
      .catch(error => {
        console.log('Error fetching user:', error)
      })
  },
  methods: {
    logout () {
      // on renvoie vers la page index
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>
