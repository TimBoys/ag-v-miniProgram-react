document.write("hello world!");

function addTest(a : string , b : any){
	//return alert(a + b);
}

addTest("1",1);

interface Shape{
	name:string,
	width:number,
	height:number,
	color?:string
}

function describe(shape : Shape){
	//return alert(shape.name + shape.width * shape.height);
}

describe({name:"tim",width:222,height:111});

var tim = {
	name:"tim",
	testJianTou:function(){
		setTimeout(()=>{
			//alert(this.name);
		},2000)
	}
}

tim.testJianTou();


class testClass{
	public name:string;
	public age:number;
	constructor(test1:string,test2:number){
		this.name = test1;
		this.age = test2;
	}
	shoutout(){
		return //alert(this.name + this.age);
	}
}

var testClass1 = new testClass("tim",22);
testClass1.shoutout();
console.dir(testClass1.name);
console.dir(testClass1.age);

class testClassExtend extends testClass{
	public sonName:string;
	constructor(test1:string,test2:number){
		super(test1,test2);
		this.sonName = test1 + this.name;
	}
	
	sonShoutout(){
		//alert(this.sonName);
	}
	
	
}

var testSonClass = new testClassExtend("extendsTestClass",99);
console.dir(testSonClass.sonName);
console.dir(testSonClass.name);
testSonClass.shoutout();
testSonClass.sonShoutout();


var obj = {
	obj1:"obj1-test",
	obj2:"obj2-test"
}

var expre = `this is a ${obj.obj1}`;
console.dir(expre);

enum Color {Red, Green, Blue};
console.dir(Color);
let colorName: string = Color[2];

alert(colorName);



