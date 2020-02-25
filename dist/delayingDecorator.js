"use strict";
const saySomething = (x) => console.log(x);
function delay(fn, ms) {
    return function (msg) {
        setTimeout(() => fn.apply(this, arguments), ms);
    };
}
const sayHiAfter1000ms = delay(saySomething, 1000);
const sayHelloAfter2000ms = delay(saySomething, 2000);
sayHiAfter1000ms('Hi');
sayHelloAfter2000ms('Hello');
module.exports = delay;
//# sourceMappingURL=delayingDecorator.js.map