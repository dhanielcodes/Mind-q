<template>
  <div id="app">
    <img class="watermark" alt="Vue logo" src="./assets/images/watermark.svg">
    <img class="logo" alt="Vue logo" src="./assets/images/logo.png">
    <router-view></router-view>
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
  z-index: -1;
}
.logo{
  margin: 10px 0;
}
</style>
