<template>
  <div class="carousel carousel-center rounded-box p-10">
    <div class="carousel-item">
        <Card :name="'Sarah'" :feedback="'Incredible'" :image="'@/assets/img/noticeUser/user1.png'"/>
    </div>
    <div class="carousel-item">
        <Card :name="'Charles'" :feedback="'Perfect'" :image="'@/assets/img/noticeUser/user3.png'"/>
    </div>
    <div class="carousel-item">
        <Card :name="'Louise'" :feedback="'Miracoulous'" :image="'@/assets/img/noticeUser/user2.png'"/>
    </div>
    <div class="carousel-item">
        <Card :name="'Mathieu'" :feedback="'Fantastic'" :image="'@/assets/img/noticeUser/user4.png'"/>
    </div>
</div>
</template>
<script>
import Card from '../cards/noticeCards.vue'
export default {
  components: {
    Card
  }
}
</script>
