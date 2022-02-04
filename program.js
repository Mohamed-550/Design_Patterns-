"use strict";
exports.__esModule = true;
var Counter_1 = require("./singelton/Counter");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.PrintCounter = function () {
        var Counter1 = Counter_1.Counter.GetInstance();
        var Counter2 = Counter_1.Counter.GetInstance();
        Counter1.AddOne();
        console.log("counter 1: " + Counter1.count);
        Counter2.AddOne();
        console.log("counter 1: " + Counter1.count);
        Counter1.AddOne();
        console.log("counter 1: " + Counter1.count);
        Counter2.AddOne();
        console.log("counter 2: " + Counter2.count);
    };
    return Program;
}());
var RunProgram = new Program();
Program.PrintCounter();
