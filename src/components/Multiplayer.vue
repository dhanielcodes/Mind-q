<template>
    <div>
    <preloader />
        <h2><router-link to="/"><img src="../assets/images/back.svg" alt=""></router-link> <span>-</span> Multiplayer</h2>
        <!-- INFO POP UP BEFORE GAME STARTS -->
        <div class="info" v-if="!secondplayer">
          <h1>Multiplayer</h1>
          <h3>Answer the questions under a timer, highest score wins !. 👺</h3>
          <p>Copy link <br> {{url}} </p>
        </div>
        <div v-if="secondplayer">
          <h1>If you seeing this that means it works when deployed, just send me a dm that it works please 😭😭😭😭 and let me add the correct features</h1>
        </div>
       
    </div>
</template>

<script>
import details from '../details'
/* import axios from 'axios' */


export default {
  name: 'Multiplayer',
  head(){
      return{
          title: 'Multiplayer'
      }
  },
  data() {
    return {
      /* questions: [
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
      ], */
     /*  a: 0,
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
      average: false, */

      //Extra for Multiplayer

      presenceid: null,
      hasAnswered: null,
      Questions: null,
      options: null,

      correctAnswer: null,
      counting: null,
      players: 1,
      secondplayer: false,
      notificationClass: null,
      playerdata: {
          one: {
              id: null,
              score: 0,
              userid: null
          },
          two: {
              id: null,
              score: 0,
              userid: null
          }
      },
      userid: null,
      url: null
    }
  },
  created(){
      this.fetchData()
  },
  methods: {
    fetchData(){
        this.presenceid = this.getUniqueId()

        if(!this.checkPresenceId()){
            let separator = (window.location.href.indexOf('?') === -1) ? '?' : '&'
            window.location.href = window.location.href + separator + this.presenceid
        }

        this.url = window.location.href

        let channel = details.subscribeToPusher()

        channel.bind('pusher: member_added', () => {
            this.players += 1
            this.secondplayer = true
        })

        channel.bind('pusher: subscription_succeeded', (members) => {
          if(members.count === 1 && !this.playerdata.one.id){
            this.playerdata.one.id = members.myID
            this.playerdata.one.userid = 1
            this.userid = 1
          }else if (members.count === 2){
            this.secondplayer = true
            this.playerdata.two.id = members.myID
            this.playerdata.two.userid = 2
            this.userid = 2
          }
        })

        channel.bind('pusher: member_removed' , (members) => {
          if(members.count === 1){
            this.secondplayer = false
          }
        })
    },
    getUniqueId(){
      return 'id=' + Math.random().toString(36).substr(2, 8)
    },
    checkPresenceId(){
      let getQueryString = (field, url) => {
        let href = url ? url : window.location.href
        let reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i')
        let string = reg.exec(href)
        return string ? string[1] : null
      }
      let id = getQueryString('id')
      return id
    },

    //SEPARATED

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
  },
  computed: {
  
  },
}
</script>

<style scoped>
.info{
  text-align: center;
  height: 400px;
  border-radius: 20px;
  padding: 20px;
  width: 500px;
  display: grid;
  place-items: center;
  background: var(--secondary);
  background-image: url(../assets/images/instructionbg_multu.svg);
  background-size: cover;
  background-repeat: no-repeat; 
  position: absolute;
  color: white; 
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
span{
  color: black;
}
</style>
