<template>
  <div class="hello">
    <h1><router-link to="/"><img src="../assets/images/back.svg" alt=""></router-link> <span>-</span> Choose Quiz.</h1>

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
span{
  color: var(--black);
  pointer-events: none;
}
.categories{
  margin-top: 20px;
  display: grid;
  height: 70vh;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
  overflow-y: scroll;
}
.categories::-webkit-scrollbar{
  width: 7px;
}
.categories::-webkit-scrollbar-thumb{
  background: var(--white);
}
.cat{
  background: var(--secondary);
  display: grid;
  padding: 20px;
  place-items: center;
  cursor: pointer;
}
@media screen and (max-width: 650px) {
  .categories{
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
@media screen and (max-width: 500px){
  .categories{
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  } 
}
</style>
