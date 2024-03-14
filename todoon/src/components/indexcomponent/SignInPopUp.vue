<template>
    <transition name="modal-fade">
      <div v-if="showModal" class="modal-mask">
        <div class=" max-w-md z-50 flex-col p-4 rounded-lg text-black bg-white h-30% w-1/2 md:mx-auto md:mt-10 md:mb-auto sm:mx-auto sm:mt-10 sm:mb-auto min-w-48">
          <div class="flex text-2xl justify-center">
            <div class="grow"></div>
            <p class=" grow-0 font-bold mb-2 text-[#1e0e4b]"> Welcome to&nbsp;</p>
            <span class=" grow-0 text-[#FF4785]">ToDOON</span>
            <div class="grow"></div>
            <p @click="closeModal" class=" grow-0 mt-1 w-5 h-5"><img class="h-5 w-5 bg-pink" src="../../assets/img/xmark.svg" alt="xmark" id="closebutton"></p>
          </div>
          <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
          <form @submit.prevent="signup" class="flex flex-col gap-3">
            <!-- A changer niveau style -->
          <label class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal">First Name</label>
          <input type="text" id="firstName" aria-label="First Name" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" placeholder="First Name" v-model="firstName" required>
          <label class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal">Last Name</label>
          <input type="text" id="lastName" aria-label="Last Name" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" placeholder="Last Name" v-model="lastName" required>
          <label class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal">Birth Day</label>
          <input type="date" id="BirthDate" aria-label="Birthday" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" placeholder="Birth Date" v-model="birthday" required>
          <div class="block relative">
              <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
              <input type="text" id="email" aria-label="Email" :class="{'border-red-500 border-2':emailValidationError}" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" placeholder="E-mail" v-model="email" required @focus="verifyEmailFormat = true">
              <label v-if="!checkEmailFormat() && verifyEmailFormat && email !== ''" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mt-1">Please enter a valid email address.</label>
          </div>
          <div class="block relative">
              <label for="password" id="labelPassword" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
              <input type="password" id="password" aria-label="Password" :class="{'border-red-500 border-2': passwordRequirementsValidationError}" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" placeholder="Password" v-model="password" required @focus="showPasswordRequirements = true, passwordRequirementsValidationError=false" @blur="showPasswordRequirements = false">
          </div>
          <div v-if="showPasswordRequirements" id="passwordrequirements">
            <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password Requirements</label>
            <ul class="list-disc ml-5 text-xs">
              <li :class="{ 'text-pinky': checkPasswordRequirements().uppercase, 'text-gray-500': !checkPasswordRequirements().uppercase }">At least one uppercase letter</li>
              <li :class="{ 'text-pinky': checkPasswordRequirements().symboles, 'text-gray-500': !checkPasswordRequirements().symboles }">At least one symboles letter</li>
              <li :class="{ 'text-pinky': checkPasswordRequirements().number, 'text-gray-500': !checkPasswordRequirements().number }">At least one number</li>
              <li :class="{ 'text-pinky': checkPasswordRequirements().characters, 'text-gray-500': !checkPasswordRequirements().characters }">At least 8 characters</li>
            </ul>
          </div>
          <div class="block relative">
              <label for="password" id="labelVerifyPassword" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Verify Password</label>
              <div class="relative">
                <input type="password" id="passwordVerify" aria-label="Password" :class="{'border-red-500 border-2': passwordRequirementsValidationError}" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" placeholder="Verify Password" v-model="verifyPassword" required @focus="verifyPasswordMatch = true, passwordRequirementsValidationError=false" @blur="verifyPasswordMatch = false" >
                <img v-if="!checkPasswordRequirements().passwordMatch && verifyPasswordMatch" class="absolute w-[30px] scale-[0.8] top-2 right-2" src="../../assets/img/svg/exclamationmark.triangle.red.svg" alt="">
              </div>
          </div>
          <div>
              <a class="text-sm text-[#FF4785] hover:underline" href="#">Forgot your password?</a>
          </div>
          <button type="submit" class="bg-[#FF4785] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal focus:outline-none focus:ring focus:border-blue-300 hover:bg-pink-400">Submit</button>
          </form>
          </div>
      </div>
    </transition>
  </template>
<script>
import UsersDataService from '@/services/UsersDataService'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      birthday: '',
      email: '',
      password: '',
      avatar: 'avatar-bluebird',
      verifyPassword: '',
      verifyEmailFormat: false,
      emailValidationError: false,
      showPasswordRequirements: false,
      passwordRequirementsValidationError: false,
      verifyPasswordMatch: false
    }
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    title: String
  },
  methods: {
    signup () {
      const newuser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        avatar: 'avatar-bluebird.png',
        birthday: this.birthday
      }
      if (!this.checkPassword()) {
        console.log('password false')
        this.passwordRequirementsValidationError = true
        return
      }
      if (!this.checkEmailFormat()) {
        console.log('email false')
        this.emailValidationError = true
        return
      }
      if (!this.checkEmailFormat()) {
        console.log('email false')
        this.emailValidationError = true
        return
      }
      UsersDataService.signup(newuser)
        .then(response => {
          localStorage.setItem('token', response.data.token)
          this.$router.push('/home') // Redirection après avoir défini le token
        })
        .catch(e => {
          console.log(e)
          // Affiche message erreur
          alert('Erreur lors de l\'inscription')
        })
    },
    closeModal () {
      console.log('close')
      this.$emit('close')
    },
    checkPasswordRequirements () {
      const uppercase = /[A-Z]/.test(this.password)
      const symboles = /[!@#$%^&*(),.?":{}|<>]/.test(this.password)
      const number = /[0-9]/.test(this.password)
      const characters = this.password.length >= 8
      const passwordMatch = this.password === this.verifyPassword

      return {
        uppercase,
        symboles,
        number,
        characters,
        passwordMatch
      }
    },
    checkPassword () {
      return this.checkPasswordRequirements().passwordMatch && this.checkPasswordRequirements().uppercase && this.checkPasswordRequirements().symboles && this.checkPasswordRequirements().number && this.checkPasswordRequirements().characters && this.checkEmailFormat()
    },
    checkEmailFormat () {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(this.email)
    }
  }
}
</script>
  <style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.5s;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: all 0.5s ease;
  }
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }
  .modal-fade-enter-to,
  .modal-fade-leave-from {
    opacity: 1;
  }

  #closebutton {
    cursor: pointer;
  }
  </style>
