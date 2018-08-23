import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Formulaire from './components/Formulaire.vue'
import MoviePage from './components/MoviePage.vue'

Vue.use(VueRouter)


Vue.config.productionTip = false

const routes = [
  { path: '/form', component: Formulaire },
  { path: '/', name: "grille", component: MoviePage}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
