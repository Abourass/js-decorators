declare function delay(fn: {
    (x: any): void;
    (x: any): void;
    apply?: any;
}, ms: number): (msg: string) => void;
export = delay;
