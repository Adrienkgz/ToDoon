<template>
    <div class="card">
        <div class="card2">
            <div class="flex jusitify-content">
                <a>{{ userName }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'noticeCards',
  props: {
    userName: {
      type: String,
      required: true
    },
    userImage: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.card {
  width: 190px;
  height: 254px;
  background-image: linear-gradient(163deg, #FF4785 0%, #FF4785 100%);
  border-radius: 20px;

  transition: all .3s;
}

.card2 {
  width: 190px;
  height: 254px;
  background-color: #ffffff;
  border-radius: 10px;
  border-width: 2px;
  border-color: #FF4785;
  transition: all .2s;
}

.card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0px 0px 30px 1px #FF4785;
}
</style>
