"use strict";
function debounce(fn, minTime) {
    let isCooldown = false;
    return function (msg) {
        if (isCooldown) {
            return;
        }
        fn.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, minTime);
    };
}
let log = debounce(console.log, 1000);
log('Hi'); // runs immediately
log('Ignore me!');
setTimeout(() => log('Ignore me as well!'), 100); // ignored ( only 100 ms passed )
setTimeout(() => log('Don\'t ignore me!!'), 1100); // Runs because enough time has passed
setTimeout(() => log('Still ignored!'), 1500); //  ignored (less than 1000 ms from the last run)
setTimeout(() => log('Good now you get it!!'), 2200); // Runs because enough time has passed
module.exports = debounce;
//# sourceMappingURL=debounceDecorator.js.map