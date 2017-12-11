<template>
	<div id="firstCpm">
		<p @click="titleClick">{{title}}</p>
<el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>		
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:'index1'
			}
		},
		methods:{
			titleClick(el){
				console.dir(el);
				console.dir(this);
				el.target.style.color = "red";
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