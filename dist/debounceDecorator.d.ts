declare function debounce(fn: {
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    apply?: any;
}, minTime: number): (msg: string) => void;
export = debounce;
