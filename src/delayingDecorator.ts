const saySomething = (x: any) => console.log(x);

const delay = (fn: { (x: any): void; (x: any): void; apply?: any; }, ms: number) => {
  return function(args: any){
    setTimeout(() => fn.apply(this, arguments), ms)
  }
};

const sayHiAfter1000ms = delay(saySomething, 1000);
const sayHelloAfter2000ms = delay(saySomething, 2000);

sayHiAfter1000ms('Hi');
sayHelloAfter2000ms('Hello');

export = delay;
