<template>
    <SplideSlide>
          <smallTaskCard v-for="task in tasks" :key="task.name" :task="task"/>
    </SplideSlide>
</template>