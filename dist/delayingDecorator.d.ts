declare const delay: (fn: {
    (x: any): void;
    (x: any): void;
    apply?: any;
}, ms: number) => (args: any) => void;
export = delay;
