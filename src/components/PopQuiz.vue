<template>
    <div>
        <h2><router-link to="/"><img src="../assets/images/back.svg" alt=""></router-link> <span>-</span> Pop Quiz.</h2>

        <div class="pop"  v-if="quiz">
          <div class="quiz" v-for="(item, index) in questions.slice(a,b)" :key="index" >
            <div class="side1">
              <div class="progress">
                <div class="counter"><p>Questions {{b}}/{{questions.length}}</p></div>
                <div class="bar">
                  <div class="metre"></div>
                </div>
              </div>
              <div class="question">
                <h2>{{item.question}}</h2>
              </div>
              <div class="btn">
                <button @click="next" v-if="skipBtn" class="skip">SKIP QUESTION</button>
                <button @click="next" v-if="nextBtn" class="nxt">NEXT</button>
              </div>

            </div>
            <div class="side2">
              <ul>
                <li  v-for="(items, index) in item.suggestions" :key="index" :class="select ? check(items) : ''" v-on:click='selectResponse(items)'>{{items.answer}}</li>
              </ul>
            </div>
          </div>        
        </div>


        <div class="score" v-if="scoreDisplay">
          <h1>Completed !</h1>
          <p class="s">Correct answers - {{score/200}} / {{questions.length}}</p>
          <img class="s" src="../assets/images/celebration.svg" alt="" srcset="">
          <h2 class="s">You scored - {{score}} points</h2>
          <div class="btn s">
            <button @click="restart">Restart</button>
            <button ><router-link to='/'>Back Home</router-link></button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: 'HOW MANY GRAMMYS DOES DAVIDO HAVE',
          suggestions: [
            {answer: '0'},
            {answer: '2'},
            {answer: '10'},
            {answer: '5', correct: true},
          ]
        },
        {
          question: 'HOW MANY GRAMMYS DOES WIZKID HAVE',
          suggestions: [
            {answer: '0'},
            {answer: '2'},
            {answer: '10'},
            {answer: '5', correct: true},
          ]
        },
        {
          question: 'HOW MANY GRAMMYS DOES BURNA BOY HAVE',
          suggestions: [
            {answer: '0'},
            {answer: '2'},
            {answer: '10'},
            {answer: '5', correct: true},
          ]
        }
      ],
      a: 0,
      b: 1,
      select: false,
      score: 0,
      quiz: true,
      scoreDisplay: false,
      nextBtn: false,
      skipBtn: true,
    }
  },
  methods: {
    next(){
      if(this.questions.length - 1 == this.a){
        this.quiz = false
        this.scoreDisplay = true
      }else{
        this.a += 1
        this.b += 1
        this.select = false
        this.nextBtn = false
        this.skipBtn = true
      }
    },
    selectResponse(e){
      if(e.correct){
        this.score += 200
      }
      this.select = true
      this.nextBtn = true
      this.skipBtn = false
    },
    check(status){
      if(status.correct){
        return 'correct'        
      }else{
        return 'wrong'
      }
    },
    restart(){
      Object.assign(this.$data, this.$options.data())
    }
  },
}
</script>

<style scoped>
span{
  color: var(--black);
  pointer-events: none;
}
.quiz{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  width: 650px;
  margin: 30px auto;
  height: 65vh;
}
.quiz .side1{
  background: #202E51;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.side1 .counter{
  background: var(--secondary);
  padding: 10px 15px;
  border-radius: 10px;
  align-self: flex-start;
}
.progress .bar{
  width: 100%;
  height: 10px;
  margin: 10px 0;
  border-radius: 100px; 
  background: var(--secondary)
}
.bar .metre{
  width: 20px;
  height: 100%;
  background: #FFFFFF;
  border-radius: 100px
}
.btn{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.side1 .skip, .nxt, .score button{
  background: #F25817;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
}
button:nth-child(2){
  background: #459AAC;
  padding: 10px 20px
}
.nxt{
  background: #459AAC;
}
.quiz .side2 ul{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  list-style: none;
  height: 100%;
}
ul li{
  background: #1D1D1D;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
}
ul li.correct{
  background: #4BFFA9;
  color: black;  
}
ul li.wrong{
  background: #F13555;
}
.score{
  text-align: center;
}
.score img{
  width: 300px;
}
.score .s{
  margin: 15px 0;
}
@media screen and (max-width: 720px){
  .quiz{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 50px;
    width: 100%;
    margin: 30px auto;
    height: 70vh;
  }
  ul li{
    margin: 5px 0;
  }
}
</style>
