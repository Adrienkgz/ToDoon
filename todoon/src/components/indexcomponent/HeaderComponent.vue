<template>
    <header class="flex items-center justify-between py-2 px-5">
        <img src="../../assets/img/logo-pasteque-bg-removed.png" alt="Logo" class="w-151 h-104">
        <nav class="hidden md:flex sm:space-x-10 md:space-x-20">
            <router-link to="/" class="font-black hover:text-gray-600">Home</router-link>
            <router-link to="/about" class="font-black hover:text-gray-600">About</router-link>
            <router-link to="/contact" class="font-black hover:text-gray-600">Contact</router-link>
            <router-link to="/home" class="font-black">Page 2(temp)</router-link>
        </nav>
        <div class="flex justify-end flex-grow space-x-4 ">
            <button class="ui-btn" @click="openSignPopUp"><span>Join_ToDOON</span></button>
            <button class="button" @click="openPopup">Login</button>
        </div>
  </header>
  <Teleport to="body">
      <Modal :showModal="showModal" @close="showModal = false" />
      <ModalSign :showModal="showModalSign" @close="showModalSign = false" />
    </Teleport>
</template>

<style>
header {
    font-size: 20px;
    font-family: 'inter', sans-serif;
}
</style>

<script>
import Modal from '../indexcomponent/LoginPopUp.vue'
import ModalSign from '../indexcomponent/SignInPopUp.vue'

import { ref } from 'vue'
export default {
  components: {
    Modal,
    ModalSign
  },
  name: 'HeaderComponent',
  props: {
  },
  setup () {
    const showModal = ref(false)
    const showModalSign = ref(false)

    const openPopup = () => {
      showModal.value = true
    }

    const openSignPopUp = () => {
      showModalSign.value = true
    }

    return {
      showModal,
      showModalSign,
      openPopup,
      openSignPopUp
    }
  }
}
</script>
<style>
.ui-btn {
  --btn-default-bg: rgb(255, 255, 255);
  --btn-padding: 15px 20px;
  --btn-hover-bg: #FF4785;
  --btn-transition: .1s;
  --btn-letter-spacing: .1rem;
  --btn-animation-duration: 1.2s;
  --btn-shadow-color: rgba(0, 0, 0, 0.137);
  --btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
  --hover-btn-color: #FFF;
  --default-btn-color: #FF4785;
  --font-size: 16px;
  /* 👆 this field should not be empty */
  --font-weight: 600;
  --font-family: Menlo,Roboto Mono,monospace;
  /* 👆 this field should not be empty */
}

/* button settings 👆 */

.ui-btn {
  box-sizing: border-box;
  padding: var(--btn-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--default-btn-color);
  font: var(--font-weight) var(--font-size) var(--font-family);
  background: var(--btn-default-bg);
  border: none;
  cursor: pointer;
  transition: var(--btn-transition);
  overflow: hidden;
  box-shadow: var(--btn-shadow);
  border-width: 4px;
  border-color: #FF4785;
  border-radius: 25px;
}

.ui-btn span {
  color:#FF4785;
  letter-spacing: var(--btn-letter-spacing);
  transition: var(--btn-transition);
  box-sizing: border-box;
  position: relative;
  background: inherit;
}

.ui-btn span::before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  background: inherit;
  color: #FF4785;
}

.ui-btn:hover {
  background: var(--btn-hover-bg);
  border-width: 2px;
  border-color: var(--btn-hover-bg);
}

.ui-btn:hover span {
  color: var(--hover-btn-color);
}
.ui-btn:active {
  background-color: #FF4785; /* ou n'importe quelle couleur plus foncée que vous préférez */
  color: #FFF; /* pour que le texte reste visible sur la nouvelle couleur de fond */
}
.ui-btn:active span, .ui-btn::after span{
  color: #FF4785;
}

.ui-btn:hover span::before, .ui-btn:focus span::before {
  animation: chitchat linear both var(--btn-animation-duration);
}

@keyframes chitchat {
  0% {
    content: "#%";
  }

  5% {
    content: ".*(ç";
  }

  10% {
    content: "^{2?";
  }

  15% {
    content: "-!@#2:";
  }

  20% {
    content: "#$è/=_+";
  }

  25% {
    content: "№:/+0^Jù=";
  }

  30% {
    content: "#{*+€?.^";
  }

  35% {
    content: "@}-6+?2%.?`";
  }

  40% {
    content: "?{+(4@65Là%";
  }

  45% {
    content: "=.,0#/@G^§^!";
  }

  50% {
    content: "?2ù#*='é-°@%&";
  }

  55% {
    content: "\;1}?&#/-¨]";
  }

  60% {
    content: "?{§%¶:°%";
    right: 0;
  }

  65% {
    content: "|{f%[ç4";
    right: 0;
  }

  70% {
    content: "{4%ù0%";
    right: 0;
  }

  75% {
    content: "'1_?0$<";
    right: 0;
  }

  80% {
    content: "{0#£%";
    right: 0;
  }

  85% {
    content: "]>*'";
    right: 0;
  }

  90% {
    content: "4/";
    right: 0;
  }

  95% {
    content: "2";
    right: 0;
  }

  100% {
    content: "";
    right: 0;
  }
}
.button {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 18px;
  color: #FF4785;
  border: 2px solid #FF4785;
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: #FF4785;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: #ffffff;
  scale: 1.1;
  box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
}

.button:active {
  scale: 1;
}
</style>
