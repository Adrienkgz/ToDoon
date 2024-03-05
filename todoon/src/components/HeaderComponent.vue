<template>
    <header class="flex items-center justify-between py-2 px-5">
        <img src="../assets/img/logo-pasteque-bg-removed.png" alt="Logo" class="w-151 h-104">
        <nav class="hidden md:flex space-x-20">
            <a href="#" class="font-black hover:text-gray-600">What</a>
            <a href="#" class="font-black hover:text-gray-600">Why</a>
            <a href="#" class="font-black hover:text-gray-600">About</a>
            <a href="#" class="font-black hover:text-gray-600">Contact</a>
            <router-link to="/" class="font-black">Page 1(temp)</router-link>
            <router-link to="/accueil" class="font-black">Page 2(temp)</router-link>
        </nav>
        <div class="flex justify-end flex-grow space-x-4 ">
            <button class="border border-black rounded-3xl font-black -2xl py-2 px-4 rounded-2 hover:bg-gray-200">Join ToDOON</button>
            <button class="font-black rounded-3xl py-0 px-10 bg-pink-600">Login</button>
        </div>
  </header>
</template>

<style>
header {
    font-size: 20px;
    font-family: 'inter', sans-serif;
}
</style>

<script>
export default {
  name: 'HeaderComponent',
  props: {
  }
}
</script>
