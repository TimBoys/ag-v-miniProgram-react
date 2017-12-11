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
document.write("hello world!");
function addTest(a, b) {
    //return alert(a + b);
}
addTest("1", 1);
function describe(shape) {
    //return alert(shape.name + shape.width * shape.height);
}
describe({ name: "tim", width: 222, height: 111 });
var tim = {
    name: "tim",
    testJianTou: function () {
        setTimeout(function () {
            //alert(this.name);
        }, 2000);
    }
};
tim.testJianTou();
var testClass = (function () {
    function testClass(test1, test2) {
        this.name = test1;
        this.age = test2;
    }
    testClass.prototype.shoutout = function () {
        return; //alert(this.name + this.age);
    };
    return testClass;
}());
var testClass1 = new testClass("tim", 22);
testClass1.shoutout();
console.dir(testClass1.name);
console.dir(testClass1.age);
var testClassExtend = (function (_super) {
    __extends(testClassExtend, _super);
    function testClassExtend(test1, test2) {
        var _this = _super.call(this, test1, test2) || this;
        _this.sonName = test1 + _this.name;
        return _this;
    }
    testClassExtend.prototype.sonShoutout = function () {
        //alert(this.sonName);
    };
    return testClassExtend;
}(testClass));
var testSonClass = new testClassExtend("extendsTestClass", 99);
console.dir(testSonClass.sonName);
console.dir(testSonClass.name);
testSonClass.shoutout();
testSonClass.sonShoutout();
var obj = {
    obj1: "obj1-test",
    obj2: "obj2-test"
};
var expre = "this is a " + obj.obj1;
console.dir(expre);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.dir(Color);
var colorName = Color[Blue];
alert(colorName);
