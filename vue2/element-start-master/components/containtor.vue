<template>
	<div>
			{{title}}
			<button><i class="el-icon-edit"></i></button>
			<el-button type="primary"><i class="el-icon-edit"></i></el-button>
			<el-button type="primary" icon="el-icon-edit"></el-button>
			<el-button type="primary autofocus" plain><i class="el-icon-edit"></i></el-button>
			<el-button type="primary" plain round ><i class="el-icon-edit"></i></el-button>
			<el-button type="primary" plain round disabled><i class="el-icon-edit"></i></el-button>
			
			<el-button type="primary" :loading="true"></el-button>
			<el-button type="primary" class="changeButton">Tim</el-button>
			<el-button type="primary" size="medium">Tim</el-button>
			<el-button type="primary" size="small">Tim</el-button>
			<el-button type="primary" size="mini" >Tim</el-button>
			
			<el-radio v-model="num" label="1"></el-radio>
			<el-radio v-model="num" label="2"></el-radio>
			
			<el-radio-group v-model="city"  @change="changeButton">
				<el-radio-button label="上海">上海</el-radio-button>
				<el-radio-button label="北京" >北京</el-radio-button>
				<el-radio-button label="南京" >南京</el-radio-button>
			</el-radio-group><br />
			
			<el-checkbox v-model="checkbox1" label="1">checkbox1</el-checkbox>
			<el-checkbox v-model="checkbox2" label="1">checkbox2</el-checkbox>
			
			<el-checkbox-group v-model="checkGroupArr" @change="checkChange">
				<el-checkbox label="1">1</el-checkbox>
				<el-checkbox label="2">2</el-checkbox>
				<el-checkbox label="3">3</el-checkbox>
				<el-checkbox label="4">4</el-checkbox>
				<el-checkbox label="5" disabled>5</el-checkbox>
			</el-checkbox-group><br />
			
			<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckChangeAll"></el-checkbox>
			<el-checkbox-group v-model="checkGroup" @change="handleCheckCitysChange" :min="1" :max="3">
				<el-checkbox v-for="city in allCity" :label="city" :key="city">{{city}}</el-checkbox>
			</el-checkbox-group><br />
			
			<el-input v-model="elInput" disabled placeholder="密码"></el-input>
			<el-input v-model="elInput" placeholder="密码" suffix-icon="el-icon-date"></el-input>
			<el-input type="textarea" :rows="5" ></el-input>
			<el-input>
				<template slot="prepend">http://</template>
				<template slot="append">.com</template>
			</el-input>		
			
			<el-input>
				<el-select slot="prepend" v-model="selectModel" class="input-with-select">
					<el-option v-for="city in allCity" :label="city" :value="city" :key="city"></el-option>
				</el-select>
				<template slot="append">.com</template>
			</el-input>
			
			<div id="large">
			<el-input v-model="selectModel" prefix-icon="el-icon-date" size="large">
			</el-input>
			<el-input v-model="selectModel" prefix-icon="el-icon-date" size="medium">
			</el-input>
			</div>
			
			<el-input-number v-model="num1" controls-position="center" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
	
			<el-select v-model="seleVal" clearable multiple>
				<el-option-group v-for="city in allCity2" :label="city.label" :key="city.label">
				<el-option v-for="city in city.options" :label="city.cityOne" :value="city.cityOne" :key="city.cityOne" :disabled="false">
					<span style="float: right; color: #8492a6; font-size: 13px">{{ city.cityOne }}</span>
				</el-option>
				</el-option-group>
			</el-select><br />
	
			<el-switch v-model="value1" @change="swChange()" active-value="100" inactive-value="0">>
				
			</el-switch><br />
			
			<el-slider show-stops show-input range vertical height="200px"	 :step="5" v-model="value2" :format-tooltip="formatTooltip"></el-slider>
			
		<br />
			<el-time-picker v-model="value3">
				
			</el-time-picker>
			
			<el-time-picker v-model="value4" minTime="value3">
				
			</el-time-picker>
		<br />
			
			<el-upload action="https://jsonplaceholder.typicode.com/posts"  :file-list="fileList">
				<el-button type="primary">点击</el-button>
			</el-upload>
			
			<el-color-picker v-model="value5" @change='colorChange'></el-color-picker>
		<br />
			<el-table :data="tableData" stripe border v-loading="false"  element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
				<el-table-column label="编辑22">
				<el-table-column type="selection" width="55" align="center">
					
				</el-table-column>
				<el-table-column prop="data" label="日期" >
					
				</el-table-column>
				<el-table-column label="编辑33">
				<el-table-column prop="name" label="名字"  >
					
				</el-table-column>
				<el-table-column prop="keys" label="键名" >
					
				</el-table-column>
				</el-table-column>
				</el-table-column>
				<el-table-column fixed="left" label="操作" width="100">
					<template slot-scope="scope">
						<el-button type="text" size="small">编辑</el-button>
						<el-button type="text" size="small">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
		
			<el-tag v-for="tag in dynamicTags" :key="tag" closable @close="handleClose(tag)">{{tag}} </el-tag>
		
			<br />
			<el-progress type="circle" :percentage="20"></el-progress>
			<br />
			<el-pagination small :total="100" :page-size="2">
				
			</el-pagination>
			
			<el-badge :value="10">
				<el-button type="primary" @click="loadingShow">button</el-button>
			</el-badge>
			
			<el-alert title="呢" >
				
			</el-alert>
			<el-button type="primary" @click="alertLoading">
				body
			</el-button>
			<el-button type="primary" @click="notify">
				Notification
			</el-button>
	</div>
