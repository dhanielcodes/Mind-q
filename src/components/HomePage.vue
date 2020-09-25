<template>
  <div>
    <h1>Activity 🤸‍♂️</h1>
    <div class="main">
      <div @click="category = true" class="takeQuize"><h1>Take Quiz</h1> <img src="../assets/images/single.svg" alt=""></div>
      <router-link to="/popquiz" class="popQuiz"><h1>Pop Quiz</h1> <img src="../assets/images/pop_quiz.svg" alt=""></router-link>
      <router-link to="/time" class="timed"><h1>Timed test</h1> <img src="../assets/images/time.svg" alt=""></router-link>
      <router-link to="/multi" class="multi"><h1>Multiplayer</h1> <img src="../assets/images/take_quiz.svg" alt=""></router-link>
      <router-link to="/settings" class="settings"><h1>Settings</h1> <img src="../assets/images/settings.svg" alt=""></router-link>
      <router-link to="/instructions" class="instructions"><h1>instructions</h1> <img src="../assets/images/instructions.svg" alt=""></router-link>
    </div>
    <div class="overlay" v-if="category">
      <h2>Select option.</h2>
      <img src="../assets/images/exit.svg" alt="" @click="category = false" class="exit">
     <div class="categories">
      <div class="music cat">
        <img src="../assets/images/music_category.svg" alt="" srcset="">
        <h2>Music</h2>
      </div>
      <div class="entertainment cat">
        <img src="../assets/images/entertainment_category.svg" alt="" srcset="">
        <h2>Entertainment</h2>
      </div>
      <div class="lifestyle cat">
        <img src="../assets/images/lifestyle_category.svg" alt="" srcset="">
        <h2>Lifestyle</h2>
      </div>
      <div class="tech cat">
        <img src="../assets/images/tech_category.svg" alt="" srcset="">
        <h2>Tech</h2>
      </div>
      <div class="sports cat">
        <img src="../assets/images/sports_category.svg" alt="" srcset="">
        <h2>Sports</h2>
      </div>
      <div class="gaming cat">
        <img src="../assets/images/game_category.svg" alt="" srcset="">
        <h2>Gaming</h2>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
 data() {
   return {
     category: false
   }
 },
 methods: {
   toggle(){
     this.category = true
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
  'takequiz popquiz timed'
  'multi multi settings'
  'instructions instructions instructions'
  ;
}
.main .takeQuize{
  grid-area: takequiz;
  background: var(--secondary);
   display: flex;
  justify-content: space-around;
  align-items: center; 
  cursor: pointer;
  position: relative;
  padding: 0 15px;
  font-size: 13px;
}
a{
  padding: 0 15px;
  font-size: 13px;
}
.main .takeQuize img{
  transform: rotate(20deg);
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

.main .timed{
  grid-area: timed;
    background: var(--secondary);
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.main .multi{
  grid-area: multi;
    background: var(--secondary);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media screen and (max-width: 800px){
  .main{
    grid-template-areas: 
      'takequiz takequiz'
      'popquiz popquiz'
      'timed timed'
      'multi multi'
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

/* OVERLAY */
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.719);
  width: 100%;
  display: grid;
  place-items: center;
  height: 100vh;
}
.exit{
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 30px;
}
.categories{
  margin: 0 auto;
  margin-top: 20px;
  display: grid;
  height: 70vh;
  width: 80%;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  overflow: hidden;
  padding: 10px;
  overflow-y: scroll;
}
.categories::-webkit-scrollbar{
  width: 7px;
}
.categories::-webkit-scrollbar-thumb{
  background: var(--white);
  border-radius: 20px;
}
.cat{
  background: var(--secondary);
  display: grid;
  padding: 20px;
  place-items: center;
  border-radius: 20px;
  position: relative;
}
.cat img{
  opacity: 10%;
}
.cat h2{
  opacity: 10%;
}
.cat::after{
  content: 'coming soon';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px;
  border-radius: 200px;
  border: 3px solid yellow;
  color: yellow;
}
@media screen and (max-width: 650px) {
  .categories{
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  }
}
@media screen and (max-width: 500px){
  .categories{
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto, 1fr);
  } 
}
</style>
