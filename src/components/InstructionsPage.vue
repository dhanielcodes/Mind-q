<template>
  <div class="hello">
    <h2><router-link to="/"><img src="../assets/images/back.svg" alt=""></router-link> <span>-</span> Instructions.</h2>
    <div class="main">
      <div v-on:click="take =! take, pop = false" v-bind:class="{open: take}" class="takequiz ins"><h3>Take Quiz</h3> <img src="../assets/images/take_quiz.svg" alt="" srcset=""></div>
      <div v-on:click="pop =! pop, take = false" v-bind:class="{open: pop}" class="popquiz ins"><h3>Pop Quiz</h3> <img src="../assets/images/pop_quiz.svg" alt="" srcset=""></div>
    </div>
    <feedback></feedback>
  </div>
</template>

<script>
export default {
 data() {
   return {
     take: false,
     pop: false
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
  justify-content: space-between;
  align-items: center;
  background: var(--secondary)
}
.ins img{
  width: 100px
}
.popquiz{
  margin-bottom: 60px;
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
  content: 'Answer random questions from different topics ! 🤪, But for now there are just html questions.';
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
.takequiz.open::after{
  opacity: 1;
  top: -30%;
}
.popquiz.open::after{
  opacity: 1;
  top: -30%;
}
</style>
