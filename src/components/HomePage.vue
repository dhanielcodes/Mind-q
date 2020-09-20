<template>
  <div class="hello">
    <h1>Home.</h1>
    <div class="main">
      <div class="takeQuize"><h1>Take Quiz</h1> <img src="../assets/images/take_quiz.svg" alt=""></div>
      <div class="other">
        <div class="popQuiz"><h1>Pop Quiz</h1> </div>
        <div class="settings"><h1>Settings</h1></div>
      </div>
    </div>
    <div class="instructions"><h1>instructions</h1></div>
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
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  height: 50vh;
  align-items: center;
}
.main .takeQuize{
  width: 45%;
  height: 100%;
  background: var(--secondary);
  display: grid;
  place-items: center;
}
.main .other{
  height: 100%;
  width: 45%;
}
.main .other .popQuiz{
  height: 45%;
  background: var(--secondary);
  margin-bottom: 30px;  
}
.main .other .settings{
  height: 45%;
  background: var(--secondary);
}
.instructions{
  width: 100%;
  height: 20vh;
  background: var(--secondary);
  margin-top: 20px
}
</style>
