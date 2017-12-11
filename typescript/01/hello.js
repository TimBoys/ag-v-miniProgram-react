"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var jquery_2_1_4_min_js_1 = require("./jquery-2.1.4.min.js");
jquery_2_1_4_min_js_1["default"]("body").html('2222');
document.write("hello world!");
var num = "length";
var numSlice = num.substr(2, 3);
console.dir(numSlice);
var testF = function () { console.dir('test222'); };
testF();
var boy = {
    name: "tim",
    age: 22
};
boy.agee = '44';
console.dir(boy.agee);
function test(param) {
    return param;
}
test('2');
var boys = (function () {
    function boys(name) {
        this.name = name;
    }
    ;
    boys.prototype.getter = function () {
        console.dir('hello' + this.name);
    };
    return boys;
}());
new boys('tim').getter();
var wuBoys = (function (_super) {
    __extends(wuBoys, _super);
    function wuBoys(name) {
        var _this = _super.call(this, name) || this;
        console.dir(name);
        return _this;
    }
    wuBoys.prototype.study = function () {
        _super.prototype.getter.call(this);
    };
    return wuBoys;
}(boys));
new wuBoys("toy").study();
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
console.dir(animal);
var Gaid = (function () {
    function Gaid() {
        console.dir(Gaid.obj.name);
    }
    Gaid.obj = { name: '222' };
    return Gaid;
}());
var gaid;
gaid = new Gaid();
var company = (function () {
    function company(name) {
        console.dir(name);
    }
    ;
    company.prototype.paly = function (test) {
        console.dir(test);
    };
    return company;
}());
function testStr() {
    var test1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        test1[_i] = arguments[_i];
    }
    console.dir(test1);
}
testStr("Joseph", "Samuel", "Lucas", "MacKinzie");
function identity(arg) {
    return arg;
}
console.dir(identity("string"));
var test222 = (function () {
    function test222() {
    }
    test222.prototype.testT = function () {
    };
    return test222;
}());
new test222().testT();
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = 2] = "down";
})(direction || (direction = {}));
console.dir(direction.up);
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.buton); //<- Now, no error is given
};
var dog = (function () {
    function dog() {
    }
    return dog;
}());
var cat = (function () {
    function cat(param) {
        console.dir(this.name + param);
    }
    return cat;
}());
var catt;
catt = new cat("3333");
var item = [1, 2, 3, 4];
item.forEach(function (item, index, array) {
    console.dir(index);
});
var name12 = 'tea';
var stringTest = "my name is " + name12;
console.dir(stringTest);
var sym2 = Symbol("key");
var sym3 = Symbol("key");
console.dir(sym2);
document.write(sym2.getOwnPropertySymbols);
