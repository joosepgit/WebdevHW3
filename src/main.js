import Vue from 'vue'
//import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Main from './components/Main.vue'
import Browse from './components/Browse.vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter)
//Vue.use(Vuex)

const routes = [
  { path:"/main", component: Main },
  { path:"/browse", component: Browse },
  { path:"/", component: Login }
];

const router = new VueRouter({
  routes: routes
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

new Vue({
  el: '.drop-down-container',

  data: {
    isActive: false
  },

  methods: {
    myFilter: function() {
      this.isActive = !this.isActive;
    }
  }
})