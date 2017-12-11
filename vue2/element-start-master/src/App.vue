<template>
  <div id="app">
    <img src="./assets/logo.png" @click="show = !show">
    <div>
      <el-button @click="startHacking">Start</el-button>
      <transition  name="el-zoom-in-center">
         <first-comp class="transition-box" v-show="show"></first-comp>
      </transition>    
      <containtor></containtor>
    </div>
  </div>
</template>

<script>
import firstComp from '../components/firstComp.vue';
import containtor from '../components/containtor.vue';
export default {
	data(){
		return{
			show:"true"
		}
	},
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  },
  components: {
  	firstComp,
  	containtor
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }	
  
  .reactive .el-col {
    border-radius: 4px;
  }
  .reactive .bg-purple-dark {
    background: #99a9bf;
  }
  .reactive .bg-purple {
    background: #d3dce6;
  }
  .reactive .bg-purple-light {
    background: #e5e9f2;
  }
  .reactive .grid-content {
    border-radius: 4px;
    min-height: 36px;
  } 
</style>
