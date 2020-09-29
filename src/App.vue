<template>
  <div id="app">
    <svg class="watermark" width="911" height="914" viewBox="0 0 911 914" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  d="M1138.73 226.248L1136.85 216.427L572.741 324.622L665.929 -230.239C668.379 -244.827 650.467 -253.78 640.27 -243.064L25.9452 402.489C14.936 414.058 27.2257 432.531 42.1499 426.847L469.298 264.171L638.083 424.791L509.266 874.324C504.946 889.4 523.74 900.158 534.552 888.797L1150.54 241.499C1160.59 230.93 1151.17 213.679 1136.85 216.427L1138.73 226.248Z" stroke="white" stroke-opacity="0.1" stroke-width="20"/>
        </svg>
    <div class="navd">
        <img class="logo" src="./assets/images/logo2.png" alt="" srcset="">    
        <img class="theme" src="./assets/images/theme2.svg" alt="" srcset="">
    </div>
    
    

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


#app{
  color: var(--white);
}
.watermark, svg path{
  position: fixed;
  top: 0;
  right: 0;
  pointer-events: none;
  z-index: -1;
  stroke: var(--white);
  fill: var(--black);
}
.logo svg path{
  fill: var(--white)
}
.logo{
  width: 170px;
}
.navd{
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
}
.theme{
  cursor: pointer;
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
