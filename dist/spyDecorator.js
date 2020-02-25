"use strict";
// A spy decorator should return a wrapper that saves all the calls to functions in its calls property
const worker = {
    someMethod() { return 1; },
    slow(min, max) { return min + max + this.someMethod(); },
    sum(...nums) {
        let sum = 0;
        nums.forEach(num => sum += num);
        return sum;
    }
};
const spy = (fn) => {
    function wrapper(...args) {
        wrapper.previousCalls.push(args);
        return fn.apply(this, args);
    }
    wrapper.previousCalls = [];
    return wrapper;
};
worker.sum = spy(worker.sum);
console.log(worker.sum(1, 2, 3, 4, 5));
console.log(worker.sum(1, 2, 3, 4, 6));
for (let args of worker.sum.previousCalls) {
    console.log(`Call: ${args.join()}`);
}
module.exports = spy;
//# sourceMappingURL=spyDecorator.js.map