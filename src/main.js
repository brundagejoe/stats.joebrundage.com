import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stats from './data.js'

Vue.config.productionTip = false

let data = {
  stats: stats,
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
