<template>
    <div>
        <h2><router-link to="/"><img src="../assets/images/back.svg" alt=""></router-link> <span>-</span> Pop Quiz.</h2>
        <!-- INFO POP UP BEFORE GAME STARTS -->
        <div class="info" v-if="info">
          <h1>Pop Quiz</h1>
          <h3>Answer random questions to test your overall knowledge, no google anything o. 👺</h3>
          <p>10 questions - Total</p>
          <div class="btns">
            <button @click="countDown">Start</button><button><router-link to="/">Cancel</router-link></button>
          </div>
        </div>
        <!-- COUNTER -->
        <div class="count" v-if="count">
          <h1> {{countdown}} </h1>
        </div>
        <!-- GAME QUIZ -->
        <div class="pop"  v-if="quiz">
          <div class="quiz" v-for="(item, index) in questions.slice(a,b)" :key="index" >
            <div class="side1">
              <div class="progress">
                <div class="counter"><p>Questions {{b}}/{{questions.length}}</p></div>
                <div class="bar">
                  <div class="metre" :style="{width: bar + '%'}"></div>
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
                <li  v-for="(items, index) in item.suggestions" :key="index" :class="select ? check(items) : ''" @click='selectResponse(items)'>{{items.answer}}</li>
              </ul>
            </div>
          </div>        
        </div>
        <!-- RESULTS OF THE GAME PLAYED -->
        <div class="score" v-if="scoreDisplay">
          <h1 v-if="high">Omo who give you brain like this 😲 !</h1>
          <h1 v-if="low">Olodo ni ehn !. Chop red card 😂 🤣</h1>
          <h1 v-if="average">You try small sha... 😜</h1>
          <p class="s">Correct answers - {{score/200}} / {{questions.length}}</p>
          <img v-if="high" class="s" loading='lazy' src="../assets/images/celebration.svg" alt="" srcset="">
          <img v-if="average" class="s" loading='lazy' src="../assets/images/average.svg" alt="" srcset="">
          <img v-if="low" class="s" loading='lazy' src="../assets/images/low.svg" alt="" srcset="">
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
          question: "What happened to davido's chioma",
          suggestions: [
            {answer: 'Entanglement with Wizkid'},
            {answer: 'Divorced Davido', correct: true},
            {answer: 'Corona Virus killed her'},
            {answer: 'She go use Davido catch cruise'},
          ]
        },
        {
          question: "Why didn't man u buy players this season",
          suggestions: [
            {answer: 'poverty'},
            {answer: 'Health issues'},
            {answer: 'Mourinho spirit they haunt them'},
            {answer: 'Them no just buy', correct: true},
          ]
        },
        {
          question: "ASUU has been on strike for what reason",
          suggestions: [
            {answer: 'Corona'},
            {answer: 'Anytime fuel money rise'},
            {answer: 'Chancellor born pickin'},
            {answer: 'Lecturers don turn enter politics', correct: true},
          ]
        },
        {
          question: `Fill in the gap - I was tired, but I __ did it`,
          suggestions: [
            {answer: 'Nengilly'},
            {answer: 'Ozolly', correct: true},
            {answer: 'reluctantly'},
            {answer: 'still'},
          ]
        },
        {
          question: 'What do we learn from DJ cuppy',
          suggestions: [
            {answer: 'None of the above'},
            {answer: 'How not to be poor'},
            {answer: 'Oppression'},
            {answer: "how to buy ferrari with your dad's money", correct: true},
          ]
        },
        {
          question: 'If you want to beg for money, how ?',
          suggestions: [
            {answer: 'Please lend me some money'},
            {answer: 'Borrow me money'},
            {answer: 'abeg I need cash'},
            {answer: 'abeg my account', correct: true},
          ]
        },
        {
          question: "What do y'all think is gonna happen after Mark Zuck. is done building a branch of Fb here in lagos",
          suggestions: [
            {answer: "Yahoo boys will increase"},
            {answer: 'Imposter syndrome x2' , correct: true},
            {answer: 'None'},
            {answer: 'yahoo boys go cash out finally'},
          ]
        },
        {
          question: 'Serious question - Imagine yourself with 10 million naira...',
          suggestions: [
            {answer: 'Save it until I have enough to buy 3 ferraris for my child 😂', correct: true},
            {answer: 'Invest'},
            {answer: 'Club'},
            {answer: 'Wake up from your dream'},
          ]
        },
        {
          question: "Tricky - Who will win this year's BBN",
          suggestions: [
            {answer: 'N/A'},
            {answer: 'N/A'},
            {answer: 'N/A'},
            {answer: 'Laycon', correct: true},
          ]
        },
        {
          question: 'Dj cuppy owns how many ferraris 😂',
          suggestions: [
            {answer: '1'},
            {answer: '2'},
            {answer: '3', correct: true},
            {answer: '4'},
          ]
        }
      ],
      a: 0,
      b: 1,
      select: false,
      score: 0,
      info: true,
      quiz: false,
      scoreDisplay: false,
      nextBtn: false,
      skipBtn: true,
      bar: 0,
      countdown: 4,
      count: false, 
      high: false,
      low: false,
      average: false
    }
  },
  methods: {
    countDown(){
      if(this.countdown > 0){
        setTimeout(() => {
          this.countdown--
          this.countDown()
          if(this.countdown == 0){
            this.info = false
            this.quiz = true
            this.count = false
          }else{
            this.info = false
            this.quiz = false
            this.count = true
          }
            }, 1000)
      }else{
        this.quiz = false
        this.count = true
      }
    },
    next(){
      if(this.questions.length - 1 == this.a){
        this.quiz = false
        this.scoreDisplay = true
        if(this.score <= 2000 ){
          this.high = true
          this.average = false
          this.low = false
        }
        if(this.score <= 1400 ){
          this.average = true
          this.high = false
          this.low = false
        }
        if(this.score <= 900 ){
          this.low = true
          this.average = false
          this.high = false
        }
      }else{
        this.a += 1
        this.b += 1
        this.select = false
        this.nextBtn = false
        this.skipBtn = true
      }
      this.bar = this.bar + (100/this.questions.length)
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
    },
  },
}
</script>

<style scoped>
span{
  color: var(--black);
  pointer-events: none;
}
.info{
  text-align: center;
  height: 400px;
  border-radius: 20px;
  padding: 20px;
  width: 500px;
  display: grid;
  place-items: center;
  background: var(--secondary);
  background-image: url(../assets/images/instructionbg_pop.svg);
  background-size: cover;
  background-repeat: no-repeat; 
  position: absolute;
  color: white; 
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.info .btns{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
}
.info .btns button{
  padding: 5px 20px;
  border: none;
  outline: none;
  border-radius: 200px; 
  font-size: 20px;
  cursor: pointer;
}
.info .btns button:nth-child(1){
  background: #4BFFA9
}
.info .btns button:nth-child(2){
  background: #F13555;
  color: white;
}
.count{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  transition: all 300ms;
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
  border-radius: 100px;
  transition: all 300ms;
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
  width: 250px;
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
  .info{
    width: 80%;
  }
}
</style>
