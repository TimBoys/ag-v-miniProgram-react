import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import firstCpm from '../components/firstCpm.vue';
import secondCpm from '../components/secondCpm.vue';
import userOneCpm from '../components/userOneCpm.vue';
console.dir(VueRouter);

const routers = new VueRouter({
	routes:[{
		path:"/",
		redirect:"/login"
	},{
		path:"/login",
		component:firstCpm
	},{
		path:"/index",
		component:secondCpm,
		children:[{
			path:"/userOne",
			component:userOneCpm
		}]
	}]
})
export default routers;
