import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//MINOR COMPONENTS
import feedback from './components/minorComponents/feedback.vue'
Vue.component('feedback', feedback)
import preloader from './components/minorComponents/preloader.vue'
Vue.component('preloader', preloader)



//ROUTED COMPONENTS
import HomePage from './components/HomePage.vue'
import InstructionsPage from './components/InstructionsPage.vue'
import PopQuiz from './components/PopQuiz.vue'
import Guess from './components/Guess.vue'
import Timed from './components/TimedQuiz.vue'
import notFound from './components/404.vue'

let router = new VueRouter({
  routes: [
    {path: '*', component: notFound, meta: {title: '404 - not found'}},
    {path: '/', component: HomePage, meta: {title: 'Mind-Q'}},
    {path: '/instructions', component: InstructionsPage, meta: {title: 'Instructions'}},
    {path: '/popquiz', component: PopQuiz, meta: {title: 'Pop - Quiz'}},
    {path: '/guess', component: Guess, meta: {title: 'Guess'}},
    {path: '/timed', component: Timed, meta: {title: 'Timed'}}
  ],
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')





document.querySelector('.theme').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('light')
})