import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Main from './components/Main.vue'
import Browse from './components/Browse.vue'
import Login from './components/Login.vue'
import store from './components/store'

Vue.config.productionTip = false;
Vue.use(VueRouter)

const routes = [
  { path:"/main", component: Main },
  { path:"/browse", component: Browse },
  { path:"/", component: Login }
];

const router = new VueRouter({
  routes: routes
})

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
