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
import SettingsPage from './components/SettingsPage.vue'
import InstructionsPage from './components/InstructionsPage.vue'
import PopQuiz from './components/PopQuiz.vue'
import Multiplayer from './components/Multiplayer.vue'
import notFound from './components/404.vue'

let router = new VueRouter({
  routes: [
    {path: '*', component: notFound, meta: {title: '404 - not found'}},
    {path: '/', component: HomePage, meta: {title: 'Mind-Q'}},
    {path: '/settings', component: SettingsPage, meta: {title: 'Settings'}},
    {path: '/instructions', component: InstructionsPage, meta: {title: 'Instructions'}},
    {path: '/popquiz', component: PopQuiz, meta: {title: 'Pop - Quiz'}},
    {path: '/multiplayer', component: Multiplayer, meta: {title: 'Multiplayer'}}
  ],
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
