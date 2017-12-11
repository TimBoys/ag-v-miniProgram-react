for (var i = 0; i < 10; i++) {
    console.dir(i);
}
console.dir(i);
var arr1 = ["test1", "test2"];
var t1 = arr1[0];
console.dir(t1);
function t(_a) {
    var jg1 = _a[0], jg2 = _a[1];
    console.dir(jg1);
}
t(["1", "2"]);
var obj = {
    sexName: "tim",
    age: 22
};
var sexName = obj.sexName, age = obj.age;
console.dir(age + sexName);
var readlyProto = {
    readName: "junayn",
    readAge: 333
};
console.dir(readlyProto.readAge);
var readlyArr = [1, 2, 3];
var readArr = readlyArr;
console.dir(readlyArr[0]);
var a = readlyArr;
function myFun(indexJun) {
    console.dir(indexJun);
}
var contentIndexJun = { colorr: 'co', width: 222 };
myFun(contentIndexJun);
