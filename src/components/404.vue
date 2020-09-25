<template>
  <div class="none">
    <h1>Unavailable Quiz 😕. comming soon</h1>
    <h2>No cheating you can’t find the answers here biko !</h2>
    <div class="img">
      <img src="../assets/images/error.png" alt="" srcset="">
    </div>
    <router-link to="/">Take Me Home 🏠</router-link>
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
.none{
  text-align: center;
}
.none h1{
  font-size: 32px;
  margin-bottom: 20px;
}
.none .img{
  margin-top: 50px;
  width: 400px;
  pointer-events: none;
  margin: auto;
}
.none .img img{
  width: 100%;
}
a{
  margin-top: 10px;
  padding: 10px;
  background: #459AAC;
  border-radius: 10px
}
@media screen and (max-width: 450px){
  .none h1{
    font-size: 30px
  }
  .none h2{
    font-size: 18px;
  }
  .none .img{
    width: 90%;
  }
}
</style>
