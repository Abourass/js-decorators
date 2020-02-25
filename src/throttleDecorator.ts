const throttle = (func: { apply: (arg0: IArguments, arg1: IArguments) => void; }, ms: number) => {
    let isThrottled = false, savedArgs: IArguments, savedThis: any;

    function wrapper(msg: string) {
        if (isThrottled) {
            savedArgs = arguments; // memo last arguments to call after the cooldown
            savedThis = this;
            return;
        }
        func.apply(this, arguments); // otherwise, go to cooldown state
        isThrottled = true;
        setTimeout(function() {
            isThrottled = false; // plan to reset isThrottled after the delay
            if (savedArgs) { // if there were calls, savedThis/savedArgs have the last one recursive call runs the function and sets cooldown again
                // @ts-ignore
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
};

const log = (msg: string) => console.log(msg);

let logOncePerSecond = throttle(log, 1000);

logOncePerSecond('1');  // shows 1
logOncePerSecond('2');  // (throttling, 1000ms not out yet)
logOncePerSecond('3');  // (throttling, 1000ms not out yet)

// when 1000 ms time out -> outputs 3, intermediate value 2 was ignored
export = throttle;
