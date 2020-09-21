<template>
<div class="feedback">
    <div class="mains">
        <h1>Feedback</h1> 
        <div class="socials">
            <a href="http://adekoyadaniel53@gmail.com" target="_blank">adekoyadaniel53@gmail.com</a>
            <div class="media">
                <a href="https://www.linkedin.com/in/daniel-adekoya-010810192/"><img src="../../assets/images/linkedin.svg" alt=""></a>
                <a href="https://twitter.com/DanielAdekoya11"><img src="../../assets/images/twitter.svg" alt=""></a>
                <a href="https://www.instagram.com/danieladekoya_/"><img src="../../assets/images/instagram.svg" alt=""></a>
            </div>
        </div>
    </div>
    <h3>&copy;copyright 2020. MIND-Q</h3>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mains{
    margin-top: 20px;
    width: 100%;
    background: var(--secondary);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
}
.media{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    margin-left: auto
}
h3{
    opacity: 30%;
    text-align: center;
    margin-top: 10px;
}
a{
    text-decoration: underline;
}
@media screen and (max-width: 600px){
  .mains{
      flex-direction: column;
      padding: 20px 0;
  }
  .media{
      margin: 10px auto;
  }
}
</style>
