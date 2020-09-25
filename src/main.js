import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//MINOR COMPONENTS
import feedback from './components/minorComponents/feedback.vue'
Vue.component('feedback', feedback)

//ROUTED COMPONENTS
import HomePage from './components/HomePage.vue'
import SettingsPage from './components/SettingsPage.vue'
import InstructionsPage from './components/InstructionsPage.vue'
import PopQuiz from './components/PopQuiz.vue'
import notFound from './components/404.vue'

let router = new VueRouter({
  routes: [
    {path: '*', component: notFound},
    {path: '/', component: HomePage},
    {path: '/settings', component: SettingsPage},
    {path: '/instructions', component: InstructionsPage},
    {path: '/popquiz', component: PopQuiz},
  ],
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
