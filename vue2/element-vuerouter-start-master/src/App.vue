<template>
	<div id="app">
		<router-link to="/login">login</router-link>
		<router-link to="/index">index</router-link>

		<el-menu :router="true" :default-active="$route.path"  class="el-menu-vertical-demo" mode="vertical" style="width: 200px;" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<div v-for="menuObj in menuObjs">
				<el-menu-item class="el-icon-location" v-if="!menuObj.hasChildMenu" :index="menuObj.routerPath">{{menuObj.itemContent}}</el-menu-item>

				<el-submenu  v-if="menuObj.hasChildMenu" :index="menuObj.routerPath">
					<template  slot="title">  <i class="el-icon-location"></i>{{menuObj.itemContent}}</template>
					<el-menu-item style="font-size: 12px;" v-for="menuChild in menuObj.children" :key="menuChild.childPath" :index="menuChild.childPath">{{menuChild.childItem}}</el-menu-item>
				</el-submenu>
			</div>

		</el-menu>
		
		
		
		
		
		<router-view></router-view>

	</div>
</template>

<script>
	import firstCpm from '../components/firstCpm.vue';
	import secondCpm from '../components/secondCpm.vue';
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '/login',
				menuObjs: [{
					hasChildMenu: false,
					routerPath: "/login",
					itemContent: "登录"
				}, {
					hasChildMenu: true,
					routerPath: "/index",
					itemContent: "首页",
					children: [{
						childPath: "/userOne",
						childItem: "用户1"
					}]
				}]
			}
		},
		methods: {
			startHacking() {
				this.$notify({
					title: 'It works!',
					type: 'success',
					message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
					duration: 5000
				})
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		components: {
			firstCpm,
			secondCpm
		}
	}
</script>

<style>
	html,
	body {
		margin: 0;
		height: 100%;
	}
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
	}
</style>