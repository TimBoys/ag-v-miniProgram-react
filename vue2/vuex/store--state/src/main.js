import Vue from 'vue'
import store from './store/store.js'
import Counter from './components/Counter.vue'

//引入css模块
//import './css/style.css'

 new Vue({
			el:'#app',
  			store,
  			components:{
  			
  				Counter
  				
  			},
  			template:`<div class="app">
  			<counter></counter>
  			<button @click="add">+</button>
			<button @click="release">-</button>
			
  			</div>`,
  			
  			methods:{
  				add(){
  				
  					store.commit('increment')
  				},
  				release(){
  				
  					store.commit('release')
  				}
  			}
		})
