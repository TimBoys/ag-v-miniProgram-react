import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  data:{
  	http:"https://www.baidu.com"
  },
  render: h => h(App)
})
