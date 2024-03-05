<template>
    <!--Logo Part-->
    <div class="flex justify-center bg-gray-200  items-center">
        <router-link to="/">
            <img src="../assets/img/logo-pasteque-bg-removed.png">
        </router-link>
        <h1 class="w-2/3 text-4xl font-bold text-right px-8" style="font-size: 2vw;">ToDOON</h1>
    </div>

    <!-- Sidebar -->
    <div class="w-64 bg-gray-200 ">
        <!-- Menu items -->
        <nav class="flex flex-col p-4 space-y-1">
            <!-- High Priority -->
            <a href="#" class="flex items-center px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white">
                <img src="../assets/img/image 8.png" alt="High Priority" class="h-6 w-6">
                <span class="ml-2">High Priority</span>
            </a>

            <!-- Today -->
            <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-300">
                <img src="../assets/img/image 2.png" alt="Today" class="h-6 w-6">
                <span class="ml-2">Today</span>
            </a>

            <!-- To do -->
            <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-300">
                <img src="../assets/img/image 3.png" alt="To do" class="h-6 w-6">
                <span class="ml-2">To do</span>
            </a>

            <!-- Doing -->
            <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-300">
                <img src="../assets/img/image 4.png" alt="Doing" class="h-6 w-6">
                <span class="ml-2">Doing</span>
            </a>

            <!-- Done -->
            <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-300">
                <img src="../assets/img/image 5.png" alt="Done" class="h-6 w-6"> <!-- Remplacez avec le chemin de votre icône -->
                <span class="ml-2">Done</span>
            </a>
        </nav>

        <!-- Separator -->
        <div class="border-t border-gray-300 my-4"></div>

        <!-- Work -->
        <a href="#" class="flex justify-between items-center px-4 py-2 hover:bg-gray-300">
            <img src="../assets/img/image 7.png" alt="Work" class="h-6 w-6"> <!-- Remplacez avec le chemin de votre icône -->
            <span class="font-medium">Work</span>
            <img src="../assets/img/image 6.png" alt="Expand" class="h-6 w-6"> <!-- Remplacez avec le chemin de votre icône -->
        </a>
    </div>
    <!-- Content area -->
    <div class="flex-1 p-4">
          <!-- Le contenu de votre page ici -->
    </div>
</template>

<script>
export default {
  name: 'MenuHomeComponent',
  props: {
  }
}
</script>
