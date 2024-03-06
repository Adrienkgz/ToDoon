<template>
  <div class='max-w-md mx-auto'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <input class="peer h-full w-full outline-none text-sm text-gray-700 pr-2  border-transparent" type="text" id="search" placeholder="Search something.." />
    </div>
  </div>
</template>

<style scoped>
.search-wrapper {
  position: relative;
}

.search-wrapper.active {
  position: relative;
  transition: all 0.3s ease-in-out;
}

.search-wrapper.active .input-holder {
  width: 450px;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
}

.search-wrapper .input-holder .search-input {
  width: 100%;
  height: 50px;
  padding: 0px 70px 0 20px;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  background: transparent;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-family: "Open Sans", Arial, Verdana;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: black;
  transform: translate(0, 60px);
  transition: all 0.3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
  transition-delay: 0.3s;
}

.search-wrapper.active .input-holder .search-input {
  opacity: 1;
  transform: translate(0, 10px);
  border: 1px solid #FF4785;
  border-radius: 20px;
  box-shadow: 2px 2px 0px #d9d9d9;
}

.search-wrapper .input-holder .search-icon {
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 6px;
  background: #fff;
  padding: 0px;
  outline: none;
  position: relative;
  z-index: 2;
  float: right;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.search-wrapper.active .input-holder .search-icon {
  position: relative;
  top: -5px;
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50px;
  transition: background-color 0.30s ease-in 0.38s;
  background-color: transparent;
}

.search-wrapper .input-holder .search-icon span {
  width: 22px;
  height: 22px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  transform: rotate(45deg);
  transition: all 0.4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
}

.search-wrapper.active .input-holder .search-icon span {
  transform: rotate(-45deg);
}

.search-wrapper .input-holder .search-icon span::before,
.search-wrapper .input-holder .search-icon span::after {
  position: absolute;
  content: "";
}

.search-wrapper .input-holder .search-icon span::before {
  width: 4px;
  height: 11px;
  left: 9px;
  top: 18px;
  border-radius: 2px;
  background: #fe5f55;
}

.search-wrapper .input-holder .search-icon span::after {
  width: 14px;
  height: 14px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  border: 4px solid #FF4785;
}

.search-wrapper .close {
  position: absolute;
  z-index: 1;
  top: 24px;
  right: 20px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transform: rotate(-180deg);
  transition: all 0.3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
  transition-delay: 0.2s;
}

.search-wrapper.active .close {
  right: -50px;
  transform: rotate(45deg);
  transition: all 0.6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
  transition-delay: 0.5s;
}

.search-wrapper .close::before,
.search-wrapper .close::after {
  position: absolute;
  content: "";
  background: #fe5f55;
  border-radius: 2px;
}

.search-wrapper .close::before {
  width: 5px;
  height: 25px;
  left: 10px;
  top: 0px;
}

.search-wrapper .close::after {
  width: 25px;
  height: 5px;
  left: 0px;
  top: 10px;
}

@media (max-width: 768px) {
  .search-wrapper {
    left: 15%;
  }
  .search-wrapper.active {
    left: 20%;
  }
  .search-wrapper.active .input-holder {
    width: 15%;
  }
}
</style>

<script>
export default {
  name: 'SearchBarComponent',
  data () {
    return {
      searchText: '',
      isActive: false
    }
  },
  methods: {
    toggleSearch () {
      this.isActive = !this.isActive
      if (!this.isActive) {
        this.searchText = ''
      }
    }
  }
}
</script>
