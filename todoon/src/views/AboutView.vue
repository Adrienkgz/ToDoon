<template>
  <div>
    <HeaderComponent/>
      <smallTaskCard v-for="task in tasks" :key="task.name" :task="task"/>
    <MainFooter/>
  </div>
</template>

<script>
import HeaderComponent from '../components/indexcomponent/HeaderComponent.vue'
import MainFooter from '../components/MainFooter.vue'
import smallTaskCard from '../components/cards/smallTaskCard.vue'

export default {
  components: {
    HeaderComponent,
    smallTaskCard,
    MainFooter
  },
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    // Read the data
    fetch('')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.tasks = data
      })
  }
}
</script>
