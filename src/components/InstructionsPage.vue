<template>
  <div class="hello">
    <h2><router-link to="/"><img src="../assets/images/back.svg" alt=""></router-link> <span>-</span> Instructions.</h2>
    <div class="main">
      <div v-on:click="take =! take, pop = false, time = false, multi = false" v-bind:class="{open: take}" class="takequiz ins"><h3>Take Quiz</h3> <img src="../assets/images/single.svg" alt="" srcset=""></div>
      <div v-on:click="pop =! pop, take = false, time = false, multi = false" v-bind:class="{open: pop}" class="popquiz ins"><h3>Pop Quiz</h3> <img src="../assets/images/pop_quiz.svg" alt="" srcset=""></div>
      <div v-on:click="time =! time, multi = false, pop = false, take = false" v-bind:class="{open: time}" class="time ins"><h3>Timed test</h3> <img src="../assets/images/time.svg" alt="" srcset=""></div>
      <div v-on:click="multi =! multi, take = false, time = false, pop = false" v-bind:class="{open: multi}" class="multi ins"><h3>Multiplayer</h3> <img src="../assets/images/take_quiz.svg" alt="" srcset=""></div>
    </div>
    <feedback></feedback>
  </div>
</template>

<script>
export default {
 data() {
   return {
     take: false,
     pop: false,
     time: false,
     multi: false
   }
 },
}
</script>

<style scoped>
span{
  color: var(--black);
  pointer-events: none;
}
.ins{
  width: 100%;
  height: 22vh;
  margin: 20px 0;
  display: flex;
  padding: 0 40px;
  cursor: pointer;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background: var(--secondary)
}
.ins img{
  width: 100px
}
.popquiz{
  position: relative;
}
/*--popups--*/
.takequiz{
  position: relative;
}
.takequiz::after{
  content: 'Select any category of your choice and enjoy ! 😎. Will be available soon.';
  position: absolute;
  top: -10%;
  left: 50%;
  padding: 30px;
  width: 220px;
  opacity: 0;
  pointer-events: none;
  background: #4BFFA9;
  color: black;
  border-radius: 2000px;
  transform: translateX(-50%);
  transition: all 300ms;
}
.popquiz::after{
  content: 'Answer random questions from different topics ! 🤪.';
  position: absolute;
  top: -10%;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  color: black;
  padding: 30px;
  width: 220px;
  background: #4BFFA9;
  border-radius: 2000px;
  transform: translateX(-50%);
  transition: all 300ms;
}
.time::after{
  content: 'How fast are you, answer 10 random question in 1min !⚡.';
  position: absolute;
  top: -10%;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  color: black;
  padding: 30px;
  width: 220px;
  background: #4BFFA9;
  border-radius: 2000px;
  transform: translateX(-50%);
  transition: all 300ms;
}
.multi::after{
  content: '👫 Pare up with people answer random questions. Comming soon...';
  position: absolute;
  top: -10%;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  color: black;
  padding: 30px;
  width: 220px;
  background: #4BFFA9;
  border-radius: 2000px;
  transform: translateX(-50%);
  transition: all 300ms;
}
.takequiz.open::after, .popquiz.open::after, .time.open::after, .multi.open::after{
  opacity: 1;
  top: -30%;
}

</style>
