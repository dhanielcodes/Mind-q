import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
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
    },
    getters: {
        questions(state){
            return state.questions
        } 
    }
})

export default store



