import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), //render App.vue
}).$mount('#app')     // and launch it in id app in index.html
