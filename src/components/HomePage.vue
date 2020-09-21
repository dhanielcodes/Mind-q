<template>
  <div>
    <h1>Home.</h1>
    <div class="main">
      <router-link to="/category" class="takeQuize"><h1>Take Quiz</h1> <img src="../assets/images/take_quiz.svg" alt=""></router-link>
      <router-link to="/popquiz" class="popQuiz"><h1>Pop Quiz</h1> <img src="../assets/images/pop_quiz.svg" alt=""></router-link>
      <router-link to="/settings" class="settings"><h1>Settings</h1> <img src="../assets/images/settings.svg" alt=""></router-link>
      <router-link to="/instructions" class="instructions"><h1>instructions</h1> <img src="../assets/images/instructions.svg" alt=""></router-link>
    </div>
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

<style scoped>
.main{
  margin-top: 30px;
  display: grid;
  grid-gap: 20px;
  height: 70vh;
  grid-template-areas: 
  'takequiz popquiz'
  'takequiz settings'
  'instructions instructions'
  ;
}
.main .takeQuize{
  grid-area: takequiz;
  background: var(--secondary);
  display: grid;
  place-items: center;
}
.main .takeQuize img{
  transform: rotate(20deg)
}
.main .popQuiz{
  grid-area: popquiz;
  background: var(--secondary);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.main .settings{
  grid-area: settings;
  background: var(--secondary);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.main .instructions{
  grid-area: instructions;
  background: var(--secondary);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.main .instructions img{
  align-self: flex-end;
}
@media screen and (max-width: 700px){
  .main{
    grid-template-areas: 
      'takequiz takequiz'
      'popquiz popquiz'
      'settings settings'
      'instructions instructions'
    ;
  }
  .main .takeQuize{
    grid-area: takequiz;
    background: var(--secondary);
    display: flex;
    place-items: center;
    justify-content: space-around;
    align-items: center;
  }
  img{
    width: 60px;
    height: 60px;
  }
  .main .instructions img{
    display: none;
  }
}
</style>
