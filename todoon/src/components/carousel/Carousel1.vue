<template>

<div id="carousel">
   <div class="hideLeft">
    <img src="https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg">
  </div>

  <div class="prevLeftSecond">
    <img src="https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg">
  </div>

  <div class="prev">
    <img src="https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg">
  </div>

  <div class="selected">
    <img src="https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg">
  </div>

  <div class="next">
    <img src="https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg">
  </div>

  <div class="nextRightSecond">
    <img src="https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg">
  </div>

  <div class="hideRight">
    <img src="https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg">
  </div>

</div>

<div class="buttons">
  <button id="prev">Prev</button>
  <button id="next">Next</button>
</div>
</template>
<style>
html, body, main {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

#carousel {
    position: relative;
    height: 400px;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
}

#carousel div {
    position: absolute;
    transition: transform 1s, left 1s, opacity 1s, z-index 0s;
    opacity: 1;
}

#carousel div.hideLeft {
    left: 0%;
    opacity: 0;
    transform: translateY(50%) translateX(-50%);
}

#carousel div.hideRight {
    left: 100%;
    opacity: 0;
    transform: translateY(50%) translateX(-50%);
}

#carousel div.prev {
    z-index: 5;
    left: 30%;
    transform: translateY(50px) translateX(-50%);
}

#carousel div.prevLeftSecond {
    z-index: 4;
    left: 15%;
    transform: translateY(50%) translateX(-50%);
    opacity: .7;
}

#carousel div.selected {
    z-index: 10;
    left: 50%;
    transform: translateY(0px) translateX(-50%);
}

#carousel div.next {
    z-index: 5;
    left: 70%;
    transform: translateY(50px) translateX(-50%);
}

#carousel div.nextRightSecond {
    z-index: 4;
    left: 85%;
    transform: translateY(50%) translateX(-50%);
    opacity: .7;
}

#carousel div img {
    width: 400px;
    transition: width 1s;
}

#carousel div.hideLeft img,
#carousel div.hideRight img {
    width: 200px;
}

#carousel div.prev img {
    width: 300px;
}

#carousel div.prevLeftSecond img,
#carousel div.nextRightSecond img {
    width: 200px;
}

.buttons {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
}
</style>

<script>

export default {
  name: 'Carousel1Component',
  mounted () {
    function moveToSelected (element) {
      let selected
      if (element === 'next') {
        selected = this.$el.querySelector('.selected')
        if (selected && selected.nextElementSibling) {
          selected = selected.nextElementSibling
        } else {
          // Gérer le cas où il n'y a pas d'élément suivant
          return
        }
      } else if (element === 'prev') {
        selected = this.$el.querySelector('.selected')
        if (selected && selected.previousElementSibling) {
          selected = selected.previousElementSibling
        } else {
          // Gérer le cas où il n'y a pas d'élément précédent
          return
        }
      } else {
        selected = element
      }

      const next = selected.nextElementSibling
      const prev = selected.previousElementSibling
      const prevSecond = prev.previousElementSibling
      const nextSecond = next.nextElementSibling

      selected.classList.remove('prev', 'next', 'hideLeft', 'hideRight')
      selected.classList.add('selected')

      prev.classList.remove('prevLeftSecond')
      prev.classList.add('prev')
      next.classList.remove('nextRightSecond')
      next.classList.add('next')

      nextSecond.classList.remove('hideRight')
      nextSecond.classList.add('nextRightSecond')

      prevSecond.classList.remove('hideLeft')
      prevSecond.classList.add('prevLeftSecond')
    }

    document.addEventListener('keydown', function (e) {
      switch (e.which) {
        case 37: // left
          moveToSelected('prev')
          break

        case 39: // right
          moveToSelected('next')
          break

        default:
          return
      }
      e.preventDefault()
    })

    const carouselDivs = this.$el.querySelectorAll('#carousel div')
    carouselDivs.forEach(function (div) {
      div.addEventListener('click', function () {
        moveToSelected(div)
      })
    })

    const prevButton = this.$el.querySelector('#prev')
    prevButton.addEventListener('click', function () {
      moveToSelected('prev')
    })

    const nextButton = this.$el.querySelector('#next')
    nextButton.addEventListener('click', function () {
      moveToSelected('next')
    })
  }
}
</script>
