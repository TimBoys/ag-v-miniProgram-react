import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
console.dir(router);
Vue.use(ElementUI)
console.dir(router);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
