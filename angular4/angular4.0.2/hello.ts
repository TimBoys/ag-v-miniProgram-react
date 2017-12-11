for (var i = 0; i < 10; i++) {
	
	console.dir(i);
}
console.dir(i);

let arr1 = ["test1","test2"];
let [t1] = arr1;
console.dir(t1);

function t([jg1,jg2] : [string,string]){
	console.dir(jg1);
}
t(["1","2"]);

let obj = {
	sexName:"tim",
	age:22
}

let {sexName,age} = obj;

console.dir(age  + sexName);

interface readlyTest{
	readonly readName:string,
	readonly readAge :number
}

let readlyProto :readlyTest = {
	readName:"junayn",
	readAge: 333
}
console.dir(readlyProto.readAge);

let readlyArr :any[] = [1,2,3];
let readArr : ReadonlyArray<any> = readlyArr;

console.dir(readlyArr[0]);

let a : any = readlyArr as number[];

interface testJun{
	color?:string,
	width?:number,
	[proName:string]:any
}

function myFun(indexJun : testJun){
	console.dir(indexJun);
}
let contentIndexJun = {colorr:'co',width:222};

myFun(contentIndexJun);
