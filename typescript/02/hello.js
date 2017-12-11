"use strict";
exports.__esModule = true;
document.write("hello world!");
require("./jquery-2.1.4.min.js");
var hello = (function () {
    function hello() {
    }
    hello.prototype.contructor = function (name) {
        console.dir(this.age + name);
    };
    ;
    hello.prototype.name = function () {
        console.dir('name');
    };
    return hello;
}());
exports.hello = hello;
$("body").html("<h2>Body</h2>");
