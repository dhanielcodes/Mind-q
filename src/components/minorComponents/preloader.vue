<template>
    <div class="loader">
        <img src="../../assets/images/logo2.png" alt="">
        <div class="bar">
            <div class="meter"></div>
        </div>
        <h3>Loading...</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
.loader{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: black;
    z-index: 10;
    display: grid;
    place-items: center;
    animation: move 2s 3s 1 forwards;
}
@keyframes move{
    to{
        opacity: 0;
        left: -100%;
    }
}
.bar{
  width: 600px;
  height: 20px;
  margin: 10px 0;
  border-radius: 100px; 
  background: var(--secondary)
}
.bar .meter{
  height: 100%;
  background: #459AAC;
  border-radius: 100px;
  transition: all 300ms;
  animation: load 2s 0s 1 forwards;
}
@keyframes load{
    0%{
        width: 0%;
    }
    100%{
        width: 100%;
    }
}
@media screen and (max-width: 620px){
    .bar{
        width: 90%;
    }
}
</style>
