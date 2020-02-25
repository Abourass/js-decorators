declare const debounce: <Args extends any[], Result extends any>(fn: (...args: Args) => Result, minTime: number) => (...args: Args) => void;
declare const logger: (message?: any, ...optionalParams: any[]) => void;
