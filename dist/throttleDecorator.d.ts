declare const throttle: (func: {
    apply: (arg0: IArguments, arg1: IArguments) => void;
}, ms: number) => (msg: string) => void;
export = throttle;
