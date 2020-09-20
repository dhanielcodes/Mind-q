import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//ROUTED COMPONENTS
import HomePage from './components/HomePage.vue'
import ChooseCategoryPage from './components/ChooseCategoryPage.vue'
import SettingsPage from './components/SettingsPage.vue'
import InstructionsPage from './components/InstructionsPage.vue'
import notFound from './components/404.vue'



let router = new VueRouter({
  routes: [
    {path: '*', component: notFound},
    {path: '/', component: HomePage},
    {path: '/category', component: ChooseCategoryPage},
    {path: '/settings', component: SettingsPage},
    {path: '/instructions', component: InstructionsPage}
  ],
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
