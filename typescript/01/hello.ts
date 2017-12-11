import $ from "./jquery-2.1.4.min.js";

$("body").html('2222');

document.write("hello world!");

const num = "length";

let numSlice =  num.substr(2,3);
console.dir(numSlice);

let testF = ()=> {console.dir('test222')};

testF();

interface point{
	name:string;
	readonly age?:any;
	[propName:string]:any;
}

let boy : point = {
	name:"tim",
	age: 22
	}

boy.agee = '44';
console.dir(boy.agee);


function test(param):number{
	return param;
}
test('2');


class boys{
	name : string;
	constructor(name:string){
		this.name = name;
	};
	getter(){
		console.dir('hello' + this.name);
	}
}

new boys('tim').getter();

class wuBoys extends boys{
	constructor(name:string){
		super(name);
		console.dir(name);
	}
	study(){
		super.getter();
	}
}

new wuBoys("toy").study();

class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
console.dir(animal);

class Gaid{
	static obj={name:'222'};
	constructor(){
		console.dir(Gaid.obj.name)
	}
}

let gaid : Gaid;
gaid = new Gaid();

 class company{
	constructor(name:string){
		console.dir(name);
	};
	paly(test:string):void{
		console.dir(test);
	}
}

function testStr(...test1){
	console.dir(test1);
}

testStr("Joseph", "Samuel", "Lucas", "MacKinzie");

function identity<T>(arg:T):T{
	return arg;
}

console.dir(identity<string>("string"));

class test222<T>{
	testT(){
	}
}

new test222<string>().testT();

enum direction{
    up = 1,
	down
}

console.dir(direction.up);

window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.buton);  //<- Now, no error is given
};

class dog{
	public name :string;
}

class cat{
	public name : string;
	constructor(param){
		console.dir(this.name + param);
	}
}

let catt :dog;
catt = new cat("3333");

let item = [1,2,3,4];
item.forEach(function(item,index,array){
	console.dir(index);
})

let name12 = 'tea';
let stringTest = `my name is ${name12}`;
console.dir(stringTest);

let sym2 = Symbol("key");
let sym3 = Symbol("key");

console.dir(sym2);
document.write(sym2.getOwnPropertySymbols);



