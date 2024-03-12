<template>
  <div class="flex flex-col min-h-screen">
    <HeaderHomeComponent/>
    <div class="flex-grow">
      <div class="flex" id="homeFlex">
        <aside class="w-1/5" id="aside">
          <MenuHomeComponent/>
        </aside>
        <main class="w-4/5 pl-5">
          <div class="flex" id="accueilFilter">
            <div class="flex-grow text-4xl font-black">Accueil</div>
            <div class="flex items-center">
              <div class="filter-container mr-5">
                <button class="filter-button">Filter by: Date <i class="fa fa-caret-down"></i></button>
                <div class="filter-menu">
                  <ul>
                    <li>Date</li>
                    <li>Price</li>
                    <li>Popularity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <appleCarousel/>
        </main>
      </div>
    </div>
    <MainFooter />
  </div>
</template>
<style>
template {
  background-color: aqua;
}
@media only screen and (max-width: 500px) {
  #homeFlex {
    flex-direction: column;
  }
}
</style>
<script>
import MenuHomeComponent from '../components/homecomponent/MenuHomeComponent.vue'
import HeaderHomeComponent from '../components/homecomponent/HeaderHomeComponent.vue'
import appleCarousel from '../components/carousel/appleCarousel.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
  components: {
    MenuHomeComponent,
    HeaderHomeComponent,
    appleCarousel,
    MainFooter
  }
}
</script>
<style>
.filter-container {
  position: static;
  display: inline-block;
}

.filter-button {
  background-color: #ffffff00;
  color: #FF4785;
  border: none;
  cursor: pointer;
  position: static;
  display: flex;
  align-items: center;
}

.filter-button i {
  margin-left: 10px;
}

.filter-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff38;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 9999;
}

.filter-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.filter-menu ul li {
  padding: 10px 20px;
  cursor: pointer;
}

.filter-menu ul li:hover {
  background-color: #f2f2f234;
}

.filter-button:focus + .filter-menu {
  display: block;
}
@media only screen and (max-width: 600px) {
  #accueilFilter {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 500px) {
  #aside {
    width: 100%;
  }
}
</style>
