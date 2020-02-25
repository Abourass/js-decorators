"use strict";
const debounce = (fn, minTime) => {
    let isCooldown = false;
    return function (...args) {
        if (isCooldown) {
            return;
        }
        fn.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, minTime);
    };
};
const logger = debounce(console.log, 1000);
logger('Hi'); // Runs Immediately
logger('Ignore Me!');
setTimeout(() => logger('Ignore me as well!'), 100); // ignored ( only 100 ms passed )
setTimeout(() => logger('Don\'t ignore me!!'), 1100); // Runs because enough time has passed
setTimeout(() => logger('Still ignored!'), 1500); //  ignored (less than 1000 ms from the last run)
setTimeout(() => logger('Good now you get it!!'), 2200); // Runs because enough time has passed
//# sourceMappingURL=sample.js.map