</template>

<script type="text/javascript">
	import { Loading } from 'element-ui';
	const allCity = ["上海","北京","南京","杭州"];
	const allCity2 = [{label:"省份中部",options:[{cityOne:"安徽"},{cityOne:"江西"}]},{label:"省份北部",options:[{cityOne:"黑龙江"}]}];
	export default{
		data(){
			return {
				title:'234',
				num:"2",
				city:"上海",
				checkbox1:"1",
				checkbox2:"1",
				checkGroupArr:["5"],
				isIndeterminate:true,
				checkAll:false,
				allCity:allCity,
				checkGroup:["北京"],
				elInput:'',
				selectModel:"",
				input5:"",
				select:"",
				num1:5,
				seleVal:'',
				allCity2:allCity2,
				value1:"",
				value2:0,
				value3:new Date(),
				value4:new Date(),
				fileList:[{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
				value5:'#ffffff',
				tableData:[{data:"2017/11/07",name:"junyanwu",keys:"123123"},{data:"2017/11/07",name:"junyanwu",keys:"123123"},{data:"2017/11/07",name:"junyanwu",keys:"123123"},{data:"2017/11/07",name:"junyanwu",keys:"123123"}],
				dynamicTags:["标签一","标签二"]
				
			}
		},
		methods:{
			changeButton:function(){
				alert(this.city);
			},
			checkChange:function(){
				console.dir(this.checkGroupArr);
			},
			handleCheckChangeAll:function(val){
				console.dir(val);
				this.checkGroup = val ? allCity : [];
				this.isIndeterminate = false;
			},
			handleCheckCitysChange:function(val){
				let countLength = val.length;
				this.checkAll = countLength === this.allCity.length;
				this.isIndeterminate = countLength > 0 && countLength < this.allCity.length;
				console.dir(this.checkAll);
				console.dir(this.isIndeterminate);
				console.dir(val);
			},
			handleChange:function(val){
				console.dir(val);
				
			},
			swChange:function(val){
				console.dir(this.value1);
			},
			formatTooltip:function(val){
			},
			colorChange:function(val){
				console.dir(val);
				
			},
			handleClose(tag) {
				console.dir(this.dynamicTags.indexOf(tag));
        		this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      		},
      		loadingShow(){
      			console.dir(Loading);
      			Loading.service();
      			setTimeout(()=>{
      				Loading.service().close();
      			},1000)
      		},
      		alertLoading(){
      			this.$prompt("content","title",{
      				confirmButtonText:"确认",
      				cancelButtonText:"取消"
      			}).then(() => {
      				this.$message({
      				message:"提示框确认",
      				showClose:true
      				})
      				}).catch(() => {
      				this.$message({
      				message:"提示框取消",
      				showClose:true
      				})
      				})
      			},
      		notify(){
      			console.dir(this.$root.http);
      			this.$notify({
      				title:"title",
      				message:"message",
      				duration:1000
      			})
      		}
      		}
	}
</script>
<style type="text/css">
html,body{
font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#containtor{
	background-color: #67C23A;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }	
  .el-select{
    width: 130px;
  }
  #large .el-input{
  	width: 200px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }	
/*custom*/
.changeButton{
	width: 100px;
	height: 100px;
}
</style>