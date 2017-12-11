<template>
	<div id="firstComp">
		<h3>{{title}}</h3>

	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				title:'222',
				articles:[{
					title:'1'
				},{
					title:'2'
				},{
					title:'3'
				}]
			}
		}
	}
</script>

<style type="text/css">
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }	
	
</style>