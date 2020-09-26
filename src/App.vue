<template>
  <div id="app">
    <img class="watermark" alt="Vue logo" src="./assets/images/watermark.svg">
    <img class="logo" alt="Vue logo" src="./assets/images/logo2.png">
    <transition name="view">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
}
</script>

<style>
:root{
  --black: black;
  --white: white;
  --secondary: #1D1D1D;
}
#app{
  color: var(--white);
}
.watermark{
  position: fixed;
  top: 0;
  right: 0;
  pointer-events: none;
  z-index: -1;
}
.logo{
  margin: 25px 0;
  width: 150px
}
a{
  color: var(--white);
  text-decoration: none
}
.view-enter-active, .view-leave-active{
  transition: all 400ms;
}
.view-enter-active{
  transition-delay: 400ms;
}
.view-enter, .view-leave-to{
  opacity :0
}
.view-leave, .view-enter-to{
  opacity: 1;
}
</style>
