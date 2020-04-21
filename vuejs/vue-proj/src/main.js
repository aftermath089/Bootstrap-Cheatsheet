import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,

  //render App.vue
  render: h => h(App)
}).$mount('#app')     // and launch it in id app in index.html
