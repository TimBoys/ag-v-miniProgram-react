
//.vue文件和react的设计思想相似：它采用集中式存储管理应用的所有组件，并保证组件的状态以一种可预测的方式发生变化。所以该文件其实和react的jsx语法的设计思想相似。
//在.vue后缀的文件中可以编写跟该组件相关的css、js、html等代码。
//css代码用style标签标记;
//组件用script;
//组件模板用template
<style>
	h1{
		color: red;
	}
</style>

<template>
	<h1>{{count}}</h1>
</template>

<script>

	import '../css/style.css'
	// 在单独构建的版本中辅助函数为 Vuex.mapState
	import { mapState } from 'vuex'
	
	export default {
		data(){
			return {
				localCount:5
			}
		},
		/*
		//mapState其实是提供了state的一种映射，可以使用简单的写法映射到state的某一些属性。
		computed:mapState({
			//使用mapState之后有几种方法可以映射到state的属性
			//方法1:
			// 箭头函数可使代码更简练
    		//count: state => state.count,
    		
    		//方法2：
    		// 传字符串参数 'count' 等同于 `state => state.count`
    		 count: 'count',
    		 
    		 // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    		countPlusLocalState(state){
      			return state.count + this.localCount
    		}
    		
		})
		*/
		
		//方式3：
		//当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。

		computed: mapState([
  			// 映射 this.count 为 store.state.count
  			'count'
		])

	}
</script>