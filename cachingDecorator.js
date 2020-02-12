// A Decorator is a wrapper around a function that alters its behavior. The main job is still carried out by the function.
// Decorators can be seen as "features" or  "aspects" that can be added to a function. We can add one of add many, and all without changing the code.

// Methods of note in this code:
// fn.call(context, arg1, arg2...) calls fn with the given context and args (so 'this' passes correctly)
// fn.apply(context, args) calls fn passing context as this and array-like arguments into a list of args.

// Other Patterns of Note:
// Method Borrowing - This is when we take a method from an object and call it in context of another object.
// [].join.call(args)

const worker = {
  someMethod(){return 1},
  slow(min, max){ return min + max + this.someMethod(); },
  sum(...nums){
    let sum = 0;
    nums.forEach(num => sum += num);
    return sum;
  }
};

function cachingDecorator(fn){
  let cache = new Map();
  return function(){
    let key = optimizedHash(arguments);
    if (cache.has(key)){return cache.get(key)} // If there's such key in cache read the result from it
    let result = fn.call(this, ...arguments); // otherwise call the passed fn
    cache.set(key, result); // and cache the result
    return result;
  }
}

// Non-optimized hash
const hash = (...args) => {
  let hashedOutput = '';
  args.forEach((arg, i) => {
    if (i !== args.length -1){
      hashedOutput += `${arg},`
    } else {
      hashedOutput += arg
    }
  })
};

// Optimized Hash
// We take (borrow) a join method from a regular array ([].join) and use [].join.call to run it in the context of our arguments
const optimizedHash = args => [].join.call(args);

worker.sum = cachingDecorator(worker.sum); // Make worker.sum use our cache wrapper

console.time('Precached calculation');
console.log(worker.sum(2, 87, 99, 9999));
console.timeEnd('Precached calculation');

console.time('Cached calculation');
console.log(worker.sum(2, 87, 99, 9999));
console.timeEnd('Cached calculation');
