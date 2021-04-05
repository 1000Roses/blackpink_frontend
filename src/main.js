import Vue from 'vue'
import App from './App.vue'
import Login from './user/components/Login'
import Register from './user/components/Register'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

Vue.config.productionTip = false

import Home from './home/components/Home.vue'
const routes = [
  { path: '', component: Home },
  { path: '/login', component: Login},
  { path: '/signup', component: Register}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
