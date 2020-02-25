declare const cache: (fn: {
    (...nums: number[]): number;
    call?: any;
}) => () => any;
export = cache;
