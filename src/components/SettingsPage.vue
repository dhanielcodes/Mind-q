<template>
  <div>
    <p class="error" v-bind:class="{show: show}">Coming soon</p>
    <h2><router-link to="/"><img src="../assets/images/back.svg" alt=""></router-link> <span>-</span> Settings.</h2>
    <div class="main">
      <div v-on:click="show =! show" class="light"><img src="../assets/images/light_mode.svg" alt=""> <h1>Light 🌞</h1> </div>
      <div class="dark"><img src="../assets/images/dark_mode.svg" alt=""> <h1>Dark 🌚</h1> </div>
    </div>
    <feedback></feedback>
  </div>
</template>

<script>
export default {
 data() {
   return {
     show: false
   }
 },
}
</script>

<style scoped>
span{
  color: var(--black);
  pointer-events: none;
}
.main{
  margin-top: 50px;
  display: grid;
  grid-template-areas: 
  'light dark'
  ;
  height: 50vh;
  grid-gap: 20px;
}
.main .dark{
  grid-area: dark;
  cursor: pointer;
  background: var(--secondary);
  display: grid;
  place-items: center;
}
.main .light{
  grid-area: light;
  cursor: pointer;
  background: var(--secondary);
  display: grid;
  place-items: center;
}
.error{
  position: absolute;
  top: 12%;
  right: 12%;
  padding: 10px;
  color: red;
  border: 2px solid red;
  border-radius: 200px;
  opacity: 0;
  pointer-events: none;
  z-index: 10 ;
}
.error.show{
  animation: error 2s 0s 1 forwards;
}
@keyframes error {
  from{
    top: 15%;
    opacity: 0;
  }
  20%{
    opacity: 1;
    top: 5%;
  }
  80%{
    opacity: 1;
    top: 5%;
  }
  to{
    opacity: 0;
    top: 15%;
  }
}
@media screen and (max-width: 600px){
  .main{
    margin-top: 50px;
    display: grid;
    grid-template-areas: 
    'light'
    'dark'
    ;
    grid-gap: 20px;
  }
  .dark img,
  .light img{
    width: 100px;
  }
}
</style>
