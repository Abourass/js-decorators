declare const spy: <Args extends any[]>(fn: {
    (...args: Args): any;
    apply?: any;
}) => {
    (...args: any[]): any;
    previousCalls: any[];
};
export = spy;
