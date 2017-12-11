<template>
	<div id="firstCpm">
		<p>{{title}}</p>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:"index2"
			}
		},
		computed:{
			myTitle(){
				return this.title + this.data;
			}
		}
	}
</script>

<style type="text/css">
	
	
	
</style>