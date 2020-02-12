// A spy decorator should return a wrapper that saves all the calls to functions in its calls property
const worker = {
  someMethod(){return 1},
  slow(min, max){ return min + max + this.someMethod(); },
  sum(...nums){
    let sum = 0;
    nums.forEach(num => sum += num);
    return sum;
  }
};

function spy(fn){
  function wrapper(...args){
    wrapper.calls.push(args);
    return fn.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

worker.sum = spy(worker.sum);

console.log(worker.sum(1, 2, 3, 4, 5));
console.log(worker.sum(1, 2, 3, 4, 6));

for (let args of worker.sum.calls){
  console.log(`Call: ${args.join()}`)
}



