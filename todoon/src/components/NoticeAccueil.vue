<template>
    <smallLine/>
    <div class="flex relative space-x-8 px-24">
      <noticeCards :userName="'Louis'" :userImage="'3000 users'"/>
      <noticeCards :userName="'Louis'" :userImage="'3000 users'"/>
      <noticeCards :userName="'Louis'" :userImage="'3000 users'"/>
      <noticeCards :userName="'Louis'" :userImage="'3000 users'"/>
      <noticeCards :userName="'Louis'" :userImage="'3000 users'"/>
    </div>
    <smallLine/>
</template>
<script>
import noticeCards from './cards/noticeCards.vue'
import smallLine from './line/smallLine.vue'

export default {
  components: {
    noticeCards,
    smallLine
  }
}
</script>
