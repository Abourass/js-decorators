declare function cache(fn: {
    (...nums: number[]): number;
    call?: any;
}): () => any;
export = cache;
